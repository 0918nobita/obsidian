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

    const changeInSavings = entries.reduce((acc, [, income]) => {
        if (acc.length === 0) {
            acc.push(income);
            return acc;
        }

        acc.push(acc[acc.length - 1] + income);
        return acc;
    }, []);

    dv.paragraph(`\`\`\`chart
type: line
labels: ${JSON.stringify(entries.map(([month]) => month))}
series:
  - title: 残高
    data: ${JSON.stringify(changeInSavings)}
\`\`\``);
} else {
    dv.paragraph(`~~~~~\n${result.error}\n~~~~~`);
}
