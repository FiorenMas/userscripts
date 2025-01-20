// ==UserScript==
// @name        Pixiv Plus
// @namespace   https://github.com/Ahaochan/Tampermonkey
// @version     0.8.6
// @icon        https://www.pixiv.net/favicon.ico
// @description Focus on immersive experience, 1. Block ads, directly access popular pictures 2. Use user to enter the way to search 3. Search pid and uid 4. Display original image and size, picture rename, download original image | gif map | Zip|multiple map zip 5. display artist id, artist background image 6. auto load comment 7. dynamic markup work type 8. remove redirection 9. single page sort 10. control panel select desired function github: https:/ /github.com/Ahaochan/Tampermonkey, welcome to star and fork.
// @author      Ahaochan
// @include     http*://www.pixiv.net*
// @match       http://www.pixiv.net/
// @connect     i.pximg.net
// @connect     i-f.pximg.net
// @connect     i-cf.pximg.net
// @license     GPL-3.0
// @supportURL  https://github.com/Ahaochan/Tampermonkey
// @grant       unsafeWindow
// @grant       GM.xmlHttpRequest
// @grant       GM.setClipboard
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_getValue
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.min.js
// @require     https://cdn.bootcss.com/jszip/3.1.4/jszip.min.js
// @require     https://cdn.bootcss.com/FileSaver.js/1.3.2/FileSaver.min.js
// @require     https://greasyfork.org/scripts/2963-gif-js/code/gifjs.js?version=8596
// @require     https://greasyfork.org/scripts/375359-gm4-polyfill-1-0-1/code/gm4-polyfill-101.js?version=652238
// @run-at      document-end
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Plus.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Pixiv20Plus.meta.js
// ==/UserScript==
