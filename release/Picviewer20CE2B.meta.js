// ==UserScript==
// @name                 Picviewer CE+
// @author               NLF && ywzhaiqi && hoothin
// @description          Powerful picture viewing tool online, which can popup/scale/rotate/batch save pictures automatically
// @version              2025.1.2.1
// @icon                 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAD////29vbKysoqKioiIiKysrKhoaGTk5N9fX3z8/Pv7+/r6+vk5OTb29vOzs6Ojo5UVFQzMzMZGRkREREMDAy4uLisrKylpaV4eHhkZGRPT08/Pz/IfxjQAAAAgklEQVQoz53RRw7DIBBAUb5pxr2m3/+ckfDImwyJlL9DDzQgDIUMRu1vWOxTBdeM+onApENF0qHjpkOk2VTwLVEF40Kbfj1wK8AVu2pQA1aBBYDHJ1wy9Cf4cXD5chzNAvsAnc8TjoLAhIzsBao9w1rlVTIvkOYMd9nm6xPi168t9AYkbANdajpjcwAAAABJRU5ErkJggg==
// @namespace            https://github.com/hoothin/UserScripts
// @homepage             https://github.com/hoothin/UserScripts/tree/master/Picviewer%20CE%2B
// @supportURL           https://github.com/hoothin/UserScripts/issues
// @connect              www.google.com
// @connect              www.google.com.hk
// @connect              www.google.co.jp
// @connect              ipv4.google.com
// @connect              image.baidu.com
// @connect              www.tineye.com
// @connect              hoothin.com
// @connect              *
// @grant                GM_getValue
// @grant                GM_setValue
// @grant                GM_deleteValue
// @grant                GM_addStyle
// @grant                GM_openInTab
// @grant                GM_setClipboard
// @grant                GM_xmlhttpRequest
// @grant                GM_registerMenuCommand
// @grant                GM_notification
// @grant                GM_download
// @grant                GM.getValue
// @grant                GM.setValue
// @grant                GM.deleteValue
// @grant                GM.addStyle
// @grant                GM.openInTab
// @grant                GM.setClipboard
// @grant                GM.xmlHttpRequest
// @grant                GM.registerMenuCommand
// @grant                GM.notification
// @grant                unsafeWindow
// @require              https://update.greasyfork.org/scripts/6158/23710/GM_config%20CN.js
// @require              https://update.greasyfork.org/scripts/438080/1492792/pvcep_rules.js
// @require              https://update.greasyfork.org/scripts/440698/1427239/pvcep_lang.js
// @match                *://*/*
// @exclude              http://www.toodledo.com/tasks/*
// @exclude              http*://maps.google.com*/*
// @exclude              *://www.google.*/_/chrome/newtab*
// @exclude              *://mega.*/*
// @exclude              *://*.mega.*/*
// @exclude              *://onedrive.live.com/*
// @run-at               document-end
// @created              2011-6-15
// @contributionURL      https://ko-fi.com/hoothin
// @contributionAmount   1
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Picviewer20CE2B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Picviewer20CE2B.meta.js
// ==/UserScript==