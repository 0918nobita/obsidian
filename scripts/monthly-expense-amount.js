function renderAmount(year, month) {
    dv.execute(`
        TABLE WITHOUT ID
            sum(rows.amount) as "合計"
        FROM #支出
        WHERE date.year = ${year} AND date.month = ${month}
        GROUP BY true
    `);
}

if (!('year' in input)) {
    dv.paragraph('Please specify year');
} else {
    if (!('month' in input)) {
        dv.paragraph('Please specify month');
    } else {
        renderAmount(input.year, input.month);
    }
}
