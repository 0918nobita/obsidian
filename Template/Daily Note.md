#デイリーノート
<< [[<% tp.date.yesterday() %>]] | [[<% tp.date.tomorrow() %>]] >>
## ルーティン
- [ ] 起床したら布団を畳む
- [ ] Hello Chinese
- [ ] Super Chinese
- [ ] 日付が変わる前に風呂に入る
- [ ] 深夜1時になる前に布団に入る
## 今日やるべきタスク
```dataview
LIST
FROM #task
WHERE typeof(scheduled) = "date" AND typeof(completed) != "date" AND scheduled.year = <% tp.date.now("Y") %> AND scheduled.month = <% tp.date.now("M") %> AND scheduled.day = <% tp.date.now("D") %>
SORT due ASC
SORT file.name ASC
```
## 今日完了したタスク
```dataview
LIST
FROM #task
WHERE typeof(completed) = "date" AND completed.year = <% tp.date.now("Y") %> AND completed.month = <% tp.date.now("M") %> AND completed.day = <% tp.date.now("D") %>
SORT due ASC
SORT file.name ASC
```
## 今日のハイライト
