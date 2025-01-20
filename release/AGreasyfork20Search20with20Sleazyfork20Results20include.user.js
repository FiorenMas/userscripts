// ==UserScript==
// @name         Greasyfork Search with Sleazyfork Results include
// @namespace    hoothin
// @version      1.6.6
// @description  Merge adult results of sleazyfork into greasyfork when the script is no longer anonymously available, add rating score and version for scripts then
// @author       hoothin
// @match        http*://greasyfork.org/*
// @match        http*://www.greasyfork.org/*
// @match        http*://sleazyfork.org/*
// @match        http*://www.sleazyfork.org/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.registerMenuCommand
// @grant        GM.notification
// @connect      greasyfork.org
// @connect      sleazyfork.org
// @contributionURL https://www.buymeacoffee.com/hoothin
// @contributionAmount 1
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/AGreasyfork20Search20with20Sleazyfork20Results20include.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/AGreasyfork20Search20with20Sleazyfork20Results20include.meta.js
// ==/UserScript==
!function(){"use strict";var e,t,n;"undefined"!=typeof GM_xmlhttpRequest?e=GM_xmlhttpRequest:"undefined"!=typeof GM&&void 0!==GM.xmlHttpRequest&&(e=GM.xmlHttpRequest),"undefined"!=typeof GM_registerMenuCommand?t=GM_registerMenuCommand:"undefined"!=typeof GM&&void 0!==GM.registerMenuCommand&&(t=GM.registerMenuCommand),"undefined"!=typeof GM_notification?n=GM_notification:"undefined"!=typeof GM&&void 0!==GM.notification&&(n=GM.notification),void 0===e&&(e=e=>{}),void 0===t&&(t=(e,t)=>{}),void 0===n&&(n=e=>{});var r={supportGM:"function"==typeof GM_getValue&&void 0!==GM_getValue("a","b"),supportGMPromise:"undefined"!=typeof GM&&"function"==typeof GM.getValue&&void 0!==GM.getValue("a","b"),mxAppStorage:function(){try{return window.external.mxGetRuntime().storage}catch(e){}}(),operaUJSStorage:function(){try{return window.opera.scriptStorage}catch(e){}}(),setItem:function(e,t){this.operaUJSStorage?this.operaUJSStorage.setItem(e,t):this.mxAppStorage?this.mxAppStorage.setConfig(e,t):this.supportGM?GM_setValue(e,t):this.supportGMPromise?GM.setValue(e,t):window.localStorage&&window.localStorage.setItem(e,t)},getItem:function(e,t){var n;if(this.operaUJSStorage)n=this.operaUJSStorage.getItem(e);else if(this.mxAppStorage)n=this.mxAppStorage.getConfig(e);else if(this.supportGM)n=GM_getValue(e);else{if(this.supportGMPromise)return void(n=GM.getValue(e).then((e=>{t(e)})));window.localStorage&&(n=window.localStorage.getItem(e))}t(n)}};if(document.querySelector("span.sign-in-link")){var i=/greasyfork\.org/.test(location.hostname)?"sleazyfork":"greasyfork";/scripts\/\d+/.test(location.href)?document.querySelector("#script-info")||"greasyfork"!=i&&-1==document.querySelector("div.width-constraint>section>p>a").href.indexOf("sign_in")||(location.href=location.href.replace(/\/\/([^\.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+i+".org")):/\/(scripts|users)(\/|.*(\?|&)q=|.*[\?&]set=)/.test(location.href)&&e({method:"GET",url:location.href.replace(/\/\/([^\.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+i+".org"),onload:function(e){var t=null;try{(t=document.implementation.createHTMLDocument("")).documentElement.innerHTML=e.responseText}catch(e){console.log("parse error")}if(t){var n=t.querySelector("ol.script-list");if(n){var r=document.querySelector("ol.script-list");if(!r){(r=document.createElement("ol")).setAttribute("class","script-list");var i=document.querySelector(".sidebarred-main-content"),o=i.querySelectorAll("p");for(let e=0;e<o.length;e++){let t=o[e];i.removeChild(t)}i.appendChild(r)}var a=n.querySelectorAll("li");if(a)for(let e=0;e<a.length;e++){let t=a[e];r.querySelector("li[data-script-id='"+t.dataset.scriptId+"']")||r.appendChild(t)}}}},onerror:function(e){console.log(e)}})}var o,a,s,l,c,d,p="vip.*(视频|視頻)|网课|刷课|(mooc|考试|学习).*(答题|挂机)|(网盘|網盤|云盘).*(vip|直链)|优惠劵|優惠券|AntiGame|split|Agar|\\.io(\\b|:|\\/|\\.|$)|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Blah Blah|Orc Clan Script|Astro\\s*Empires|^\\s*Attack|^\\s*Battle|BiteFight|Blood\\s*Wars|Bots|Bots4|Brawler|\\bBvS\\b|Business\\s*Tycoon|Castle\\s*Age|City\\s*Ville|Comunio|Conquer\\s*Club|CosmoPulse|Dark\\s*Orbit|Dead\\s*Frontier|\\bDOA\\b|DotD|Dossergame|Dragons\\s*of\\s*Atlantis|Dugout|\\bDS[a-z]+\\n|Empire\\s*Board|eRep(ublik)?|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\\s*Ville|Ghost\\s*Trapper|Gladiatus|Goalline|Gondal|Grepolis|Hobopolis|\\bhwm(\\b|_)|Ikariam|\\bIT2\\b|Jellyneo|Kapi\\s*Hospital|Kings\\s*Age|Kingdoms?\\s*of|knastv(ö|oe)gel|Knight\\s*Fight|\\b(Power)?KoC(Atta?ck)?\\b|\\bKOL\\b|Kongregate|Last\\s*Emperor|Legends?\\s*of|Light\\s*Rising|Lockerz|\\bLoU\\b|Mafia\\s*(Wars|Mofo)|Menelgame|Mob\\s*Wars|Mouse\\s*Hunt|Molehill\\s*Empire|NeoQuest|MyFreeFarm|Neopets|Nemexia|\\bOGame\\b|Ogar(io)?|Pardus|Pennergame|Pigskin\\s*Empire|PlayerScripts|Popmundo|Po?we?r\\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|slitheriogameplay|SpaceWars|\\bSW_[a-z]+\\n|\\bSnP\\b|The\\s*Crims|The\\s*West|Travian|Treasure\\s*Isl(and|e)|Tribal\\s*Wars|TW.?PRO|Vampire\\s*Wars|War\\s*of\\s*Ninja|West\\s*Wars|\\bWoD\\b|World\\s*of\\s*Dungeons|wtf\\s*battles|Wurzelimperium",u=document.querySelector("#script-list-sort"),m=document.createElement("span"),f=null!=document.querySelector("#user-script-list");if(m.innerHTML='<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2274"><path d="M981.314663 554.296783a681.276879 681.276879 0 0 1-46.986468 152.746388q-105.706098 230.734238-360.983096 242.19829a593.06288 593.06288 0 0 1-228.689008-33.853939v-1.022615l-31.808709 79.979258a55.759429 55.759429 0 0 1-20.506122 22.551352 40.043451 40.043451 0 0 1-21.04434 5.382184 51.076928 51.076928 0 0 1-19.483507-5.382184 95.210839 95.210839 0 0 1-13.347817-7.158305 52.314831 52.314831 0 0 1-5.382184-4.628679L71.671707 731.908862a57.427906 57.427906 0 0 1-7.158305-21.528737 46.932646 46.932646 0 0 1 1.022615-17.438277 35.952991 35.952991 0 0 1 7.158305-13.347816 74.435608 74.435608 0 0 1 10.279972-10.279972 60.495751 60.495751 0 0 1 11.248765-7.373593 50.431066 50.431066 0 0 1 8.18092-3.606063 6.189512 6.189512 0 0 0 3.067845-1.776121l281.003839-74.866183a91.497132 91.497132 0 0 1 35.899168-2.583448 122.337047 122.337047 0 0 1 22.174599 6.404799 21.528737 21.528737 0 0 1 12.325202 12.325202 76.157907 76.157907 0 0 1 4.628679 14.854829 47.63233 47.63233 0 0 1 0 14.370431 55.167388 55.167388 0 0 1-2.04523 10.764369 10.764368 10.764368 0 0 0-1.022615 3.606063l-32.831324 79.979258a677.50935 677.50935 0 0 0 164.264262 39.505232q77.395809 7.696523 131.809692-3.606063a358.507291 358.507291 0 0 0 101.023598-36.921784 381.27393 381.27393 0 0 0 73.951211-50.753997 352.64071 352.64071 0 0 0 48.708767-55.382676 410.391547 410.391547 0 0 0 26.910921-41.550462c3.767529-7.481236 6.673908-13.616926 8.719139-18.460892zM40.885614 449.667121a685.69027 685.69027 0 0 1 63.563595-176.427998q118.0313-212.273346 374.330913-207.160271a571.803252 571.803252 0 0 1 207.160271 39.989629l33.853939-78.956643A75.619688 75.619688 0 0 1 735.187378 9.189165a37.67529 37.67529 0 0 1 15.393047-8.234742 42.303968 42.303968 0 0 1 14.854829-0.538219 47.578509 47.578509 0 0 1 13.347817 3.606064 102.907362 102.907362 0 0 1 11.302586 6.13569 49.569917 49.569917 0 0 1 6.673909 4.628678l3.067845 3.067845 154.84544 276.913379a81.970666 81.970666 0 0 1 6.13569 22.712817 46.986468 46.986468 0 0 1-1.022615 17.438277 32.293105 32.293105 0 0 1-7.696523 13.347817 69.322533 69.322533 0 0 1-10.764369 9.741753 92.142994 92.142994 0 0 1-11.302587 6.673909l-8.18092 4.09046a7.104483 7.104483 0 0 1-3.067845 1.022615l-283.049068 67.546412a112.003254 112.003254 0 0 1-46.125319-1.022615c-11.571696-3.390776-19.160576-8.019454-22.551352-13.832214a41.173709 41.173709 0 0 1-5.382184-21.04434 97.256069 97.256069 0 0 1 1.291724-17.438277 24.381295 24.381295 0 0 1 3.067845-8.234742L600.632773 296.81309a663.730958 663.730958 0 0 0-164.102797-43.057474q-77.987849-9.203535-131.809692 0a348.227319 348.227319 0 0 0-101.292707 33.853938 368.571976 368.571976 0 0 0-75.350579 49.246986 383.31916 383.31916 0 0 0-50.269601 54.360061 408.507783 408.507783 0 0 0-28.740863 41.012244A113.025869 113.025869 0 0 0 40.885614 449.667121z m0 0" fill="#ffffff" p-id="2275"></path></svg>',f){var g=document.createElement("span");a=document.createElement("span"),s=document.createElement("span"),l=document.createElement("span"),c=document.createElement("span"),d=document.createElement("span"),a.className="good-rating-count",s.className="ok-rating-count",l.className="bad-rating-count",c.className="good-rating-count",d.className="good-rating-count",g.appendChild(a),g.appendChild(s),g.appendChild(l),document.querySelector("#script-list-sort ul>li:nth-child(1)").appendChild(d),document.querySelector("#script-list-sort ul>li:nth-child(2)").appendChild(c),document.querySelector("#script-list-sort ul>li:nth-child(3)").appendChild(g),g.style.display=c.style.display=d.style.display="none",a.innerHTML=s.innerHTML=l.innerHTML=c.innerHTML=d.innerHTML="0"}function h(t){var n=t.querySelector("h2>span.name-description-separator"),r=t.querySelector("h2>span.description");if(n){var i=document.createElement("strong");i.style.color="#e09015",i.innerHTML=t.dataset.scriptRatingScore,n.parentNode.insertBefore(i,n)}if(r){!function(e){var t=e.querySelector("dd.script-list-daily-installs>span");if(!t)return;var n=parseInt(e.querySelector("dd.script-list-ratings>span>.good-rating-count").innerHTML.replace(/[^\d]/g,"")),r=parseInt(e.querySelector("dd.script-list-ratings>span>.ok-rating-count").innerHTML.replace(/[^\d]/g,"")),i=parseInt(e.querySelector("dd.script-list-ratings>span>.bad-rating-count").innerHTML.replace(/[^\d]/g,""));if(i&&i>2&&i>n){let t=e.querySelector(".script-link");if(t){var o=document.createTextNode("⚠");t.style.textDecoration="line-through",t.style.color="#67000080",t.title="May be dangerous!",t.parentNode.insertBefore(o,t)}}if(!f)return;var p=parseInt(t.innerHTML.replace(/[^\d\.\-]/g,"")),u=parseInt(e.querySelector("dd.script-list-total-installs>span").innerHTML.replace(/[^\d]/g,""));a.innerHTML=parseInt(a.innerHTML)+n,s.innerHTML=parseInt(s.innerHTML)+r,l.innerHTML=parseInt(l.innerHTML)+i,c.innerHTML=parseInt(c.innerHTML)+u,d.innerHTML=parseInt(d.innerHTML)+p,g.style.display=c.style.display=d.style.display=""}(t);var o=t.querySelector("h2>a").href;let n=t.dataset.scriptVersion,i=(t.dataset.scriptLanguage,"js"==t.dataset.scriptLanguage?"":`<a class="install-link" data-install-format="css" data-ping-url href="${o.replace(/\.org\/.*\/scripts\//,".org/scripts/")}/code/script.user.css">Install as user style</a>`);r.innerHTML+=`<strong>Ver.${n}</strong>\n            <div id="install-area" class="list-install-area">\n            <a class="install-link" data-install-format="js" data-ping-url href="${o.replace(/\.org\/.*\/scripts\//,".org/scripts/")}/code/script.user.js">Install</a><a style="cursor:pointer;" class="install-help-link refresh-info" title="Check status" rel="nofollow"></a>\n            ${i}\n            </div><div id="installation-instructions-modal-js" aria-hidden="true"><p class="installation-instructions-modal-content-bypass"><a href="#"></a></p></div><div id="installation-instructions-modal-css" aria-hidden="true"><p class="installation-instructions-modal-content-bypass"><a href="#"></a></p></div>`;var p=r.querySelector("#install-area");let u=p.querySelector(".install-link"),h=p.querySelector(".install-help-link");t.onmouseenter=e=>{h.appendChild(m)},t.onmouseleave=e=>{m&&m.parentNode&&m.parentNode.removeChild(m)},h.onclick=()=>{e({method:"GET",url:o.replace(/(.*)-.*/,"$1.json"),onload:function(e){var t=null;try{t=JSON.parse(e.responseText)}catch(e){console.log("parse error")}if(t){let e=e=>{e.installed?(parseFloat(e.version)<parseFloat(n)?u.innerHTML="Update to version "+n:parseFloat(e.version)>parseFloat(n)?u.innerHTML="Downgrade to version "+n:u.innerHTML="Reinstall version "+n,e.enabled?u.style.backgroundColor="":u.style.backgroundColor="#6a6a6a"):u.innerHTML="Install version "+n};window.external.Tampermonkey?window.external.Tampermonkey.isInstalled(t.name,t.namespace,(t=>{e(t)})):window.external.Violentmonkey&&window.external.Violentmonkey.isInstalled(t.name,t.namespace).then((t=>{e(t)}))}}})},window.external.Tampermonkey||window.external.Violentmonkey||(h.style.display="none")}}r.getItem("GeasyforkBullshit",(e=>{if((o=e)||(o=p),/greasyfork\.org\/.*\/scripts\/23840[^\/]*$/.test(location.href)){var t,n=document.createElement("p");n.style.width="99%",n.innerHTML="<b>Filter RegExp</b><button id='ok' style='margin-left: 20px;'>Save</button><button id='reset' style='margin-left: 20px;'>Reset</button>";var i=n.querySelector("#ok"),a=n.querySelector("#reset"),s=document.createElement("pre"),l=document.createElement("script");l.src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js?skin=sons-of-obsidian",document.head.appendChild(l);var c=document.createElement("link");c.rel="stylesheet",c.href="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css",document.head.appendChild(c),s.contentEditable="true",s.className="prettyprint lang-js",s.style.whiteSpace="pre-wrap",s.style.overflowWrap="break-word",s.style.width="100%",s.innerHTML=o;var d=document.querySelector("#additional-info");n.appendChild(s),d.insertBefore(n,d.firstChild),l.onload=()=>{PR.prettyPrint()},i.onclick=()=>{t=s.innerText,r.setItem("GeasyforkBullshit",t),alert("Saved")},a.onclick=()=>{r.setItem("GeasyforkBullshit",p),alert("Reset over"),location.reload()}}var m;u&&r.getItem("disableFilter",(e=>{m=!e;var t=document.createElement("div"),n=new(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)((function(e){e.map((function(e){for(var t=0;t<e.addedNodes.length;t++){var n=e.addedNodes[t];if("script-list"==n.className){var r=n.querySelectorAll("li");for(let e=0;e<r.length;e++)h(r[e]);m&&f(n)}else"LI"==n.tagName&&(h(n),m&&f(n))}}))})),i={childList:!0};n.observe(document.querySelector("body>.width-constraint .sidebarred-main-content"),i);var a=document.querySelector("#browse-script-list,#user-script-list,ol.script-list");a&&n.observe(a,i);var s=document.querySelectorAll("ol.script-list>li");for(let e=0;e<s.length;e++)h(s[e]);var l=document.createElement("style");l.textContent="\n                li.filtered {\n                     display: none !important;\n                }\n                .list-option{\n                     position: relative;\n                }\n                #script-list-sort li>span{\n                     position: absolute;\n                     top: 4px;\n                     right: 2px;\n                     pointer-events: none;\n                     font-weight: 500;\n                }\n                #script-list-sort li>span:lang(ar), #script-list-sort li>span:lang(he), #script-list-sort li>span:lang(ug){\n                     right: unset;\n                     left: 2px;\n                }\n                #script-list-sort li>span>span{\n                     margin: 0 0 0 2px;\n                }\n                .script-list>li .list-install-area{\n                     display: none;\n                     float: right;\n                     position: relative;\n                }\n                .script-list>li:hover .list-install-area {\n                     display: block;\n                }\n                @-webkit-keyframes spin {\n                 from {\n                     -webkit-transform: rotate(0deg);\n                 }\n                 to {\n                     -webkit-transform: rotate(360deg);\n                 }\n                }\n                @keyframes spin {\n                 from {\n                     transform: rotate(0deg);\n                 }\n                 to {\n                     transform: rotate(360deg);\n                 }\n                }\n                .refresh-info:hover>span {\n                     display: block;\n                     -webkit-animation: spin 1s linear 1s 5 alternate;\n                     animation: spin 1s linear infinite;\n                }",l.type="text/css",document.querySelector("head").appendChild(l);var c=new RegExp(o,"i"),d="Enable Filter",p=0,f=function(e){[].forEach.call(e.querySelectorAll("article>h2"),(function(e){c.test(e.innerText.replace("\n"," "))&&(e.parentNode.parentNode.classList.add("filtered"),p++)}))};m&&f(document),t.innerHTML='<input type="checkBox" name="switchFilter" id="switchFilter"/><label for="switchFilter">'+d+(p?" ("+p+" filtered)":"")+"</label>";var g=t.querySelector("#switchFilter"),y=g.nextSibling;g.checked=m,g.onclick=function(){m?([].forEach.call(document.querySelectorAll("li.filtered"),(function(e){e.classList.remove("filtered")})),y.innerHTML=d):(p=0,f(document),y.innerHTML=d+" ("+p+" filtered)"),r.setItem("disableFilter",m),m=!m},u.insertBefore(t,u.firstChild)}))})),t("Configure the Filter",(()=>{location.href="https://greasyfork.org/scripts/23840#additional-info"}))}();