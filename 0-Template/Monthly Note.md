<%*
const date = moment(tp.file.title, "YYYY-MM");
const year = date.year();

const firstWeek = parseInt(date.startOf("month").format("ww"));
const lastWeek = parseInt(date.endOf("month").format("ww"));

let weekLinks = "";

for (let weekNum = firstWeek; weekNum <= lastWeek; weekNum++) {
  weekLinks += `[[2-Weekly/${year}-W${weekNum}|${year}-W${weekNum}]]\n`;
}
-%>
<% weekLinks -%>
## Keep
## Problem
## Try
