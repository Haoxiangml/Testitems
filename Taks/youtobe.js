/*
提醒蚂蚁森林收能量，该脚本适用于QuanX。
30 7 * * * Alipay.js
点击通知即可跳转收能量。
by tugepaopao
*/

const $ = new compatibility()
const youtobe = "https://www.youtube.com/"

let delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s)
    })
}

delay().then(function(){
    $.notify("Youtobe", "", "哈喽，到看油管的时间了", mayi)
}).finally(() => $done())

function compatibility() {
    _isQuanX = typeof $task != "undefined"
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
    }
    this.notify = (title, subtitle, message, url) => {
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
    }
}
