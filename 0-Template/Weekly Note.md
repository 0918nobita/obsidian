<%*
const lastWeek = tp.date.weekday("YYYY-[W]ww", -7);
const nextWeek = tp.date.weekday("YYYY-[W]ww", 7);
-%>
<< [[2-Weekly/<% lastWeek %>|<% lastWeek %>]] | [[2-Weekly/<% nextWeek %>|<% nextWeek %>]] >>
<%*
const weekdays = [...Array(7).keys()].map(weekday => tp.date.weekday("YYYY-MM-DD", weekday));
-%>

[[1-Daily/<% weekdays[0] %>|<% weekdays[0] %>]]
[[1-Daily/<% weekdays[1] %>|<% weekdays[1] %>]]
[[1-Daily/<% weekdays[2] %>|<% weekdays[2] %>]]
[[1-Daily/<% weekdays[3] %>|<% weekdays[3] %>]]
[[1-Daily/<% weekdays[4] %>|<% weekdays[4] %>]]
[[1-Daily/<% weekdays[5] %>|<% weekdays[5] %>]]
[[1-Daily/<% weekdays[6] %>|<% weekdays[6] %>]]
## 目標
## Keep
## Problem
## Try
