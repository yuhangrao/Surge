#!name=Bilibili-Plus
#!desc=去除b站广告，对app页面进行精简，解锁大会员画质

[Rule]
DOMAIN-SUFFIX,cm.bilibili.com,REJECT
URL-REGEX,^https?:\/\/api\.bilibili\.com\/x\/v2\/dm\/ad,REJECT
# 可能的一些推广(beta)
URL-REGEX,^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\?,REJECT
# BiliBili漫画去广告
URL-REGEX,^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.comic\/flash,REJECT

[URL Rewrite]
# 去除搜索中的大家都在搜
^https?:\/\/api\.vc\.bilibili\.com\/search_svr\/v\d\/Search\/recommend_words - reject-dict
# 去除动态中的话题
#^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr - reject-dict
# 去除动态中的最常访问
#^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist - reject-dict
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? - reject-dict
# BiliBili漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash - reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash - reject-dict

[Script]
# BiliBili_推荐去广告 = type=http-response,pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
BiliBili_追番去广告 = type=http-response,pattern=^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
BiliBili_直播去广告 = type=http-response,pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
BiliBili_动态去广告 = type=http-response,pattern=^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\?,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# BiliBili_开屏去广告 = type=http-response,pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# BiliBili_标签页处理 = type=http-response,pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
BiliBili_我的页面处理 = type=http-response,pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine,requires-body=true,script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js

bili-json = type=http-response,pattern=^https:\/\/app\.bilibili\.com\/x\/(v2\/(splash\/(list|show)|feed\/index\?)|resource\/show\/tab\/v2),script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-json.js, requires-body=true, timeout=10

bili-proto = type=http-response,pattern=^https:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js, requires-body=true, binary-body-mode=true, timeout=10

#解锁大会员画质
BiliBili_HD = type=http-response,pattern=https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)),requires-body=true,script-path=https://github.com/Sunert/Script/raw/master/Script/Bilibili/BiliHD.js
[MITM]
hostname = %APPEND% app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,grpc.biliapi.net
