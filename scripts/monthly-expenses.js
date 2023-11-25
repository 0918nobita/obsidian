const result = await dv.query(`
    TABLE WITHOUT ID
        choice(contains(tags, "支出"), amount * -1, amount)
    FROM #支出 OR #収入
    WHERE date.year = ${input.year} AND date.month = ${input.month}
`);
if (result.successful) {
    const income = result.value.values
        .map((fields) => fields[0])
        .reduce((acc, v) => acc + v, 0);
    dv.paragraph(`${income}`);
} else {
    dv.paragraph(`~~~~~\n${result.error}\n~~~~~`);
}
