// ==UserScript==
// @name                  Tabview Youtube
// @name:en               Tabview Youtube
// @description           Make comments and lists into tabs for YouTube Videos




// @version               4.73.32
// @resource              contentCSS        https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/8426b63ce6c0e27e7578b3ba1a0617252b895e20/css/style_content.css
// @resource              chatCSS           https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/8426b63ce6c0e27e7578b3ba1a0617252b895e20/css/style_chat.css
// @resource              controlCSS        https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/8426b63ce6c0e27e7578b3ba1a0617252b895e20/css/style_control.css
// @resource              injectionJS1      https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/8426b63ce6c0e27e7578b3ba1a0617252b895e20/js/injection_script_1.js
// @require               https://greasyfork.org/scripts/465421-vanilla-js-dialog/code/Vanilla%20JS%20Dialog.js?version=1188332

// @namespace             http://tampermonkey.net/
// @author                CY Fung
// @license               MIT
// @supportURL            https://github.com/cyfung1031/Tabview-Youtube
// @run-at                document-start
// @match                 https://www.youtube.com/*
// @exclude               /^https?://\w+\.youtube\.com\/live_chat.*$/
// @exclude               /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                  https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/main/images/icon128p.png

// @compatible            edge Edge [Blink] >= 79;                      Tampermonkey (Beta) / Violentmonkey
// @compatible            chrome Chrome >= 54;                          Tampermonkey (Beta) / Violentmonkey
// @compatible            firefox FireFox / Waterfox (Classic) >= 55;   Tampermonkey / Violentmonkey
// @compatible            opera Opera >= 41;                            Tampermonkey (Beta) / Violentmonkey
// @compatible            safari Safari >= 12.1

// @grant                 GM_getResourceText
// @grant                 GM.getResourceText
// @grant                 GM_registerMenuCommand
// @noframes
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Tabview20Youtube.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Tabview20Youtube.meta.js
// ==/UserScript==