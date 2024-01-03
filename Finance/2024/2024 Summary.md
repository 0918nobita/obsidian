#家計
## 月ごとの収支
```dataviewjs
await dv.view('scripts/yearly-expenses', { year: 2024 });
```
## 残高の推移
```dataviewjs
await dv.view('scripts/yearly-change-in-savings', { year: 2024, base: 142092 });
```
```dataview
TABLE WITHOUT ID
    file.name AS "費目",
    dateformat(date, "MM/dd") as "日付",
    tags[0] AS "支出/収入",
    amount as "金額"
FROM (#支出 OR #収入) AND !"Template"
WHERE date.year = 2024
SORT date ASC
```
