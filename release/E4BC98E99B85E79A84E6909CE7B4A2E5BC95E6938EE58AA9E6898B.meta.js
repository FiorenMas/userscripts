// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            Search Engine Assistant
// @version            2025.01.01.1
// @author             F9y4ng
// @description        “Elegant Search Engine Assistant” facilite la navigation entre moteurs de recherche, personnalise les préférences, met en évidence les mots-clés, élimine les redirections et publicités, et filtre les résultats. Compatible avec divers moteurs tels que Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, etc.
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nO2WbUxTVxjHj8IMWZbt05Yt28y2D3yQRN0++MVsmXFbNjBixbFpkSGvXUt5GRpkgOCgIsgqOANUQCXYOQUKCMqrtDAmiorSwioIytsoIL3ce1olQ+W/3KsFlYov8yUmPsn/w725J//fec7zPPcQ8jJexoscABwsFosLpfRTq9W6CIDTMzFmWfYjSmkux3EWSilsYll2YnBwsNxsNi99auaUUn+O48ZZlkODrgW7lAVIjM9DWuohHD3yF8xmBhzHTXZ2du4B4PhEzVmWDeZ32nq+AxvESfDekIbwHbUIV51F+E4dAuTZEK2IQU3VKSEjBoNBQwiZ80TMx8bGPuY4buLsGSPc3WIQvKcVYVrMUPChAXh4JKC0uEGAKCsri/pfxgCcKKULKKXVfHo9RfGQ5Brtmk9BFJux0jUGl7r7MTAwMLR48eI3H9nYarW+c7vQrtqKTFOgxXrZ3lnNbfJNqEJq8kFhnVKplD+q+SKO40x8ofHn+dvOQuxIUsPPJwUbdttP/b2Sakbh6ZEgAJSUlPxOCJn7UOYMw7xBKb1sMo1AFrgTP/imI0ypw0+7GhG4+Q/Ij12dMgmpnoC02Axp0RUEl1sQVjc5DVE3iS8/3ygA9PT09HV3dwdbLJa3HghAKY3lF23eqIJ/bKn9HdZNIuhAH2S5fyNNewWqE2OIK+6Fb1Yb5Eett+BqJvDVsk3o7zdhdNRsmxPXurq6tswKwLKs0aC/iFWiBITV3bQLEJB3CcmVJuhHgA5mWkc7JhCkaoO8YhySQyYsWxqG1e5xcP0iEnJJOppPtgkger1+/wxjAPMopdH8ECk6rIXXpsP2K7zcgo3qi2g3321uU2HbOPxyO4VvQ6v/vZ2xm5Bnt0K0Mg5VFSeFQaVWq/3vNH+FUlrJ07WcNWJLVA7WRtgHCFL3ocAwbtec1wUzIM1pR2jtjRlrZQVDcHeNBl9fRqPRQAh5zXbuUbz5vpxyrFn9C8JTqhB8eNAugP++LtRcun5fAF7RBZeFY7C33jtcLbQzy7I35s+f/4kAwLfcuZYLELlvhbzi2qztFXigD0Xts2SAAWR8Bmqu213vta0e6cpCoRbEYvFavuff5h/2ZpfDO77igf0tO8Ih8mA3jKP2AUrPU/jsbkXocfsF/H1sJbIyjwgAy5cv/46f8R/wD9lZ5VgXV/1QQyZgfzeUx0fQdg9E7fkxRCY2Iij1DPyyO2bUQejxSazw2I7Tze0YGhoyOzo6fiZcKhiGYfifjJu7YrpyZ1PdTQTm9yBkvxGZjQz2NVMoyv6BX3oLQuL/RFiMDpLkU/DbY5w+irpJeEaWQiLPEnZfWVlZSghxFmqgv78/lX+5XVkC11VJ8EpqgM+ucw+Ut7IZXtsaIFbo4JVyAusSdfCM0EC2ueYWRMpprE9pgjhRCzfPX+ErycDw8ChMJtOos7OzFyFknq0NnXp7e/U8RK1Oj58TixAQkvNYEvumw+2bGIREVQsQPpIcfLtGgYrac3z/86lnRCJROCHkvbsGUX5+/utNTU0FDMOM33nNehztTiuEx8otiIg+BtmPGVBszRPe19fXV7u4uHgTQt6/3ySes2TJkgURERGBCoUi5nGk1+ubeDNVRilErtEI9EmZuhc4ODh8PZX2pxVardbJYDAcuzMjw8PDY1KpNJYQ8i55RjE3MzPTR6PRqFUqVebChQv5tH9InkPMIYS8+jyMyQsT/wHRI0Gp4kJwPQAAAABJRU5ErkJggg==
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @require            https://update.greasyfork.org/scripts/460897/1277476/gbCookies.js#sha256-Sv+EuBerch8z/6LvAU0m/ufvjmqB1Q/kbQrX7zAvOPk=
// @match              *://www.baidu.com/*
// @match              *://ipv6.baidu.com/*
// @match              *://image.baidu.com/search*
// @match              *://kaifa.baidu.com/searchPage*
// @match              *://*.bing.com/*search*
// @match              *://duckduckgo.com/*
// @match              *://*.sogou.com/*
// @match              *://www.qwant.com/?*
// @match              *://www.so.com/s*
// @match              *://image.so.com/*
// @match              *://so.toutiao.com/search*
// @match              *://yandex.com/*search*
// @match              *://yandex.ru/*search*
// @match              *://www.ecosia.org/*
// @match              *://*.search.yahoo.com/search*
// @match              *://*.images.search.yahoo.com/search*
// @match              *://you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://swisscows.com/*
// @match              *://search.inetol.net/search*
// @match              *://*.google.com/search*
// @match              *://*.google.ad/search*
// @match              *://*.google.ae/search*
// @match              *://*.google.com.af/search*
// @match              *://*.google.com.ag/search*
// @match              *://*.google.com.ai/search*
// @match              *://*.google.al/search*
// @match              *://*.google.am/search*
// @match              *://*.google.co.ao/search*
// @match              *://*.google.com.ar/search*
// @match              *://*.google.as/search*
// @match              *://*.google.at/search*
// @match              *://*.google.com.au/search*
// @match              *://*.google.az/search*
// @match              *://*.google.ba/search*
// @match              *://*.google.com.bd/search*
// @match              *://*.google.be/search*
// @match              *://*.google.bf/search*
// @match              *://*.google.bg/search*
// @match              *://*.google.com.bh/search*
// @match              *://*.google.bi/search*
// @match              *://*.google.bj/search*
// @match              *://*.google.com.bn/search*
// @match              *://*.google.com.bo/search*
// @match              *://*.google.com.br/search*
// @match              *://*.google.bs/search*
// @match              *://*.google.bt/search*
// @match              *://*.google.co.bw/search*
// @match              *://*.google.by/search*
// @match              *://*.google.com.bz/search*
// @match              *://*.google.ca/search*
// @match              *://*.google.cd/search*
// @match              *://*.google.cf/search*
// @match              *://*.google.cg/search*
// @match              *://*.google.ch/search*
// @match              *://*.google.ci/search*
// @match              *://*.google.co.ck/search*
// @match              *://*.google.cl/search*
// @match              *://*.google.cm/search*
// @match              *://*.google.cn/search*
// @match              *://*.google.com.co/search*
// @match              *://*.google.co.cr/search*
// @match              *://*.google.com.cu/search*
// @match              *://*.google.cv/search*
// @match              *://*.google.com.cy/search*
// @match              *://*.google.cz/search*
// @match              *://*.google.de/search*
// @match              *://*.google.dj/search*
// @match              *://*.google.dk/search*
// @match              *://*.google.dm/search*
// @match              *://*.google.com.do/search*
// @match              *://*.google.dz/search*
// @match              *://*.google.com.ec/search*
// @match              *://*.google.ee/search*
// @match              *://*.google.com.eg/search*
// @match              *://*.google.es/search*
// @match              *://*.google.com.et/search*
// @match              *://*.google.fi/search*
// @match              *://*.google.com.fj/search*
// @match              *://*.google.fm/search*
// @match              *://*.google.fr/search*
// @match              *://*.google.ga/search*
// @match              *://*.google.ge/search*
// @match              *://*.google.gg/search*
// @match              *://*.google.com.gh/search*
// @match              *://*.google.com.gi/search*
// @match              *://*.google.gl/search*
// @match              *://*.google.gm/search*
// @match              *://*.google.gr/search*
// @match              *://*.google.com.gt/search*
// @match              *://*.google.gy/search*
// @match              *://*.google.hk/search*
// @match              *://*.google.com.hk/search*
// @match              *://*.google.hn/search*
// @match              *://*.google.hr/search*
// @match              *://*.google.ht/search*
// @match              *://*.google.hu/search*
// @match              *://*.google.co.id/search*
// @match              *://*.google.ie/search*
// @match              *://*.google.co.il/search*
// @match              *://*.google.im/search*
// @match              *://*.google.co.in/search*
// @match              *://*.google.iq/search*
// @match              *://*.google.is/search*
// @match              *://*.google.it/search*
// @match              *://*.google.je/search*
// @match              *://*.google.com.jm/search*
// @match              *://*.google.jo/search*
// @match              *://*.google.jp/search*
// @match              *://*.google.co.jp/search*
// @match              *://*.google.co.ke/search*
// @match              *://*.google.com.kh/search*
// @match              *://*.google.ki/search*
// @match              *://*.google.kg/search*
// @match              *://*.google.co.kr/search*
// @match              *://*.google.com.kw/search*
// @match              *://*.google.kz/search*
// @match              *://*.google.la/search*
// @match              *://*.google.com.lb/search*
// @match              *://*.google.li/search*
// @match              *://*.google.lk/search*
// @match              *://*.google.co.ls/search*
// @match              *://*.google.lt/search*
// @match              *://*.google.lu/search*
// @match              *://*.google.lv/search*
// @match              *://*.google.com.ly/search*
// @match              *://*.google.co.ma/search*
// @match              *://*.google.md/search*
// @match              *://*.google.me/search*
// @match              *://*.google.mg/search*
// @match              *://*.google.mk/search*
// @match              *://*.google.ml/search*
// @match              *://*.google.com.mm/search*
// @match              *://*.google.mn/search*
// @match              *://*.google.ms/search*
// @match              *://*.google.com.mt/search*
// @match              *://*.google.mu/search*
// @match              *://*.google.mv/search*
// @match              *://*.google.mw/search*
// @match              *://*.google.com.mx/search*
// @match              *://*.google.com.my/search*
// @match              *://*.google.co.mz/search*
// @match              *://*.google.com.na/search*
// @match              *://*.google.com.ng/search*
// @match              *://*.google.com.ni/search*
// @match              *://*.google.ne/search*
// @match              *://*.google.nl/search*
// @match              *://*.google.no/search*
// @match              *://*.google.com.np/search*
// @match              *://*.google.nr/search*
// @match              *://*.google.nu/search*
// @match              *://*.google.co.nz/search*
// @match              *://*.google.com.om/search*
// @match              *://*.google.com.pa/search*
// @match              *://*.google.com.pe/search*
// @match              *://*.google.com.pg/search*
// @match              *://*.google.com.ph/search*
// @match              *://*.google.com.pk/search*
// @match              *://*.google.pl/search*
// @match              *://*.google.pn/search*
// @match              *://*.google.com.pr/search*
// @match              *://*.google.ps/search*
// @match              *://*.google.pt/search*
// @match              *://*.google.com.py/search*
// @match              *://*.google.com.qa/search*
// @match              *://*.google.ro/search*
// @match              *://*.google.ru/search*
// @match              *://*.google.rw/search*
// @match              *://*.google.com.sa/search*
// @match              *://*.google.com.sb/search*
// @match              *://*.google.sc/search*
// @match              *://*.google.se/search*
// @match              *://*.google.com.sg/search*
// @match              *://*.google.sh/search*
// @match              *://*.google.si/search*
// @match              *://*.google.sk/search*
// @match              *://*.google.com.sl/search*
// @match              *://*.google.sn/search*
// @match              *://*.google.so/search*
// @match              *://*.google.sm/search*
// @match              *://*.google.sr/search*
// @match              *://*.google.st/search*
// @match              *://*.google.com.sv/search*
// @match              *://*.google.td/search*
// @match              *://*.google.tg/search*
// @match              *://*.google.co.th/search*
// @match              *://*.google.com.tj/search*
// @match              *://*.google.tl/search*
// @match              *://*.google.tm/search*
// @match              *://*.google.tn/search*
// @match              *://*.google.to/search*
// @match              *://*.google.com.tr/search*
// @match              *://*.google.tt/search*
// @match              *://*.google.com.tw/search*
// @match              *://*.google.co.tz/search*
// @match              *://*.google.com.ua/search*
// @match              *://*.google.co.ug/search*
// @match              *://*.google.co.uk/search*
// @match              *://*.google.com.uy/search*
// @match              *://*.google.co.uz/search*
// @match              *://*.google.com.vc/search*
// @match              *://*.google.co.ve/search*
// @match              *://*.google.vg/search*
// @match              *://*.google.co.vi/search*
// @match              *://*.google.com.vn/search*
// @match              *://*.google.vu/search*
// @match              *://*.google.ws/search*
// @match              *://*.google.rs/search*
// @match              *://*.google.co.za/search*
// @match              *://*.google.co.zm/search*
// @match              *://*.google.co.zw/search*
// @match              *://*.google.cat/search*
// @exclude            *://www.google.com/sorry*
// @exclude            *://www.baidu.com/link*
// @exclude            *://www.sogou.com/link*
// @exclude            *://www.so.com/link*
// @exclude            *://so.toutiao.com/search/jump*
// @connect            baidu.com
// @connect            sogou.com
// @connect            so.com
// @connect            greasyfork.org
// @connect            openuserjs.org
// @connect            githubusercontent.com
// @connect            favicon.yandex.net
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @note               {"CN":"✨ 恭祝大家新年快乐，身体健康、平安如意。🎉","EN":"✨ Wishing you a happy New Year, good health, peace and all the best. 🎉 Blessings via F9y4ng."}
// @note               {"CN":"年度更新脚本版权日期信息，已服务 10 年啦！","EN":"Updated script copyright date to the 10th year."}
// @note               {"CN":"优化 cn.Bing 搜索结果广告的移除规则。","EN":"Optimized cn.Bing search results ads removal."}
// @note               {"CN":"修正一些已知问题，优化代码，优化样式。","EN":"Fixed some known issues, optimized code & style."}
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @license            GPL-3.0-only
// @create             2015-10-07
// @copyright          2015-2025, F9y4ng
// @run-at             document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E4BC98E99B85E79A84E6909CE7B4A2E5BC95E6938EE58AA9E6898B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/E4BC98E99B85E79A84E6909CE7B4A2E5BC95E6938EE58AA9E6898B.meta.js
// ==/UserScript==
