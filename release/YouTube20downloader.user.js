// ==UserScript==
// @name            YouTube downloader
// @icon            https://raw.githubusercontent.com/madkarmaa/youtube-downloader/main/images/icon.png
// @namespace       aGkgdGhlcmUgOik=
// @source          https://github.com/madkarmaa/youtube-downloader
// @supportURL      https://github.com/madkarmaa/youtube-downloader
// @version         3.4.0
// @description     A simple userscript to download YouTube videos in MAX QUALITY
// @author          mk_
// @match           *://*.youtube.com/*
// @connect         api.cobalt.tools
// @connect         raw.githubusercontent.com
// @grant           GM_info
// @grant           GM_addStyle
// @grant           GM_xmlHttpRequest
// @grant           GM_xmlhttpRequest
// @run-at          document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20downloader.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/YouTube20downloader.meta.js
// ==/UserScript==
(async()=>{"use strict";if(!h()||window!==window.parent)return;let e=localStorage.getItem("ytdl-advanced-settings")?JSON.parse(localStorage.getItem("ytdl-advanced-settings")):{enabled:!1,openUrl:""};localStorage.setItem("ytdl-advanced-settings",JSON.stringify(e));let n="true"===String(localStorage.getItem("ytdl-dev-mode")).toLowerCase(),t=null===localStorage.getItem("ytdl-notif-enabled")||"true"===String(localStorage.getItem("ytdl-notif-enabled")).toLowerCase(),o=console.log,a=console.warn,i=console.error,d={video_duration:null,video_url:null,video_author:null,video_title:null,video_id:null},r=!1;const l={MAX:"max","2160p":"2160","1440p":"1440","1080p":"1080","720p":"720","480p":"480","360p":"360","240p":"240","144p":"144"};function s(e,...t){n&&"info"===e.toLowerCase()?o.apply(console,["%c[YTDL]","color: #f00;",...t]):n&&"warn"===e.toLowerCase()?a.apply(console,["%c[YTDL]","color: #f00;",...t]):"error"===e.toLowerCase()&&i.apply(console,["%c[YTDL]","color: #f00;",...t])}function c(e,n=!1){return new Promise(((t,o)=>{GM_xmlhttpRequest({method:"POST",url:"https://api.cobalt.tools/api/json",headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify({url:encodeURI(e),vQuality:localStorage.getItem("ytdl-quality")??"max",filenamePattern:"basic",isAudioOnly:n,disableMetadata:!0}),onload:e=>{const n=JSON.parse(e.responseText);n?.url?t(n.url):o(n)},onerror:e=>o(e)})}))}function u(e){return new Promise((n=>{if(document.querySelector(e))return n(document.querySelector(e));const t=new MutationObserver((()=>{document.querySelector(e)&&(t.disconnect(),n(document.querySelector(e)))}));t.observe(document.body,{childList:!0,subtree:!0})}))}class p{constructor(e,n,t,o=!0){const a=document.createElement("div");a.classList.add("ytdl-notification","opened",t),m(a,"closeNotif",!0);const i=document.createElement("h2");i.textContent=e,a.appendChild(i);const d=document.createElement("div");n.split("\n").forEach((e=>{const n=document.createElement("p");n.textContent=e,d.appendChild(n)})),a.appendChild(d);const r=document.createElement("button");r.textContent="Dismiss",r.addEventListener("click",(()=>{if(o){const e=JSON.parse(localStorage.getItem("ytdl-notifications")??"[]");e.push(t),localStorage.setItem("ytdl-notifications",JSON.stringify(e)),s("info",`Notification ${t} set as read`)}a.classList.remove("opened"),a.classList.add("closed")})),a.appendChild(r),document.body.appendChild(a),s("info","New notification displayed",a)}}async function y(){if(!t)return void s("info","Notifications disabled by the user");const e=JSON.parse(localStorage.getItem("ytdl-notifications"))??[];s("info","Local read notifications hashes\n\n",e);const n=await new Promise(((e,n)=>{GM_xmlhttpRequest({method:"GET",url:"https://raw.githubusercontent.com/madkarmaa/youtube-downloader/main/notifications.json",headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json"},onload:t=>{const o=JSON.parse(t.responseText);o?.length?e(o):n(o)},onerror:e=>n(e)})}));s("info","Online notifications hashes\n\n",n.map((e=>e.uuid)));const o=n.filter((n=>!e.includes(n.uuid)));s("info","Unread notifications hashes\n\n",o.map((e=>e.uuid))),o.reverse().forEach((e=>{new p(e.title,e.body,e.uuid)}))}function m(e,n,t=!1){e.addEventListener("animationend",(e=>{e.animationName===n&&(t?e.target.remove():e.target.style.display="none")}))}function f(e){return e.replace(/{{\s*([^}\s]+)\s*}}/g,((e,n)=>d[n]||e))}async function b(){const o=document.createElement("div");o.id="ytdl-sideMenu",o.classList.add("closed"),o.style.display="none",m(o,"closeMenu");const a=document.createElement("h2");a.textContent="Youtube downloader settings",a.classList.add("header"),o.appendChild(a);const i=document.createElement("div");i.classList.add("setting-row");const d=document.createElement("h3");d.classList.add("setting-label");const r=document.createElement("p");r.classList.add("setting-description"),i.append(d,r);const c=document.createElement("span");c.classList.add("ytdl-switch");const u=document.createElement("input");u.type="checkbox";const p=document.createElement("label");c.append(u,p);const y=i.cloneNode(!0);y.querySelector(".setting-label").textContent="Notifications",y.querySelector(".setting-description").textContent="Disable if you don't want to receive notifications from the developer.";const f=c.cloneNode(!0);f.querySelector("input").checked=t,f.querySelector("input").id="ytdl-notif-switch",f.querySelector("label").setAttribute("for","ytdl-notif-switch"),f.querySelector("input").addEventListener("change",(e=>{t=e.target.checked,localStorage.setItem("ytdl-notif-enabled",t),s("info","Notifications "+(t?"enabled":"disabled"))})),y.appendChild(f),o.appendChild(y);const b=i.cloneNode(!0);b.querySelector(".setting-label").textContent="Video download quality",b.querySelector(".setting-description").textContent="Control the resolution of the downloaded videos. Not all the resolutions are supported by some videos.";const h=document.createElement("select");h.name="dl-quality",h.id="ytdl-dl-quality-select",h.disabled=e.enabled,Object.entries(l).forEach((([e,n])=>{const t=document.createElement("option");t.textContent=e,t.value=n,h.appendChild(t)})),h.value=localStorage.getItem("ytdl-quality")??"max",h.addEventListener("change",(e=>{localStorage.setItem("ytdl-quality",String(e.target.value)),s("info",`Download quality set to ${e.target.value}`)})),b.appendChild(h),o.appendChild(b);const w=i.cloneNode(!0);w.querySelector(".setting-label").textContent="Developer mode",w.querySelector(".setting-description").textContent="Show a detailed output of what's happening under the hood in the console.";const g=c.cloneNode(!0);g.querySelector("input").checked=n,g.querySelector("input").id="ytdl-dev-mode-switch",g.querySelector("label").setAttribute("for","ytdl-dev-mode-switch"),g.querySelector("input").addEventListener("change",(e=>{n=e.target.checked,localStorage.setItem("ytdl-dev-mode",n),console.log("[31m[YTDL][0m Developer mode "+(n?"enabled":"disabled"))})),w.appendChild(g),o.appendChild(w);const v=i.cloneNode(!0);v.querySelector(".setting-label").textContent="Advanced settings",v.querySelector(".setting-description").textContent="FOR EXPERIENCED USERS ONLY. Modify the behaviour of the download button.";const S=document.createElement("div");S.classList.add("advanced-options",e.enabled?"opened":"closed"),S.style.display=e.enabled?"flex":"none",m(S,"closeNotif");const x=c.cloneNode(!0);x.querySelector("input").checked=e.enabled,x.querySelector("input").id="ytdl-advanced-switch",x.querySelector("label").setAttribute("for","ytdl-advanced-switch"),x.querySelector("input").addEventListener("change",(n=>{e.enabled=n.target.checked,localStorage.setItem("ytdl-advanced-settings",JSON.stringify(e)),h.disabled=n.target.checked,n.target.checked?(S.style.display="flex",S.classList.remove("closed"),S.classList.add("opened")):(S.classList.remove("opened"),S.classList.add("closed")),s("info","Advanced settings "+(e.enabled?"enabled":"disabled"))})),v.appendChild(x);const L=document.createElement("label");L.setAttribute("for","advanced-settings-open-url"),L.textContent="Open the given URL in a new window. GET request only.";const C=document.createElement("a");C.href="https://github.com/madkarmaa/youtube-downloader/blob/main/docs/PLACEHOLDERS.md",C.target="_blank",C.textContent="Use placeholders to access video data. Click to know about placeholders",L.appendChild(C);const E=document.createElement("input");E.id="advanced-settings-open-url",E.type="url",E.placeholder="URL to open",E.value=e.openUrl??null,E.addEventListener("focusout",(n=>{n.target.checkValidity()?(e.openUrl=n.target.value,localStorage.setItem("ytdl-advanced-settings",JSON.stringify(e)),s("info",`Advanced settings: URL to open set to "${n.target.value}"`)):(s("error",`Invalid URL to open: "${n.target.value}"`),alert(n.target.validationMessage),n.target.value="")})),S.append(L,E),v.appendChild(S),o.appendChild(v),document.addEventListener("mousedown",(e=>{"none"===o.style.display||o.contains(e.target)||(o.classList.remove("opened"),o.classList.add("closed"),s("info","Side menu closed"))})),document.addEventListener("keydown",(e=>{"p"===e.key&&(function(){const e=document.activeElement;return e&&("input"===e.tagName.toLowerCase()||"textarea"===e.tagName.toLowerCase()||"true"===String(e.getAttribute("contenteditable")).toLowerCase())}()||("none"===o.style.display?(o.style.top=window.scrollY+"px",o.style.display="flex",o.classList.remove("closed"),o.classList.add("opened"),s("info","Side menu opened")):(o.classList.remove("opened"),o.classList.add("closed"),s("info","Side menu closed"))))})),window.addEventListener("scroll",(()=>{o.classList.contains("closed")||(o.classList.remove("opened"),o.classList.add("closed"),s("info","Side menu closed"))})),document.body.appendChild(o),s("info","Side menu created\n\n",o)}function h(){return"www.youtube.com"===window.location.hostname&&window.location.pathname.startsWith("/shorts")?"SHORTS":"www.youtube.com"===window.location.hostname&&window.location.pathname.startsWith("/watch")?"WATCH":"music.youtube.com"===window.location.hostname?"MUSIC":"www.youtube.com"===window.location.hostname?"YOUTUBE":null}function w(e,n){return e.contains(n)}async function g(){const n="MUSIC"===h();if(!n&&!r)return s("warn","Video data not ready"),void new p("Wait!","The video data is not ready yet, try again in a few seconds.","popup",!1);if(n&&!window.location.pathname.startsWith("/watch"))return s("warn","Video URL not avaiable"),void new p("Wait!","Open the music player so the song link is visible, then try again.","popup",!1);try{s("info","Download started"),e.enabled?e.openUrl&&window.open(f(e.openUrl)):window.open(await c(n?window.location.href.replace("music.youtube.com","www.youtube.com"):d.video_url),"_blank"),s("info","Download completed")}catch(e){s("error",JSON.parse(JSON.stringify(e))),new p("Error",JSON.stringify(e),"error",!1)}}async function v(n){const t="MUSIC"===h();if(n.preventDefault(),!t&&!r)return s("warn","Video data not ready"),new p("Wait!","The video data is not ready yet, try again in a few seconds.","popup",!1),!1;if(t&&!window.location.pathname.startsWith("/watch"))return s("warn","Video URL not avaiable"),void new p("Wait!","Open the music player so the song link is visible, then try again.","popup",!1);try{s("info","Download started"),e.enabled?e.openUrl&&window.open(f(e.openUrl)):window.open(await c(t?window.location.href.replace("music.youtube.com","www.youtube.com"):d.video_url,!0),"_blank"),s("info","Download completed")}catch(e){s("error",JSON.parse(JSON.stringify(e))),new p("Error",JSON.stringify(e),"error",!1)}return!1}async function S(e){const n="#actions.style-scope.ytd-reel-player-overlay-renderer",t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("fill","currentColor"),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("width","24"),t.setAttribute("focusable","false"),t.style.pointerEvents="none",t.style.display="block",t.style.width="100%",t.style.height="100%";const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"),t.appendChild(o);const a=document.createElement("button");switch(a.id="ytdl-download-button",a.classList.add("ytp-button"),a.title="Left click to download as video, right click as audio only",a.appendChild(t),h()){case"WATCH":const t=await u("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls");if(s("info","Download button container found\n\n",t),w(t,t.querySelector("#ytdl-download-button"))){s("warn","Download button already in container");break}const o=a.cloneNode(!0);o.classList.add("YT"),o.addEventListener("click",g),o.addEventListener("contextmenu",v),s("info","Download button created\n\n",o),t.insertBefore(o,t.firstChild),s("info","Download button inserted in container");break;case"MUSIC":const i=await u("#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.middle-controls-buttons.style-scope.ytmusic-player-bar");if(s("info","Download button container found\n\n",i),w(i,i.querySelector("#ytdl-download-button"))){s("warn","Download button already in container");break}const d=a.cloneNode(!0);d.classList.add("YTM"),d.addEventListener("click",g),d.addEventListener("contextmenu",v),s("info","Download button created\n\n",d),i.insertBefore(d,i.firstChild),s("info","Download button inserted in container");break;case"SHORTS":if("yt-navigate-finish"!==e.type)return;await u(n);const r=Array.from(document.querySelectorAll(n)).filter((e=>function(e,n=!1){const{top:t,left:o,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:d,innerWidth:r}=window;return n?(t>0&&t<d||a>0&&a<d)&&(o>0&&o<r||i>0&&i<r):t>=0&&o>=0&&a<=d&&i<=r}(e)));s("info","Download button containers found\n\n",r),r.forEach((e=>{if(w(e,e.querySelector("#ytdl-download-button")))return void s("warn","Download button already in container");const n=a.cloneNode(!0);n.classList.add("YTS","yt-spec-button-shape-next","yt-spec-button-shape-next--tonal","yt-spec-button-shape-next--mono","yt-spec-button-shape-next--size-l","yt-spec-button-shape-next--icon-button"),n.addEventListener("click",g),n.addEventListener("contextmenu",v),s("info","Download button created\n\n",n),e.insertBefore(n,e.firstChild),s("info","Download button inserted in container")}));break;default:return}}GM_addStyle('\n#ytdl-sideMenu {\n    min-height: 100vh;\n    z-index: 9998;\n    position: absolute;\n    top: 0;\n    left: -100vw;\n    width: 50vw;\n    background-color: var(--yt-spec-base-background);\n    border-right: 2px solid var(--yt-spec-static-grey);\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 2rem 2.5rem;\n    font-family: "Roboto", "Arial", sans-serif;\n}\n\n#ytdl-sideMenu.opened {\n    animation: openMenu .3s linear forwards;\n}\n\n#ytdl-sideMenu.closed {\n    animation: closeMenu .3s linear forwards;\n}\n\n#ytdl-sideMenu a {\n    color: var(--yt-brand-youtube-red);\n    text-decoration: none;\n    font-weight: 600;\n}\n\n#ytdl-sideMenu a:hover {\n    text-decoration: underline;\n}\n\n#ytdl-sideMenu label {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    font-size: 1.4rem;\n    color: var(--yt-spec-text-primary);\n}\n\n#ytdl-sideMenu .header {\n    text-align: center;\n    font-size: 2.5rem;\n    color: var(--yt-brand-youtube-red);\n}\n\n#ytdl-sideMenu .setting-row {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    transition: all 0.2s ease-in-out;\n}\n\n#ytdl-sideMenu .setting-label {\n    font-size: 1.8rem;\n    color: var(--yt-brand-youtube-red);\n}\n\n#ytdl-sideMenu .setting-description {\n    font-size: 1.4rem;\n    color: var(--yt-spec-text-primary);\n}\n\n.ytdl-switch {\n    display: inline-block;\n}\n\n.ytdl-switch input {\n    display: none;\n}\n\n.ytdl-switch label {\n    display: block;\n    width: 50px;\n    height: 19.5px;\n    padding: 3px;\n    border-radius: 15px;\n    border: 2px solid var(--yt-brand-medium-red);\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.ytdl-switch label::after {\n    content: "";\n    display: inherit;\n    width: 20px;\n    height: 20px;\n    border-radius: 12px;\n    background: var(--yt-brand-medium-red);\n    transition: 0.3s;\n}\n\n.ytdl-switch input:checked ~ label {\n    border-color: var(--yt-spec-light-green);\n}\n\n.ytdl-switch input:checked ~ label::after {\n    translate: 30px 0;\n    background: var(--yt-spec-light-green);\n}\n\n.ytdl-switch input:disabled ~ label {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n#ytdl-sideMenu .advanced-options {\n    display: flex;\n    flex-direction: column;\n    gap: 0.7rem;\n    margin: 1rem 0;\n}\n\n#ytdl-sideMenu .advanced-options.opened {\n    animation: openNotif 0.3s linear forwards;\n}\n#ytdl-sideMenu .advanced-options.closed {\n    animation: closeNotif .3s linear forwards;\n}\n\n#ytdl-sideMenu input[type="url"] {\n    background: none;\n    padding: 0.7rem 1rem;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid var(--yt-spec-red-70);\n    color: var(--yt-spec-text-primary);\n    font-family: monospace;\n    transition: border-bottom-color 0.2s ease-in-out;\n}\n\n#ytdl-sideMenu input[type="url"]:focus {\n    border-bottom-color: var(--yt-brand-youtube-red);\n}\n\n.ytdl-notification {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    background-color: var(--yt-spec-base-background);\n    border: 2px solid var(--yt-spec-static-grey);\n    border-radius: 8px;\n    color: var(--yt-spec-text-primary);\n    z-index: 9999;\n    padding: 1.5rem 1.6rem;\n    font-family: "Roboto", "Arial", sans-serif;\n    font-size: 1.4rem;\n    width: fit-content;\n    height: fit-content;\n    max-width: 40vw;\n    max-height: 50vh;\n    word-wrap: break-word;\n    line-height: var(--yt-caption-line-height);\n}\n\n.ytdl-notification.opened {\n    animation: openNotif 0.3s linear forwards;\n}\n\n.ytdl-notification.closed {\n    animation: closeNotif 0.3s linear forwards;\n}\n\n.ytdl-notification h2 {\n    color: var(--yt-brand-youtube-red);\n}\n\n.ytdl-notification > div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.ytdl-notification > button {\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    border: 2px solid var(--yt-spec-static-grey);\n    border-radius: 8px;\n    background-color: var(--yt-brand-medium-red);\n    padding: 0.7rem 0.8rem;\n    color: #fff;\n    font-weight: 600;\n}\n\n.ytdl-notification button:hover {\n    background-color: var(--yt-spec-red-70);\n}\n\n#ytdl-download-button {\n    background: none;\n    border: none;\n    outline: none;\n    color: var(--yt-spec-text-primary);\n    cursor: pointer;\n    transition: color 0.2s ease-in-out;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#ytdl-download-button:hover {\n    color: var(--yt-brand-youtube-red);\n}\n\n#ytdl-download-button.YTM {\n    transform: scale(1.5);\n    margin: 0 1rem;\n}\n\n#ytdl-download-button > svg {\n    transform: translateX(3.35%);\n}\n\n#ytdl-dl-quality-select {\n    background-color: var(--yt-spec-base-background);\n    color: var(--yt-spec-text-primary);\n    padding: 0.7rem 1rem;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid var(--yt-spec-red-70);\n    border-left: 2px solid var(--yt-spec-red-70);\n    transition: all 0.2s ease-in-out;\n    font-family: "Roboto", "Arial", sans-serif;\n    font-size: 1.4rem;\n}\n\n#ytdl-dl-quality-select:focus {\n    border-bottom-color: var(--yt-brand-youtube-red);\n    border-left-color: var(--yt-brand-youtube-red);\n}\n\n#ytdl-sideMenu > div:has(> #ytdl-dl-quality-select:disabled) {\n    filter: grayscale(0.8);\n}\n\n#ytdl-dl-quality-select:disabled {\n    cursor: not-allowed;\n}\n\n@keyframes openMenu {\n    0% {\n        left: -100vw;\n    }\n\n    100% {\n        left: 0;\n    }\n}\n\n@keyframes closeMenu {\n    0% {\n        left: 0;\n    }\n\n    100% {\n        left: -100vw;\n    }\n}\n\n@keyframes openNotif {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes closeNotif {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n'),s("info","Custom styles added"),async function(...e){document.addEventListener("yt-player-updated",(n=>{for(let t=0;t<e.length;t++)e[t](n)})),s("info","Video player event hooked. Callbacks:\n\n",e.map((e=>e.name)))}((async function(e){r=!1;const n=e.detail?.getVideoData();d.video_duration=e.detail?.getDuration(),d.video_url=e.detail?.getVideoUrl(),d.video_author=n?.author,d.video_title=n?.title,d.video_id=n?.video_id,r=!0,s("info","Video data updated\n\n",d)})),async function(...e){["yt-navigate","yt-navigate-finish","yt-navigate-finish","yt-page-data-updated"].forEach((n=>{document.addEventListener(n,(n=>{for(let t=0;t<e.length;t++)e[t](n)}))})),s("info","Navigation events hooked. Callbacks:\n\n",e.map((e=>e.name)))}(S,(async function(){n&&s("info","Current service is: "+h())})),window.addEventListener("DOMContentLoaded",(()=>{b(),S(),y()}))})();