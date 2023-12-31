const result = await dv.query(`
    TABLE WITHOUT ID
        date.month,
        choice(contains(tags, "支出"), amount * -1, amount)
    FROM (#支出 OR #収入) AND !"Template"
    WHERE date.year = ${input.year}
`);

if (result.successful) {
    const { values } = result.value;

    const incomePerMonth = values.reduce((acc, [month, income]) => {
        acc.set(month, acc.has(month) ? acc.get(month) + income : income);
        return acc;
    }, new Map());

    const entries = [...incomePerMonth.entries()];

    entries.sort(([m1], [m2]) => {
        if (m1 < m2) return -1;
        if (m1 > m2) return 1;
        return 0;
    });

    dv.paragraph(`\`\`\`chart
type: bar
labels: ${JSON.stringify(entries.map(([month]) => month))}
series:
  - title: 収支
    data: ${JSON.stringify(entries.map(([, income]) => income))}
beginAtZero: true
\`\`\``);
} else {
    dv.paragraph(`~~~~~\n${result.error}\n~~~~~`);
}
