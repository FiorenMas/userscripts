// ==UserScript==
// @name         Image Downloader
// @namespace       http://tampermonkey.net/
// @description     Images can be extracted and batch downloaded from most websites. Especially for websites the right click fails or image can not save. Extra features: zip download / auto-enlarge image. See the script description at info page (suitable for chrome/firefox+tampermonkey)
// @version         2.90
// @author          桃源隐叟-The hide oldman in taoyuan mountain
// @connect  *
// @connect  *://*/*
// @grant   GM_openInTab
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_getValue
// @grant   GM_deleteValue
// @grant   GM_xmlhttpRequest
// @grant   GM_download
// @require https://unpkg.com/hotkeys-js@3.9.4/dist/hotkeys.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jszip/3.7.1/jszip.min.js
// @require https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @run-at  document-end
// @match   *://*/*
// @include *
// @match   https://www.bilibili.com/
// @match   https://588ku.com/
// @homepageURL https://github.com/taoyuancun123/modifyText/blob/master/modifyText.js
// @supportURL  https://greasyfork.org/zh-CN/scripts/419894/feedback
// @run-at      document-start
// @license GPLv3
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Image20Downloader.meta.js
// ==/UserScript==
