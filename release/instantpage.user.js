// ==UserScript==
// @name              网页加速器
// @namespace         https://github.com/syhyz1990/instantpage
// @version           1.4.3
// @author            YouXiaoHou
// @description       自动帮你加速网页中的超链接，加快打开网页的速度，实测符合条件的网页打开速度减少50%以上。
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/instantpage.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/instantpage.user.js
// @license           AGPL
// @homepage          https://www.youxiaohou.com/tool/install-instantpage.html
// @supportURL        https://github.com/syhyz1990/instantpage
// @require           https://unpkg.com/sweetalert2@10.16.6/dist/sweetalert2.min.js
// @resource          swalStyle https://unpkg.com/sweetalert2@10.16.6/dist/sweetalert2.min.css
// @match             *://*/*
// @noframes
// @run-at            document-idle
// @grant             GM_openInTab
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_registerMenuCommand
// @grant             GM_getResourceText
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMCA3OWMwLTM1LjQgMjguNS02NCA2My45LTY0LjFzNjQuMSAyOC42IDY0LjEgNjRjMCA5LjQtMi4xIDE4LjQtNS43IDI2LjUtMSAyLjMtMi4zIDQuNi0zLjYgNi43LS40LjYtMSAxLTEuNyAxSDExYy0uNyAwLTEuMy0uNC0xLjctMS0xLjMtMi4yLTIuNS00LjQtMy42LTYuN0MyLjEgOTcuNCAwIDg4LjQgMCA3OXptMjQuNC0zOS43Yy01LjIgNS4xLTkuMiAxMS4xLTEyIDE3LjgtMyA2LjktNC41IDE0LjItNC41IDIxLjhhNTUuODYgNTUuODYgMCAwIDAgNC40IDIxLjhjLjcgMS42IDEuNCAzLjIgMi4yIDQuN2g5OC44Yy44LTEuNSAxLjYtMy4xIDIuMi00LjdhNTUuODYgNTUuODYgMCAwIDAgNC40LTIxLjggNTUuODYgNTUuODYgMCAwIDAtNC40LTIxLjhjLTIuOC02LjctNi45LTEyLjctMTItMTcuOC01LjEtNS4yLTExLjEtOS4yLTE3LjgtMTJhNTUuODYgNTUuODYgMCAwIDAtMjEuOC00LjQgNTUuODYgNTUuODYgMCAwIDAtMjEuOCA0LjRjLTYuNiAyLjgtMTIuNiA2LjgtMTcuNyAxMnoiIGZpbGw9IiM0NDQiLz48cGF0aCBkPSJNMTIuNCA1Ny4xYzIuOC02LjcgNi45LTEyLjcgMTItMTcuOCA1LjEtNS4yIDExLjEtOS4yIDE3LjgtMTJBNTUuODYgNTUuODYgMCAwIDEgNjQgMjIuOWE1NS44NiA1NS44NiAwIDAgMSAyMS44IDQuNGM2LjcgMi44IDEyLjcgNi45IDE3LjggMTIgNS4yIDUuMSA5LjIgMTEuMSAxMiAxNy44YTU1Ljg2IDU1Ljg2IDAgMCAxIDQuNCAyMS44IDU1Ljg2IDU1Ljg2IDAgMCAxLTQuNCAyMS44Yy0uNyAxLjYtMS40IDMuMi0yLjIgNC43SDE0LjZjLS44LTEuNS0xLjYtMy4xLTIuMi00LjdBNTUuODYgNTUuODYgMCAwIDEgOCA3OC45Yy0uMS03LjYgMS40LTE0LjkgNC40LTIxLjh6IiBmaWxsPSIjNjQ5OTUwIi8+PHBhdGggZD0iTTc3LjUgNjAuOUM2OCA4MS4yIDY0LjkgODQuNiA2NC42IDg1Yy0xLjUgMS41LTMuNSAyLjMtNS42IDIuM3MtNC4xLS44LTUuNi0yLjNhNy45MSA3LjkxIDAgMCAxIDAtMTEuMmMuMy0uNCAzLjgtMy40IDI0LjEtMTIuOXptMC04Yy0xLjEgMC0yLjMuMi0zLjQuOEM2My4yIDU4LjggNTEgNjQuOSA0Ny44IDY4LjFjLTYuMiA2LjItNi4yIDE2LjMgMCAyMi41IDMuMSAzLjEgNy4yIDQuNyAxMS4yIDQuN3M4LjEtMS42IDExLjItNC43YzMuMi0zLjIgOS4zLTE1LjQgMTQuNC0yNi4zIDIuNi01LjYtMS43LTExLjQtNy4xLTExLjR6TTYzLjkgMjkuOGMtMjcuMiAwLTQ5LjUgMjIuNi00OS4xIDQ5LjggMCAzLjYuNSA3LjIgMS4zIDEwLjYuNCAxLjggMiAzLjEgMy45IDMuMSAyLjYgMCA0LjQtMi40IDMuOS00LjktLjctMy0xLjEtNi4yLTEuMS05LjNBNDIuMDQgNDIuMDQgMCAwIDEgMjYgNjNjMi01IDUtOS40IDguOC0xMy4yUzQzIDQzLjEgNDcuOSA0MWE0Mi4wNCA0Mi4wNCAwIDAgMSAzMi4yIDBjNC45IDIuMSA5LjMgNS4xIDEzLjEgOC45Qzk3IDUzLjYgOTkuOSA1OCAxMDIgNjNhNDIuMDQgNDIuMDQgMCAwIDEgMy4yIDE2LjFjMCAzLjItLjQgNi4zLTEuMSA5LjMtLjYgMi41IDEuMyA0LjkgMy45IDQuOSAxLjggMCAzLjUtMS4zIDMuOS0zLjEuOC0zLjYgMS4zLTcuMyAxLjMtMTEuMSAwLTI3LjMtMjIuMS00OS4zLTQ5LjMtNDkuM3oiIGZpbGw9IiM0NDQiLz48L3N2Zz4=
// ==/UserScript==
!function(){"use strict";let e={getValue:e=>GM_getValue(e),setValue(e,t){GM_setValue(e,t)},include(e,t){e=e.replace(/[-_]/gi,"");for(let n=0,a=t.length;n<a;n++){let a=t[n];if(""!==a&&e.toLowerCase().indexOf(a.toLowerCase())>-1)return!0}return!1},addStyle(e,t,n){t=t||"style";let a=document;if(a.getElementById(e))return;let s=a.createElement(t);s.rel="stylesheet",s.id=e,"style"===t?s.innerHTML=n:s.href=n,a.head.appendChild(s)},reg:{chrome:/^https?:\/\/chrome.google.com\/webstore\/.+?\/([a-z]{32})(?=[\/#?]|$)/,chromeNew:/^https?:\/\/chromewebstore.google.com\/.+?\/([a-z]{32})(?=[\/#?]|$)/,edge:/^https?:\/\/microsoftedge.microsoft.com\/addons\/.+?\/([a-z]{32})(?=[\/#?]|$)/,firefox:/^https?:\/\/(reviewers\.)?(addons\.mozilla\.org|addons(?:-dev)?\.allizom\.org)\/.*?(?:addon|review)\/([^/<>"'?#]+)/,microsoft:/^https?:\/\/(?:apps|www).microsoft.com\/(?:store|p)\/.+?\/([a-zA-Z\d]{10,})(?=[\/#?]|$)/}};({initValue(){[{name:"setting_success_times",value:0},{name:"allow_external_links",value:!0},{name:"allow_query_links",value:!0},{name:"enable_store_link",value:!0},{name:"enable_target_self",value:!1},{name:"enable_animation",value:!1},{name:"delay_on_hover",value:65},{name:"exclude_list",value:""},{name:"exclude_keyword",value:"login\nlogout\nregister\nsignin\nsignup\nsignout\npay\ncreate\nedit\ndownload\ndel\nreset\nsubmit\ndoubleclick\ngoogleads\nexit"}].forEach((t=>{void 0===e.getValue(t.name)&&e.setValue(t.name,t.value)}))},registerMenuCommand(){GM_registerMenuCommand("🚀 已加速："+e.getValue("setting_success_times")+"次",(()=>{Swal.fire({showCancelButton:!0,title:"确定要重置加速次数吗？",icon:"warning",confirmButtonText:"确定",cancelButtonText:"取消",customClass:{popup:"instant-popup"}}).then((t=>{t.isConfirmed&&(e.setValue("setting_success_times",0),history.go(0))}))})),GM_registerMenuCommand("⚙️ 设置",(()=>{let t=`<div style="font-size: 1em;">\n                              <label class="instant-setting-label">加速外部链接<input type="checkbox" id="S-External" ${e.getValue("allow_external_links")?"checked":""} class="instant-setting-checkbox"></label>\n                              <label class="instant-setting-label"><span>加速含参数链接 <a href="https://www.youxiaohou.com/tool/install-instantpage.html#%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a></span><input type="checkbox" id="S-Query" ${e.getValue("allow_query_links")?"checked":""} \n                              class="instant-setting-checkbox"></label>\n                              <label class="instant-setting-label">加速扩展/应用商店链接<input type="checkbox" id="S-Store" ${e.getValue("enable_store_link")?"checked":""} class="instant-setting-checkbox"></label>\n                              <label class="instant-setting-label">加速链接在当前页打开<input type="checkbox" id="S-Target" ${e.getValue("enable_target_self")?"checked":""} class="instant-setting-checkbox"></label>\n                              <label class="instant-setting-label">加速动画效果<input type="checkbox" id="S-Animate" ${e.getValue("enable_animation")?"checked":""} \n                              class="instant-setting-checkbox"></label>\n                              <label class="instant-setting-label">链接预读延时（毫秒）<input type="number" min="65" id="S-Delay" value="${e.getValue("delay_on_hover")}" \n                              class="instant-setting-input"></label>\n                              <label class="instant-setting-label-col">排除下列网址 <textarea placeholder="列表中的域名将不开启加速器，一行一个，例如：www.baidu.com" id="S-Exclude" class="instant-setting-textarea">${e.getValue("exclude_list")}</textarea></label>\n                              <label class="instant-setting-label-col">排除下列关键词 <textarea placeholder="链接中含关键词将不开启加速器，一行一个，例如：logout" id="S-Exclude-Word" class="instant-setting-textarea">${e.getValue("exclude_keyword")}</textarea></label>\n                            </div>`;Swal.fire({title:"加速器配置",html:t,showCloseButton:!0,confirmButtonText:"保存",footer:'<div style="text-align: center;font-size: 1em;">点击查看 <a href="https://www.youxiaohou.com/tool/install-instantpage.html" target="_blank">使用说明</a>，助手免费开源，Powered by <a href="https://www.youxiaohou.com">油小猴</a></div>',customClass:{popup:"instant-popup"}}).then((e=>{e.isConfirmed&&history.go(0)})),document.getElementById("S-External").addEventListener("change",(t=>{e.setValue("allow_external_links",t.currentTarget.checked)})),document.getElementById("S-Query").addEventListener("change",(t=>{e.setValue("allow_query_links",t.currentTarget.checked)})),document.getElementById("S-Store").addEventListener("change",(t=>{e.setValue("enable_store_link",t.currentTarget.checked)})),document.getElementById("S-Target").addEventListener("change",(t=>{e.setValue("enable_target_self",t.currentTarget.checked)})),document.getElementById("S-Animate").addEventListener("change",(t=>{e.setValue("enable_animation",t.currentTarget.checked)})),document.getElementById("S-Delay").addEventListener("change",(t=>{e.setValue("delay_on_hover",t.currentTarget.value)})),document.getElementById("S-Exclude").addEventListener("change",(t=>{e.setValue("exclude_list",t.currentTarget.value)})),document.getElementById("S-Exclude-Word").addEventListener("change",(t=>{e.setValue("exclude_keyword",t.currentTarget.value)}))}))},inExcludeList(){let t=e.getValue("exclude_list").split("\n"),n=location.host;return t.includes(n)},instantPage(){if(window.instantLoaded)return;let t,n;const a=new Set,s=document.createElement("link"),i=s.relList&&s.relList.supports&&s.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,o="instantAllowQueryString"in document.body.dataset||e.getValue("allow_query_links"),l="instantAllowExternalLinks"in document.body.dataset||e.getValue("allow_external_links"),r="instantWhitelist"in document.body.dataset,c="instantMousedownShortcut"in document.body.dataset,d=1111,u=e.getValue("enable_animation"),g=e.getValue("enable_target_self"),m=e.getValue("enable_store_link");window.instantLoaded=!0;const h=e.getValue("exclude_keyword").split("\n");let p=e.getValue("delay_on_hover"),f=!1,b=!1,w=!1;if("instantIntensity"in document.body.dataset){const e=document.body.dataset.instantIntensity;if("mousedown"===e.substr(0,9))f=!0,"mousedown-only"===e&&(b=!0);else if("viewport"===e.substr(0,8))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"===e?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(w=!0):"viewport-all"===e&&(w=!0));else{const t=parseInt(e);Number.isNaN(t)||(p=t)}}if(i){const e={capture:!0,passive:!0};if(b||document.addEventListener("touchstart",(function(e){n=performance.now();const t=e.target.closest("a");if(!x(t))return;v(t)}),e),f?c||document.addEventListener("mousedown",(function(e){const t=e.target.closest("a");if(!x(t))return;v(t)}),e):document.addEventListener("mouseover",(function(e){if(performance.now()-n<d)return;if(!("closest"in e.target))return;const a=e.target.closest("a");if(!x(a))return;a.addEventListener("mouseout",y,{passive:!0}),t=setTimeout((()=>{v(a),t=void 0}),p)}),e),c&&document.addEventListener("mousedown",(function(e){if(performance.now()-n<d)return;const t=e.target.closest("a");if(e.which>1||e.metaKey||e.ctrlKey)return;if(!t)return;t.addEventListener("click",(function(e){1337!==e.detail&&e.preventDefault()}),{capture:!0,passive:!1,once:!0});const a=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,detail:1337});t.dispatchEvent(a)}),e),w){let e;e=window.requestIdleCallback?e=>{requestIdleCallback(e,{timeout:1500})}:e=>{e()},e((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target;e.unobserve(n),v(n)}}))}));document.querySelectorAll("a").forEach((t=>{x(t)&&e.observe(t)}))}))}}function y(e){e.relatedTarget&&e.target.closest("a")===e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function x(t){if(t&&t.href&&(!e.include(t.href,h)||e.reg.chrome.test(t.href)||e.reg.chromeNew.test(t.href)||e.reg.edge.test(t.href)||e.reg.edge.test(t.href)||e.reg.microsoft.test(t.href))&&(!r||"instant"in t.dataset)&&(l||t.origin===location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)){if("http:"===t.protocol&&"https:"===location.protocol){if(0!==t.href.indexOf("http://www.baidu.com/link?url"))return;t.href=t.href.replace("http","https")}if((!/\.[a-zA-Z0-9]{0,5}$/i.test(t.href)||/(com|cn|top|ltd|net|tech|shop|vip|xyz|wang|cloud|online|site|love|art|xin|store|fun|cc|website|press|space|beer|luxe|video|ren|group|fit|yoga|org|pro|ink|biz|info|design|link|work|mobi|kim|pub|name|tv|co|asia|red|live|wiki|gov|life|world|run|show|city|gold|today|plus|cool|icu|company|chat|zone|fans|law|host|center|club|email|fund|social|team|guru|htm|html|php|asp|jsp)$/i.test(t.href))&&(o||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search===location.pathname+location.search||t.dataset.filename||t.dataset.noInstant))return!0}}function v(t){let n=t.href;if(!window.navigator.onLine)return;if(a.has(n))return;m&&(e.reg.chrome.test(n)&&(t.href=n.replace("chrome.google.com","chrome.crxsoso.com")),e.reg.chromeNew.test(n)&&(t.href=n.replace("chromewebstore.google.com","chrome.crxsoso.com/webstore")),e.reg.edge.test(n)&&(t.href=n.replace("microsoftedge.microsoft.com","microsoftedge.crxsoso.com")),e.reg.firefox.test(n)&&(t.href=n.replace("addons.mozilla.org","addons.crxsoso.com")),e.reg.microsoft.test(n)&&(t.href=n.replace(/(www|apps)\.microsoft\.com/,"apps.crxsoso.com")));const s=document.createElement("link");s.rel="prefetch",s.href=n,document.head.appendChild(s),a.add(n),u&&t.classList.add("link-instanted"),g&&(t.target="_self"),e.setValue("setting_success_times",e.getValue("setting_success_times")+1)}},addPluginStyle(){let t="\n                .instant-popup { font-size: 14px !important; }\n                .instant-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 15px; }\n                .instant-setting-label-col { display: flex;align-items: flex-start;;padding-top: 15px;flex-direction:column }\n                .instant-setting-checkbox { width: 16px;height: 16px; }\n                .instant-setting-textarea { width: 100%; margin: 14px 0 0; height: 60px; resize: none; border: 1px solid #bbb; box-sizing: border-box; padding: 5px 10px; border-radius: 5px; color: #666; line-height: 1.2; }\n                .instant-setting-input { border: 1px solid #bbb; box-sizing: border-box; padding: 5px 10px; border-radius: 5px; width: 100px}\n                 @keyframes instantAnminate { from { opacity: 1; } 50% { opacity: 0.4 } to { opacity: 0.9; }}\n                .link-instanted { animation: instantAnminate 0.6s 1; animation-fill-mode:forwards }\n                .link-instanted * { animation: instantAnminate 0.6s 1; animation-fill-mode:forwards }\n            ";document.head&&(e.addStyle("swal-pub-style","style",GM_getResourceText("swalStyle")),e.addStyle("instant-style","style",t));new MutationObserver((()=>{e.addStyle("swal-pub-style","style",GM_getResourceText("swalStyle")),e.addStyle("instant-style","style",t)})).observe(document.head,{childList:!0,subtree:!0})},init(){this.initValue(),this.addPluginStyle(),this.registerMenuCommand(),this.inExcludeList()||this.instantPage()}}).init()}();