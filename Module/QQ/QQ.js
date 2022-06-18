
var str = ($response.body);
console.log(str);
str = str.match(/>https(\S*)</)
console.log(str);
//str = str.substring(9,str.length-1)
let opener = str.indexOf("m.tb.cn") != -1 ? "taobao://" + str: ($response.body)
console.log(str);

const $ = new cmp()

if (str.indexOf("m.tb.cn") != -1) {
    $.notify(``, "", "🛍️点击打开淘宝", opener)
} else if (str.indexOf("如需浏览")) {
    $.notify(``,"", "🔗点击打开链接", "https://"+str)
}

$done({body: $response.body});

function cmp() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
