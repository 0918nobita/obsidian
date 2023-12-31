function renderTable(year, month) {
    dv.execute(`
        TABLE WITHOUT ID
            file.name AS "費目",
            date.day AS "日付",
            amount AS "金額"
        FROM #収入
        WHERE date.year = ${year} AND date.month = ${month}
        SORT date ASC
    `);
}

if (!('year' in input)) {
    dv.paragraph('Please specify year');
} else {
    if (!('month' in input)) {
        dv.paragraph('Please specify month');
    } else {
        renderTable(input.year, input.month);
    }
}
