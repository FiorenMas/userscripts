// ==UserScript==
// @name           AdsBypasser Lite
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan, https://adsbypasser.github.io/
// @version        7.29.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/adsbypasser.lite.es7.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/adsbypasser.lite.es7.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v7.29.0/resources/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getValue
// @grant          GM_info
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getValue
// @grant          GM.info
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @noframes
// @run-at         document-start
// @include        http://*
// @include        https://*
// @connect        *
// ==/UserScript==
(()=>{"use strict";var __webpack_modules__=[,(e,t,n)=>{n.r(t),n.d(t,{AdsBypasserError:()=>r,every:()=>a,find:()=>s,forEach:()=>o,isString:()=>u,map:()=>i,none:()=>d,nop:()=>_,partial:()=>l,tryEvery:()=>p,wait:()=>w});class r extends Error{constructor(e){super(e)}get name(){return"AdsBypasserError"}}function o(e,t){return c(e)?Array.prototype.forEach.call(e,t):Object.keys(e).forEach((n=>t(e[n],n,e)))}function a(e,t){return c(e)?Array.prototype.every.call(e,t):Object.keys(e).every((n=>t(e[n],n,e)))}function i(e,t){if(c(e))return Array.prototype.map.call(e,t);const n=Object.assign({},e);return Object.getOwnPropertyNames(n).forEach((r=>{n[r]=t(e[r],r,e)})),n}function s(e,t){for(const[n,r]of function*(e){if(c(e))return void(yield*Array.prototype.entries.call(e));const t=Object.getOwnPropertyNames(e);for(const n of t)yield[n,e[n]]}(e)){const o=t(r,n,e);if(o!==d)return[n,r,o]}return[d,d,d]}function c(e){return Array.isArray(e)||function(e){return"NodeList"===e.constructor.name}(e)}function l(e,...t){if("function"!=typeof e)throw new r("must give a function");return(...n)=>e(...t.concat(n))}function u(e){return"string"==typeof e||e instanceof String}function _(){}const d=_;function w(e){return new Promise((t=>{setTimeout(t,e)}))}function p(e,t){return new Promise((n=>{const r=setInterval((function(){const e=t();e!==d&&(clearInterval(r),n(e))}),e)}))}},(e,t,n)=>{n.r(t),n.d(t,{findHandler:()=>s,register:()=>a});var r=n(1);const o=[];function a(e){o.push(e)}function i(e,t,n,o){return Array.isArray(e)?function(e,t,n,o){const[,,a]=(0,r.find)(e,(e=>i(e,t,n,o)||r.none));return a!==r.none?a:null}(e,t,n,o):"function"==typeof e?function(e,t,n,r){return e(t,n,r)}(e,t,n,o):e instanceof RegExp?function(e,t){return t.match(e)}(e,t):(0,r.isString)(e)?function(e,t){let n=/\*|https?|file|ftp|chrome-extension/,r=/\*|(\*\.)?([^/*]+)/,o=/\/.*/,a=`^(${n.source})://(${r.source})?(${o.source})$`,i=new RegExp(a);const s=e.match(i);if(!s)return null;n=s[1],r=s[2];const c=s[3],l=s[4];if(o=s[5],"*"===n&&!/https?/.test(t.scheme))return null;if(n!==t.scheme)return null;if("file"!==n&&"*"!==r)if(c){if(i=t.host.indexOf(l),i<0||i+l.length!==t.host.length)return null}else if(r!==t.host)return null;return a=o.replace(/[*.[\]?+#]/g,(e=>"*"===e?".*":"\\"+e)),o=new RegExp(`^${a}$`),o.test(t.path)?t:null}(e,n):function(e,t){const n=(0,r.map)(e,((e,n)=>{if(e instanceof RegExp)return t[n].match(e);if(Array.isArray(e)){const[,,o]=(0,r.find)(e,(e=>t[n].match(e)||r.none));return o!==r.none?o:null}throw new r.AdsBypasserError("invalid rule")}));return(0,r.every)(n,(e=>!!e))?n:null}(e,o)}function s(){const e=window.location.toString(),t={scheme:window.location.protocol.slice(0,-1),host:window.location.host,path:window.location.pathname+window.location.search+window.location.hash},n={scheme:window.location.protocol,host:window.location.hostname,port:window.location.port,path:window.location.pathname,query:window.location.search,hash:window.location.hash},[a,s,c]=(0,r.find)(o,(o=>{const a=i(o.rule,e,t,n);return a||r.none}));return a===r.none?null:s.start||s.ready?{start:s.start?(0,r.partial)(s.start,c):r.nop,ready:s.ready?(0,r.partial)(s.ready,c):r.nop}:null}},(e,t,n)=>{n.r(t),n.d(t,{GMAPI:()=>i,rawUSW:()=>o,usw:()=>a});var r=n(1);const o=function(){let e=null;try{e=unsafeWindow}catch(t){try{e=(0,eval)("this").global}catch(e){}}return e||(0,eval)("this").window}(),a=function(){if("Greasemonkey"!==("object"==typeof GM_info&&GM_info?GM_info:"object"==typeof GM&&GM&&GM.info?GM.info:{}).scriptHandler)return o;const e={set:(e,t,n)=>t!==s&&(e[t]=c(n),!0),get(t,n){if(n===s)return t;const r=t[n],o=typeof r;return null===r||"function"!==o&&"object"!==o?r:new Proxy(r,e)},apply(e,t,n){n=Array.prototype.slice.call(n),e===unsafeWindow.Object.defineProperty&&(n[0]=n[0][s]),e===unsafeWindow.Function.apply&&(t=t[s],n[1]=Array.prototype.slice.call(n[1])),e===unsafeWindow.document.querySelector&&(t=t[s]),e===unsafeWindow.document.write&&(t=t[s]);const r=c(n);return e.apply(t,r)},construct(e,t){(t=Array.prototype.slice.call(t)).unshift(void 0);const n=c(t);return new(unsafeWindow.Function.prototype.bind.apply(e,n))}};return new Proxy(unsafeWindow,e)}(),i=function(){if(o.global)return null;const e={};"function"==typeof GM_openInTab?e.openInTab=GM_openInTab:e.openInTab=GM.openInTab;"function"==typeof GM_getValue?e.getValue=(e,t)=>Promise.resolve(GM_getValue(e,t)):e.getValue=GM.getValue;"function"==typeof GM_setValue?e.setValue=(e,t)=>Promise.resolve(GM_setValue(e,t)):e.setValue=GM.setValue;"function"==typeof GM_deleteValue?e.deleteValue=e=>Promise.resolve(GM_deleteValue(e)):e.deleteValue=GM.deleteValue;"function"==typeof GM_xmlhttpRequest?e.xmlHttpRequest=GM_xmlhttpRequest:e.xmlHttpRequest=GM.xmlHttpRequest;"function"==typeof GM_registerMenuCommand?e.registerMenuCommand=GM_registerMenuCommand:e.registerMenuCommand=r.nop;"function"==typeof GM_getResourceURL?e.getResourceUrl=e=>Promise.resolve(GM_getResourceURL(e)):"object"==typeof GM&&GM&&GM.getResourceUrl&&(e.getResourceUrl=GM.getResourceUrl);return e}();const s="__adsbypasser_reverse_proxy__";function c(e){if(null===e||!(e instanceof Object))return e;if(e===unsafeWindow)return e;if(e instanceof String)return e.toString();if(e instanceof Function)return exportFunction(e,unsafeWindow,{allowCrossOriginArguments:!0});if(e instanceof Array){const t=new unsafeWindow.Array;for(let n=0;n<e.length;++n)t.push(c(e[n]));return t}const t=new unsafeWindow.Object;return(0,r.forEach)(e,((e,n)=>{t[n]=c(e)})),t}},(e,t,n)=>{n.r(t),n.d(t,{dumpConfig:()=>d,loadConfig:()=>_});var r=n(1),o=n(2),a=n(3);const i=[{key:"version",default_:0,verify:e=>"number"==typeof e&&e>=0,normalize:u},{key:"align_center",default_:!0,verify:c,normalize:l},{key:"change_background",default_:!0,verify:c,normalize:l},{key:"redirect_image",default_:!0,verify:c,normalize:l},{key:"scale_image",default_:!0,verify:c,normalize:l},{key:"log_level",default_:1,verify:e=>"number"==typeof e&&e>=0&&e<=2,normalize:u}],s=[async()=>{const e=await a.GMAPI.getValue("align_center"),t=await a.GMAPI.getValue("change_background"),n=await a.GMAPI.getValue("scale_image"),r=await a.GMAPI.getValue("redirect_image"),o="boolean"==typeof e;"boolean"!=typeof t&&await a.GMAPI.setValue("change_background",!o||e),"boolean"!=typeof n&&await a.GMAPI.setValue("scale_image",!o||e),o||await a.GMAPI.setValue("align_center",!0),"boolean"!=typeof r&&await a.GMAPI.setValue("redirect_image",!0)},async()=>{"boolean"!=typeof await a.GMAPI.getValue("external_server_support")&&await a.GMAPI.setValue("external_server_support",!1)},async()=>{"number"!=typeof await a.GMAPI.getValue("log_level")&&await a.GMAPI.setValue("log_level",1)},async()=>{await a.GMAPI.deleteValue("external_server_support")}];function c(e){return"boolean"==typeof e}function l(e){return!!e}function u(e){return parseInt(e,10)}async function _(){await async function(){let e=i.map((async e=>{const t=await a.GMAPI.getValue(e.key);return e.verify(t)}));e=await Promise.all(e),(0,r.every)(e,(e=>e))||await a.GMAPI.setValue("version",0)}(),await async function(){let e=await a.GMAPI.getValue("version");if(0!==e&&!e)throw new r.AdsBypasserError("invalid version");for(;e<s.length;)s[e](),++e;await a.GMAPI.setValue("version",e)}(),(0,o.register)({rule:{host:/^adsbypasser\.github\.io$/,path:/^\/configure\.html$/},async ready(){await new Promise((e=>{const t=setInterval((()=>{a.usw.render&&(clearInterval(t),e())}),50)})),a.usw.commit=async e=>{for(const[t,n]of Object.entries(e))await a.GMAPI.setValue(t,n)},a.usw.render({version:await a.GMAPI.getValue("version"),options:{align_center:{type:"checkbox",value:await a.GMAPI.getValue("align_center"),label:"Align Center",help:"Align image to the center if possible. (default: enabled)"},change_background:{type:"checkbox",value:await a.GMAPI.getValue("change_background"),label:"Change Background",help:"Use Firefox-like image background if possible. (default: enabled)"},redirect_image:{type:"checkbox",value:await a.GMAPI.getValue("redirect_image"),label:"Redirect Image",help:["Directly open image link if possible. (default: enabled)","If disabled, redirection will only works on link shortener sites."].join("<br/>\n")},scale_image:{type:"checkbox",value:await a.GMAPI.getValue("scale_image"),label:"Scale Image",help:"When image loaded, scale it to fit window if possible. (default: enabled)"},log_level:{type:"select",value:await a.GMAPI.getValue("log_level"),menu:[[0,"0 (quiet)"],[1,"1 (default)"],[2,"2 (verbose)"]],label:"Log Level",help:["Log level in developer console. (default: 1)","0 will not print anything in console.","1 will only print logs on affected sites.","2 will print on any sites."].join("<br/>\n")}}})}})}async function d(){let e=i.map((async e=>[e.key,await a.GMAPI.getValue(e.key)]));e=await Promise.all(e);const t={};for(const[n,r]of e)t[n]=r;return t}},(e,t,n)=>{n.r(t),n.d(t,{debug:()=>i,info:()=>s,warn:()=>c});var r=n(1);const o=!1;function a(e,t){if(o)return;t=Array.prototype.slice.call(t),(0,r.isString)(t[0])?t[0]="AdsBypasser: "+t[0]:t.unshift("AdsBypasser:");const n=console[e];"function"==typeof n&&n.apply(console,t)}function i(){a("debug",arguments)}function s(){a("info",arguments)}function c(){a("warn",arguments)}},(e,t,n)=>{n.r(t);var r=n(7);r._.register({rule:{host:/^ak\.sv$/},async ready(){await r._.wait(1e3);(0,r.$)("html").click(),await r._.wait(6e3);const e=(0,r.$)('a[class="download_button"]');await r.$.openLink(e)}}),r._.register({rule:{host:/^(www\.)?apunkasoftware\.net$/},async ready(){const e=(0,r.$)("div#proceed-now > a#dlink");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^thefileslocker\.net$/},async ready(){(0,r.$)("#downloadbtn").click()}}),r._.register({rule:{host:[/^(www\.)?indishare\.org$/,/^uploadrar\.com$/]},async ready(){const e=(0,r.$)("button#downloadbtn.downloadbtn");e.removeAttribute("disabled"),e.click()}}),r._.register({rule:{host:/^infidrive\.net$/},async ready(){await r._.wait(4e4);(0,r.$)("button.inline-flex:nth-child(2)").click()}}),r._.register({rule:{host:/^k2s\.cc$/},async ready(){await r._.wait(35e3);const e=(0,r.$)("a.link-to-file");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^katfile\.com$/},async ready(){const e=(0,r.$)('a[id="dlink"]');await r.$.openLink(e.href)}}),r._.register({rule:{host:/^(www\.)?keeplinks\.org$/},async ready(){(0,r.$)('[id="btnproceedsubmit"]').click()}}),r._.register({rule:"https://www.mirrored.to/files/*",async ready(){const e=(0,r.$)(".col-sm.centered.extra-top a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^multiup\.io$/},async ready(){(0,r.$)(".btn-info.btn-lg.btn-block").click()}}),r._.register({rule:{host:/^www\.onlinefreecourse\.net$/},async ready(){const e=(0,r.$)('a[class="btn btn-success"]');await r.$.openLink(e)}}),r._.register({rule:{host:/^sfile\.mobi$/},async ready(){await r._.wait(8e3);(0,r.$)("#download").click()}}),r._.register({rule:{host:/^uploadhaven\.com$/,path:/^\/download\//},async ready(){await r._.wait(18e3);(0,r.$)(".btn-submit-free.btn-download-free").click()}}),r._.register({rule:{host:/^usersdrive\.com$/},async ready(){const e=(0,r.$)(".btn-download");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^1ink\.cc$/},async ready(){const e=(0,r.$)("#countingbtn");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^1link\.club$/},async ready(){const e=(0,r.$)("#download.btn");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^1v\.to$/,path:/^\/t\/[a-zA-Z0-9/=]+/},async start(){const e=window.location.href.replace("/t/","/saliendo/");await r.$.openLink(e)}}),r._.register({rule:{host:/^a2zapk\.io$/},async ready(){const e=(0,r.$)("#dlbtn li a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^adfoc\.us$/},async ready(){const e=(0,r.$)(".skip");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^adshnk\.com$/},async ready(){await r._.wait(16e3);(0,r.$)('button[class="ui right labeled icon button primary huge fluid"]').click(),await r._.wait(18e3);const e=(0,r.$)('a[id="final_redirect"]');await r.$.openLink(e.href)}}),r._.register({rule:{host:/^www\.adz7short\.space$/},async ready(){const e=(0,r.$)("#continue");await r._.wait(1e4),e.click()}}),r._.register({rule:{host:/^bcvc\.ink$/},async ready(){await r._.wait(5e3);(0,r.$)("#getLink").click()}}),r._.register({rule:{host:/^(www\.)?biglistofwebsites\.com$/,path:/^\/go\/(\w+\.\w+)$/},async start(e){await r.$.openLink("http://"+e.path[1])}}),r._.register({rule:[{host:/^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,path:/\/o\/([a-zA-Z0-9]+)/}],async start(e){const t=window.atob(e.path[1]);await r.$.openLink(t)}}),r._.register({rule:{host:/^bioskopkeren\.boo$/},async ready(){await r._.wait(1e3);(0,r.$)(".reklamgec").click()}}),r._.register({rule:{host:/^boost\.ink$/},async start(){const e=(0,r.$)("body").getAttribute("result");e&&await r.$.openLink(atob(e))}}),r._.register({rule:{host:/^cocoleech\.com$/},async ready(){const e=(0,r.$)(".btn.btn-block.btn-success");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^cpmlink\.net$/},async ready(){const e=(0,r.$)("#btn-main");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^ctr\.sh$/},async ready(){await r._.wait(12e3);(0,r.$)(".btn.btn-primary.btn-captcha").click()}}),r._.register({rule:{host:/^cutpaid\.com$/},async ready(){let e=(0,r.$)(".btn-primary");e&&(await r._.wait(2e4),e.click()),e=(0,r.$)(".btn-success.btn-lg.get-link"),await r._.wait(9e3),await r.$.openLink(e.href)}}),r._.register({rule:{host:/^www\.dlink3\.com$/},async ready(){await r._.wait(12e3);const e=(0,r.$)('[class="myButton"]');await r.$.openLink(e.href)}}),r._.register({rule:{host:/^dlupload\.com$/},async ready(){await r._.wait(3500);(0,r.$)(".btn-block.btn-primary.text-white.shadow.m-1.position-relative.up-tooltip-container").click(),await r._.wait(6e3);(0,r.$)(".btn-block.continue-btn-bg").click()}}),r._.register({rule:{host:/^earnlink\.io$/},async ready(){const e=r.$.searchFromScripts(/"([^"]+)"\)\.html\("Continue"\)/);await r.$.openLink(e[1])}}),r._.register({rule:{host:/^forex-trnd\.com$/},async ready(){await r._.wait(1e4);(0,r.$)(".get-link").click()}}),r._.register({rule:{host:/^exeo\.app$/},async ready(){(0,r.$)(".link-button.button").click(),await r._.wait(2e3);(0,r.$)(".link-button").click(),await r._.wait(6e3);(0,r.$)(".link-button.get-link").click()}}),r._.register({rule:{host:/^fc-lc\.(com|xyz)$/},async ready(){await r._.wait(2e3);(0,r.$)(".btn-primary.btn-captcha.mb-4").click()}}),r._.register({rule:{host:/^loaninsurehub\.com$/},async ready(){const e=(0,r.$)("#glink");e&&e.click(),await r._.wait(12e3),r.$.remove("#overlay");const t=(0,r.$)("#surl");t&&t.click()}}),r._.register({rule:{host:/^fir3\.net$/},async ready(){await r._.wait(12e3);(0,r.$)(".btn.btn-success.btn-lg.get-link").click()}}),r._.register({rule:{host:/^get-click2\.blogspot\.com$/},async ready(){const e=(0,r.$)("button#gotolink");e.removeAttribute("disabled"),await r._.wait(1),e.click()}}),r._.register({rule:{host:/^getthot\.com$/},async ready(){await r._.wait(12e3);const e=(0,r.$)(".skip-btn");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^gplinks\.co$/},async ready(){await r._.wait(8e3);(0,r.$)(".get-link").click()}}),r._.register({rule:{host:/^hen-tay\.net$/,path:/^\/go\//},async ready(){const e=(0,r.$)("#download_url div a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^hotshorturl\.com$/},async ready(){const e=(0,r.$)("frame[scrolling=yes]");await r.$.openLink(e.src)}}),r._.register({rule:{host:/^icutlink\.com$/},async ready(){await r._.wait(1e4);const e=(0,r.$)(".btn-success.btn-lg.get-link");await r.$.openLink(e)}}),r._.register({rule:{host:/^zegtrends\.com$/},async ready(){await r._.wait(12e3);(0,r.$)("div > button.bsub").click()}}),r._.register({rule:{host:/^imagetwist\.netlify\.app$/},async ready(){const e=(0,r.$)(".btn.btn-dark");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^www\.javlibrary\.com$/,query:/url=([^&]+)/},async start(e){await r.$.openLink(decodeURIComponent(e.query[1]))}}),r._.register({rule:{host:/^kimochi\.info$/,path:/^\/inter$/},async ready(){const e=(0,r.$)("a#next");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^(www\.)?kingofshrink\.com$/},async ready(){const e=(0,r.$)("#textresult > a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^linegee\.net$/},async ready(){(0,r.$)("p.kecil a").click()}}),r._.register({rule:{host:/^link\.turkdown\.com$/},async ready(){await r._.wait(5e3);const e=(0,r.$)(".btn-success.btn-lg.get-link");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^link1s\.com$/},async ready(){await r._.wait(1e4);(0,r.$)(".btn.btn-success.btn-lg.get-link").click()}}),function(){r._.register({rule:{host:[/^adsafelink\.com$/,/^birdurls\.com$/,/^dz4link\.com$/,/^(linkmoni|shrinkcash)\.com$/,/^shrt10\.com$/,/^tmearn\.net$/,/^vinaurl\.net$/,/^payskip\.org$/,/^clik\.pw$/,/^miniurl\.pw$/,/^aylink\.co$/,/^(clk|oko)\.sh$/,/^cpmlink\.pro$/,/^gitlink\.pro$/,/^megalink\.pro$/,/^met\.bz/,/^mitly\.us$/,/^oke\.io$/,/^pahe\.plus$/,/^pingit\.im$/,/^thotpacks\.xyz$/]},async ready(){const e=new t;await e.call()}});class e{constructor(){this._overlaySelector=['[class$="Overlay"]',"#__random_class_name__","#headlineatas","#myModal",".opacity_wrapper","#overlay"].join(", "),this._formSelector=["#go-link",".go-link","#originalLink.get-link",'form[action="/links/go"]'].join(", ")}removeOverlay(){r.$.remove(this._overlaySelector),r.$.block(this._overlaySelector,document.body),setInterval((()=>{document.body.style.overflow="initial"}),500)}removeFrame(){r.$.remove("iframe")}async call(){if(!await this.prepare())return;const e=await this.getMiddleware();if(!e)return void this.withoutMiddleware();const t=await this.getURL(e);await r.$.openLink(t)}}class t extends e{async prepare(){this.removeOverlay();if(!r.$.$("#captchaShortlink, div.g-recaptcha"))return!0;r._.info("recaptcha detected, stop"),r._.info("trying to listen submit button");return!!r.$.$("#invisibleCaptchaShortlink")&&void 0}async submitListen(e){new MutationObserver((()=>{e.disabled||e.click()})).observe(e,{attributes:!0})}async getMiddleware(){return await async function(e){let t=r.$.window.$;for(;!t;)await r._.wait(50),t=r.$.window.$;const n=t(e);if(n.length>0)return n;return null}(this._formSelector)}withoutMiddleware(){(0,r.$)("#link-view").submit()}async getURL(e){for(;;){await r._.wait(1e3);try{const t=await n(e);if(t)return t}catch(e){r._.warn(e)}}}}function n(e){return new Promise(((t,n)=>{e.is("a")&&e.attr("href")&&t(e.attr("href"));r.$.window.$.ajax({dataType:"json",type:"POST",url:e.attr("action"),data:e.serialize(),success:e=>{e.url?t(e.url):n(new r._.AdsBypasserError(e.message))},error:(e,t,o)=>{r._.warn(e,t,o),n(new r._.AdsBypasserError("request error"))}})}))}}(),r._.register({rule:{host:/^n\.fcd\.su$/},async ready(){const e=(0,r.$)("a.btn:nth-child(2)");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^linkpoi\.me$/},async ready(){await r._.wait(6e3);(0,r.$)(".btn.btn-primary.btn-block.redirect.get-link").click()}}),r._.register({rule:{host:/^linkshrink\.net$/,path:/^\/[a-zA-Z0-9]+$/},async start(){r.$.window._impspcabe=0},async ready(){let e=r.$.searchFromScripts(/revC\("([^"]+)"\)/);e=atob(e[1]),await r.$.openLink("/"+e)}}),r._.register({rule:{host:/^linksly\.co$/},async ready(){(0,r.$)(".btn-primary").click()}}),r._.register({rule:{host:[/^go\.linksly\.co$/,/^go\.bitcosite\.com$/]},async ready(){await r._.wait(8e3);const e=(0,r.$)(".btn-success.btn-lg.get-link");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^lnk2\.cc$/,path:/^\/go\//},async ready(){r.$.remove("iframe, .popupOverlay"),await r._.wait(18e3);(0,r.$)("#getLink").click()}}),r._.register({rule:{host:/^www\.lolinez\.com$/,query:/\?(.+)/},async start(e){await r.$.openLink(e.query[1])}}),r._.register({rule:{host:/^mangalist\.org$/},async ready(){await r._.wait(1e3);(0,r.$)(".btn-primary.url.text-center").click()}}),r._.register({rule:{host:/^mylink\.us$/},async ready(){await r._.wait(8e3);(0,r.$)("div.skip_btn a").click()}}),r._.register({rule:{host:/^nmac\.to$/,path:/^\/dl\/(.+)/},async ready(){const e=(0,r.$)(".btn-medium.btn-block");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^noriskdomain\.com$/},async ready(){await r._.wait(1e4);(0,r.$)(".uk-button-primary.go-to-button").click(),await r._.wait(1e3);(0,r.$)(".uk-button-primary.go-to-button").click()}}),r._.register({rule:{host:/^noweconomy\.live$/},async ready(){const e=(0,r.$)('[class="btn-main get-link"]');await r.$.openLink(e.href)}}),r._.register({rule:{host:/^www\.oni\.vn$/},async ready(){r.$.remove("iframe");let e=r.$.searchFromScripts(/data:"([^"]+)"/);if(!e)throw new r._.AdsBypasserError("pattern changed");e=e[1];const t=await r.$.get("/click.html",e);await r.$.openLink(t)}}),r._.register({rule:{host:/^otomi-games\.com$/,path:/^\/go\//},async ready(){const e=(0,r.$)("#wpsafe-link a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^(www\.)?ouo\.(io|press)$/,path:/(^\/\w+$|^\/go\/\w+$)/},async ready(){(0,r.$)("form").submit()}}),r._.register({rule:{host:/^paylinnk\.com$/},async ready(){await r._.wait(2e3);(0,r.$)("div.banner.banner-captcha").click();(0,r.$)(".btn.btn-success.btn-lg.get-link").click()}}),r._.register({rule:{host:/^icerik\.site$/,path:/^\/go/},async ready(){await r._.wait(500);(0,r.$)("#get_link_btn").click()}}),r._.register({rule:{host:[/^realsht\.mobi$/]},async ready(){(0,r.$)("#download_link").click()}}),r._.register({rule:{host:/^preview\.rlu\.ru$/},async ready(){const e=(0,r.$)("#content > .long_url > a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^segmentnext\.com$/,path:/^\/interstitial\.html$/,query:/return_url=([^&]+)/},async start(e){await r.$.openLink(decodeURIComponent(e.query[1]))}}),r._.register({rule:{host:[/^shink\.me$/,/^shon\.xyz$/]},async ready(){(0,r.$)("#skip").submit()}}),r._.register({rule:{host:/^(short|srt)\.am$/},async ready(){await r._.wait(5e3),await r.$.openLink("",{post:{_image:"Continue"}})}}),function(){function e(e){const t=r.$.searchFromScripts(/xpid:"([^"]+)"/),n={adSessionId:e},o={Accept:"application/json, text/javascript"};t&&(o["X-NewRelic-ID"]=t);const a=setInterval((function(){r.$.get("/shortest-url/end-adsession",n,o).then((function(e){const t=JSON.parse(e);if("ok"==t.status&&t.destinationUrl){clearInterval(a),r.$.removeAllTimer();const e=decodeURIComponent(t.destinationUrl);return r.$.openLink(e)}}))}),1e3)}r._.register({rule:{host:[/^(cllkme|clkmein|corneey|ceesty)\.com$/,/^(destyy|festyy|gestyy)\.com$/,/^sh\.st$/],path:/^\/[\d\w]+/},async ready(){r.$.remove("iframe"),r.$.removeAllTimer();const t=r.$.searchFromScripts(/sessionId: "([\d\w]+)",/);if(t)return void e(t[1]);const n=new MutationObserver((t=>{t.forEach((()=>{const t=r.$.searchFromScripts(/sessionId: "([\d\w]+)",/);t&&(n.disconnect(),e(t[1]))}))}));n.observe(document.body,{childList:!0})}})}(),r._.register({rule:{host:[/^shortlinkto\.biz$/,/^uplinkto\.hair$/]},async ready(){const e=(0,r.$)(".view-well a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^(www\.)?shortly\.xyz$/},async ready(){await r._.wait(8e3);(0,r.$)(".btn-success.btn-lg.get-link").click()}}),r._.register({rule:{host:/^shortmoz\.link$/},async ready(){(0,r.$)(".btn.btn-primary.btn-block").click()}}),r._.register({rule:{host:/^(www\.)?similarsites\.com$/,path:/^\/goto\/([^?]+)/},async start(e){let t=e.path[1];/^https?:\/\//.test(t)||(t="http://"+t),await r.$.openLink(t)}}),r._.register({rule:{host:/^spacetica\.com$/},async ready(){(0,r.$)(".btn.btn-primary.btn-xs").click()}}),r._.register({rule:{host:/^www\.spaste\.com$/,path:/^\/site\//},async ready(){await r._.wait(15e3),(0,r.$)("#template-contactform-submit").click()}}),r._.register({rule:{host:/^stfly\.(me|xyz)$/},async ready(){(0,r.$)(".btn-captcha.m-2.form-send").click()}}),r._.register({rule:{host:/^blogbux\.net$/},async ready(){const e=(0,r.$)(".btn-captcha.m-2.form-send");await r._.wait(12e3),e.click()}}),r._.register({rule:{host:/^techtrendmakers\.com$/},async ready(){const e=(0,r.$)(".btn-captcha.m-2.form-send.step_btn");await r._.wait(6e3),e.click()}}),r._.register({rule:{host:/^(www\.)?supercheats\.com$/,path:/^\/interstitial\.html$/,query:/(?:\?|&)oldurl=([^&]+)(?:$|&)/},async start(e){await r.$.openLink(e.query[1])}}),r._.register({rule:{host:/^swzz\.xyz$/,path:/^\/link\//},async ready(){const e=(0,r.$)("a.btn.btn-primary");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^techgeek\.digital$/},async ready(){const e=(0,r.$)('[class="btn-main get-link"]');e&&e.click();const t=(0,r.$)('a[class="btn-main get-link"]');t&&await r.$.openLink(t.href)}}),r._.register({rule:{host:/^thinfi\.com$/},async ready(){const e=(0,r.$)("div p a");await r.$.openLink(e.href)}}),r._.register({rule:{host:/^go\.tnshort\.net$/},async ready(){await r._.wait(3e3);const e=(0,r.$)('a[class="btn btn-success btn-lg get-link"]');await r.$.openLink(e.href)}}),r._.register({rule:{host:/^tribuntekno\.com$/},async ready(){const e=r.$.$("#lite-human-verif-button");e&&e.click();const t=r.$.$("#lite-start-sora-button");t&&t.click()}}),r._.register({rule:{host:/^tutwuri\.id$/},async ready(){await r._.wait(1e3);(0,r.$)("#btn-1").click(),await r._.wait(12e3);(0,r.$)("#btn-2").click();(0,r.$)("#btn-3").click()}}),r._.register({rule:{host:/^urlbluemedia\.shop$/},async ready(){await r._.wait(7e3);(0,r.$)("input#nut").click()}}),r._.register({rule:{host:[/(^|\.)urlcash\.(com|org)$/,/^(detonating|smilinglinks|pornyhost|urlgalleries)\.com$/,/^looble\.net$/,/^xxxs\.org$/]},async ready(){if(r.$.window&&r.$.window.linkDestUrl)return void await r.$.openLink(r.$.window.linkDestUrl);const e=document.body.innerHTML.match(/linkDestUrl = '(.+)'/);e&&await r.$.openLink(e[1])}}),r._.register({rule:{host:/^(www\.)?vzturl\.com$/},async ready(){const e=(0,r.$)("frame[scrolling=yes]");await r.$.openLink(e.src)}}),r._.register({rule:{host:/^xpshort\.com$/},async ready(){await r._.wait(8e3);(0,r.$)(".btn-success.btn-lg.get-link").click()}})},(e,t,n)=>{n.r(t),n.d(t,{$:()=>w,_:()=>d});var r=n(8),o=n(9),a=n(1),i=n(2),s=n(10),c=n(11),l=n(5),u=n(12),_=n(3);const d={AdsBypasserError:a.AdsBypasserError,evil:u.evil,find:a.find,forEach:a.forEach,generateRandomIP:u.generateRandomIP,info:l.info,none:a.none,partial:a.partial,register:i.register,tryEvery:a.tryEvery,wait:a.wait,warn:l.warn};function w(e,t){return(0,s.querySelector)(e,t)}w.$=s.querySelectorOrNull,w.$$=s.querySelectorAll,w.block=s.block,w.get=r.get,w.getCookie=o.getCookie,w.nuke=u.nuke,w.openLink=c.openLink,w.post=r.post,w.remove=s.remove,w.removeAllTimer=u.removeAllTimer,w.resetCookies=o.resetCookies,w.searchFromScripts=s.searchFromScripts,w.setCookie=o.setCookie,w.toDOM=s.toDOM,w.window=_.usw},(e,t,n)=>{n.r(t),n.d(t,{get:()=>w,post:()=>p});var r=n(1),o=n(3),a=n(5);class i extends r.AdsBypasserError{constructor(e,t,n,r,o,a){super(`${e} ${t} got ${o}`),this._method=e,this._url=t,this._data=n,this._headers=r,this._status=o,this._response=a}get name(){return"AjaxError"}get method(){return this._method}get url(){return this._url}get data(){return this._data}get headers(){return this._headers}get status(){return this._status}get response(){return this._response}}function*s(e){if(e)for(const[t,n]of Object.entries(e))if(Array.isArray(n))for(const e of n)yield[[t,""],e];else if("object"==typeof n)for(const[e,r]of s(n))yield[[t,...e],r];else yield[[t],n]}function c(e){const[t,...n]=e;return`${t}${n.map((e=>`[${e}]`))}`}function l(e,t){const n=Object.getOwnPropertyNames(t);return(0,r.map)(n,(n=>{const r=t[n],o=`${e}[${n}]`;if("object"==typeof r)return l(o,r);return[o,r].map(encodeURIComponent).join("=")})).join("&")}function u(e){const t=typeof e;if(null===e||"string"!==t&&"object"!==t)return"";if("string"===t)return e;if(e instanceof String)return e.toString();const n=Object.getOwnPropertyNames(e);return(0,r.map)(n,(t=>{const n=e[t];if("object"==typeof n)return l(t,n);return[t,n].map(encodeURIComponent).join("=")})).join("&")}function _(e){const t=typeof e;if(null===e||"string"!==t&&"object"!==t)return"";if("string"===t)return e;if(e instanceof String)return e.toString();const n=new FormData;for(const[t,r]of s(e))n.append(c(t),r);return n}function d(e,t,n,s){(0,a.debug)("ajax",e,t,n,s);const c=document.createElement("a");c.href=t;const l={Host:c.hostname||window.location.host,Origin:window.location.origin,Referer:window.location.href,"X-Requested-With":"XMLHttpRequest"};return(0,r.forEach)(l,((e,t)=>{s[t]===r.none?delete s[t]:s[t]=e})),n&&(n=s["Content-Type"].indexOf("json")>=0?JSON.stringify(n):s["Content-Type"].indexOf("multipart")>=0?_(n):u(n),s["Content-Length"]=n.length),new Promise(((r,a)=>{o.GMAPI.xmlHttpRequest({method:e,url:t,data:n,headers:s,onload(o){200!==(o=void 0!==o.responseText?o:this).status?a(new i(e,t,n,s,o.status,o.responseText)):r(o.responseText)},onerror(r){r=void 0!==r.responseText?r:this,a(new i(e,t,n,s,r.status,r.responseText))}})}))}function w(e,t,n){return d("GET",e+(t=(t=u(t))?"?"+t:""),"",n=n||{})}function p(e,t,n){const o={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"};return n&&(0,r.forEach)(n,((e,t)=>{o[t]=e})),d("POST",e,t,o)}},(e,t,n)=>{n.r(t),n.d(t,{getCookie:()=>a,resetCookies:()=>i,setCookie:()=>o});var r=n(1);function o(e,t){document.cookie=`${e}=${t};path=${location.pathname};`}function a(e){let[,t]=(0,r.find)(document.cookie.split(";"),(t=>{if(t.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/,"$1")!==e)return r.none}));return t===r.none?null:(t=t.replace(/^\s*[a-zA-Z0-9-_]+=([^;]+).?$/,"$1"),t||null)}function i(){const e=document.domain,t=document.domain.replace(/^www\./,""),n=document.domain.replace(/^(\w+\.)+?(\w+\.\w+)$/,"$2"),o=new Date(1e3).toUTCString();(0,r.forEach)(document.cookie.split(";"),(r=>{const a=r.replace(/^\s*(\w+)=.+$/,"$1");document.cookie=`${a}=;expires=${o};`,document.cookie=`${a}=;path=/;expires=${o};`;const i=(e,t,n)=>`${e}=;path=/;domain=${t};expires=${n};`;document.cookie=i(a,e,o),document.cookie=i(a,t,o),document.cookie=i(a,n,o)}))}},(e,t,n)=>{n.r(t),n.d(t,{block:()=>_,querySelector:()=>i,querySelectorAll:()=>c,querySelectorOrNull:()=>s,remove:()=>u,searchFromScripts:()=>d,toDOM:()=>l});var r=n(1),o=n(5);class a extends r.AdsBypasserError{constructor(e){super(`\`${e}\` not found`)}get name(){return"DomNotFoundError"}}function i(e,t){t&&t.querySelector||(t=document);const n=t.querySelector(e);if(!n)throw new a(e);return n}function s(e,t){try{return i(e,t)}catch(e){return null}}function c(e,t){t&&t.querySelectorAll||(t=document);return t.querySelectorAll(e)}function l(e){try{const t=new DOMParser;return t.parseFromString(e,"text/html")}catch(e){throw new r.AdsBypasserError("could not parse HTML to DOM")}}function u(e,t){const n=c(e,t);(0,r.forEach)(n,(e=>{(0,o.debug)("removed",e),e.remove()}))}function _(e,t=null){t||(t=document);let n=null;if((0,r.isString)(e))n=()=>{u(e,t)};else{if("function"!=typeof e)throw new TypeError("wrong selector");n=t=>{t.addedNodes.forEach((t=>{e(t)&&t.parentNode.removeChild(t)}))}}new MutationObserver((e=>{e.forEach((e=>{n(e)}))})).observe(t,{childList:!0,subtree:!0})}function d(e,t){return e instanceof RegExp?function(e,t){const n=c("script",t),[,,o]=(0,r.find)(n,(t=>t.textContent.match(e)||r.none));return o===r.none?null:o}(e,t):(0,r.isString)(e)?function(e,t){const n=c("script",t),[,o]=(0,r.find)(n,(t=>{const n=t.textContent.indexOf(e);return n<0?r.none:n}));return o===r.none?null:o.textContent}(e,t):null}},(e,t,n)=>{n.r(t),n.d(t,{openLink:()=>i});var r=n(1),o=n(5);function a(e){return document.body||(document.body=document.createElement("body")),document.body.appendChild(e),(0,r.wait)(0)}async function i(e,t){if(!(0,r.isString)(e)&&!e)return void(0,o.warn)("false URL");const n=void 0===(t=t||{}).referer||t.referer,i=t.post,s=window.location.toString();(0,o.info)(`${s} -> ${e}`),i?await async function(e,t){t=t||{};const n=document.createElement("form");n.method="post",n.action=e,(0,r.forEach)(t,((e,t)=>{const r=document.createElement("input");r.type="hidden",r.name=t,r.value=e,n.appendChild(r)})),await a(n),n.submit()}(e,i):n?await async function(e){const t=document.createElement("a");t.href=e;let n=!1;t.addEventListener("click",(e=>{e.stopPropagation(),n=!0}),!0),await a(t),t.click();const r=setInterval((()=>{if(n)return(0,o.info)("already clicked"),void clearInterval(r);(0,o.info)("try again"),t.click()}),500)}(e):window.top.location.replace(e)}},(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{evil:()=>evil,generateRandomIP:()=>generateRandomIP,nuke:()=>nuke,removeAllTimer:()=>removeAllTimer});var util_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),util_platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),util_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5);function removeAllTimer(){let e=window.setInterval(util_core__WEBPACK_IMPORTED_MODULE_0__.nop,10);for(;e>0;)window.clearInterval(e--);for(e=window.setTimeout(util_core__WEBPACK_IMPORTED_MODULE_0__.nop,10);e>0;)window.clearTimeout(e--)}function nuke(e){try{util_platform__WEBPACK_IMPORTED_MODULE_1__.usw.document.write("nuked by AdsBypasser, leading to ...<br/>")}catch(e){(0,util_logger__WEBPACK_IMPORTED_MODULE_2__.warn)("nuke failed",e)}const t=document.createElement("a");t.href=e,t.textContent=e,document.body.appendChild(t)}function generateRandomIP(){return[0,0,0,0].map((()=>Math.floor(256*Math.random()))).join(".")}function evil(script){return((GM,GM_deleteValue,GM_getResourceURL,GM_getValue,GM_openInTab,GM_registerMenuCommand,GM_setValue,GM_xmlhttpRequest,unsafeWindow,window)=>eval(script))()}}],__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};__webpack_require__.r(__webpack_exports__);var util_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),util_dispatcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),util_platform__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),util_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),util_logger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_ADSBYPASSER_HANDLERS___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6);const isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0;function disableWindowOpen(){try{util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.open=function(){return{closed:!1}}}catch(e){(0,util_logger__WEBPACK_IMPORTED_MODULE_4__.warn)("cannot mock window.open")}util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.alert=util_core__WEBPACK_IMPORTED_MODULE_0__.nop,util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.confirm=util_core__WEBPACK_IMPORTED_MODULE_0__.nop}function disableLeavePrompt(e){if(!e)return;const t={set:function(){(0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)("blocked onbeforeunload")}};e.onbeforeunload=void 0,isSafari?e.__defineSetter__("onbeforeunload",t.set):util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.Object.defineProperty(e,"onbeforeunload",{configurable:!0,enumerable:!1,get:void 0,set:t.set});const n=e.addEventListener;e.addEventListener=function(e){if("beforeunload"!==e)return n.apply(this,arguments);(0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)("blocked addEventListener onbeforeunload")}}function changeTitle(){document.title+=" - AdsBypasser"}async function beforeDOMReady(e){const t=await(0,util_config__WEBPACK_IMPORTED_MODULE_3__.dumpConfig)();(0,util_logger__WEBPACK_IMPORTED_MODULE_4__.info)("working on\n%s \nwith\n%s",window.location.toString(),JSON.stringify(t)),disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__.usw),disableWindowOpen(),await e.start()}async function afterDOMReady(e){disableLeavePrompt(util_platform__WEBPACK_IMPORTED_MODULE_2__.usw.document.body),changeTitle(),await e.ready()}function waitDOM(){return new Promise((e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{e()})):e()}))}async function main(){if(util_platform__WEBPACK_IMPORTED_MODULE_2__.rawUSW.top!==util_platform__WEBPACK_IMPORTED_MODULE_2__.rawUSW.self)return;util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.registerMenuCommand("AdsBypasser - Configure",(()=>{util_platform__WEBPACK_IMPORTED_MODULE_2__.GMAPI.openInTab("https://adsbypasser.github.io/configure.html")})),await(0,util_config__WEBPACK_IMPORTED_MODULE_3__.loadConfig)();const e=(0,util_dispatcher__WEBPACK_IMPORTED_MODULE_1__.findHandler)();return e?(await beforeDOMReady(e),await waitDOM(),void await afterDOMReady(e)):void 0}main().catch((e=>{(0,util_logger__WEBPACK_IMPORTED_MODULE_4__.warn)(e)}))})();