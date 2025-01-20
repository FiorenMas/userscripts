// ==UserScript==
// @name         TwitchAdSolutions (video-swap-new)
// @namespace    https://github.com/pixeltris/TwitchAdSolutions
// @version      1.33
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/videoswapnew.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/videoswapnew.user.js
// @description  Multiple solutions for blocking Twitch ads (video-swap-new)
// @author       pixeltris
// @match        *://*.twitch.tv/*
// @run-at       document-start
// @inject-into  page
// @grant        none
// ==/UserScript==
!function(){"use strict";if(window.twitchAdSolutionsVersion&&window.twitchAdSolutionsVersion>=1)return console.log("skipping video-swap-new as there's another script active. ourVersion:1 activeVersion:"+window.twitchAdSolutionsVersion),void(window.twitchAdSolutionsVersion=1);function e(e){e.OPT_MODE_STRIP_AD_SEGMENTS=!0,e.OPT_MODE_NOTIFY_ADS_WATCHED=!0,e.OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS=!1,e.OPT_BACKUP_PLAYER_TYPE="autoplay",e.OPT_BACKUP_PLATFORM="ios",e.OPT_REGULAR_PLAYER_TYPE="site",e.OPT_ACCESS_TOKEN_PLAYER_TYPE=null,e.OPT_SHOW_AD_BANNER=!0,e.AD_SIGNIFIER="stitched-ad",e.LIVE_SIGNIFIER=",live",e.CLIENT_ID="kimne78kx3ncx6brgo4mv6wki5h1ko",e.StreamInfos=[],e.StreamInfosByUrl=[],e.CurrentChannelNameFromM3U8=null,e.gql_device_id=null,e.ClientIntegrityHeader=null,e.AuthorizationHeader=null}window.twitchAdSolutionsVersion=1;var t,n,a,r=[],o=["twitch","isVariantA"],i=[],s=["isVariantA"];function l(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.overrideMimeType("text/javascript"),t.send(),t.responseText}function d(e,t,n){console.log("Found ads, switch to backup"),e.UseBackupStream=!0,e.IsMidroll=t.includes('"MIDROLL"')||t.includes('"midroll"'),n&&postMessage({key:"UboReloadPlayer"}),postMessage({key:"UboShowAdBanner",isMidroll:e.IsMidroll})}async function c(e,t,n){var a=StreamInfosByUrl[e];if(null==a)return console.log("Unknown stream url "+e),t;if(!OPT_MODE_STRIP_AD_SEGMENTS)return t;var r=t.includes(AD_SIGNIFIER);if(a.UseBackupStream){if(null==a.Encodings)return console.log("Found backup stream but not main stream?"),a.UseBackupStream=!1,postMessage({key:"UboReloadPlayer"}),"";var o=a.Encodings.match(/^https:.*\.m3u8$/m)[0];if(200==(u=await n(o)).status){var i=await u.text();if(null!=i)if(i.includes(AD_SIGNIFIER)){if(!i.includes('"MIDROLL"')&&!i.includes('"midroll"'))for(var s=i.replace("\r","").split("\n"),l=0;l<s.length;l++){var c=s[l];if(c.startsWith("#EXTINF")&&s.length>l+1&&!c.includes(LIVE_SIGNIFIER)&&!a.RequestedAds.has(s[l+1])){a.RequestedAds.add(s[l+1]),fetch(s[l+1]).then((e=>{e.blob()}));break}}}else console.log("No more ads on main stream. Triggering player reload to go back to main stream..."),a.UseBackupStream=!1,postMessage({key:"UboHideAdBanner"}),postMessage({key:"UboReloadPlayer"})}}else r?d(a,t,!0):postMessage({key:"UboHideAdBanner"});if(r&&null!=a.BackupEncodings){var u;o=a.BackupEncodings.match(/^https:.*\.m3u8.*$/m)[0];200==(u=await n(o)).status&&(t=await u.text())}return t}function u(){console.log("hookWorkerFetch (video-swap-new)");var e=fetch;fetch=async function(t,n){if("string"==typeof t){if((t=t.trimEnd()).endsWith("m3u8"))return new Promise((function(a,r){e(t,n).then((function(n){!async function(n){var r=await c(t,await n.text(),e);a(new Response(r,{status:n.status,statusText:n.statusText,headers:n.headers}))}(n)})).catch((function(e){console.log("fetch hook err "+e),r(e)}))}));if(t.includes("/api/channel/hls/")&&!t.includes("picture-by-picture")){var a=new URL(t).pathname.match(/([^\/]+)(?=\.\w+$)/)[0];if(CurrentChannelNameFromM3U8!=a&&postMessage({key:"UboChannelNameM3U8Changed",value:a}),CurrentChannelNameFromM3U8=a,OPT_MODE_STRIP_AD_SEGMENTS)return new Promise((async function(r,o){var i=StreamInfos[a];if(null!=i&&null!=i.Encodings&&200!==(await e(i.Encodings.match(/^https:.*\.m3u8$/m)[0])).status&&(i=null),null==i||null==i.Encodings||null==i.BackupEncodings){StreamInfos[a]=i={RequestedAds:new Set,Encodings:null,BackupEncodings:null,IsMidroll:!1,UseBackupStream:!1,ChannelName:a};for(var s=0;s<2;s++){var l=t;if(1==s){var c=await g(a,OPT_BACKUP_PLAYER_TYPE,OPT_BACKUP_PLATFORM,e);if(null==c||200!==c.status)return void r(c);var u=await c.json(),p=new URL("https://usher.ttvnw.net/api/channel/hls/"+a+".m3u8"+new URL(t).search);p.searchParams.set("sig",u.data.streamPlaybackAccessToken.signature),p.searchParams.set("token",u.data.streamPlaybackAccessToken.value),l=p.href}var y=await e(l,n);if(null==y||200!==y.status)return void r(y);var m=await y.text();if(0==s){i.Encodings=m;var v=m.match(/^https:.*\.m3u8$/m)[0],h=await e(v);if(200!=h.status)return void r(h);var T=await h.text();T.includes(AD_SIGNIFIER)&&d(i,T,!1)}else{for(var _=m.replace("\r","").split("\n"),I=null,S=0;S<_.length;S++){if(_[S].startsWith("#EXT-X-STREAM-INF"))if(f(_[S]).RESOLUTION&&_[S+1].endsWith(".m3u8")){I=_[S+1];break}}if(null!=I&&null!=i.Encodings){var E=i.Encodings.replace("\r","").split("\n");for(S=0;S<E.length-1;S++){if(E[S].startsWith("#EXT-X-STREAM-INF"))f(E[S]).RESOLUTION&&(I+=" ",E[S+1]=I)}m=E.join("\r\n")}i.BackupEncodings=m}var A=m.replace("\r","").split("\n");for(S=0;S<A.length;S++)!A[S].startsWith("#")&&A[S].includes(".m3u8")&&(StreamInfosByUrl[A[S].trimEnd()]=i)}}i.UseBackupStream?r(new Response(i.BackupEncodings)):r(new Response(i.Encodings))}))}}return e.apply(this,arguments)}}function p(e,t,n){return[{operationName:"ClientSideAdEventHandling_RecordAdEvent",variables:{input:{eventName:e,eventPayload:JSON.stringify(n),radToken:t}},extensions:{persistedQuery:{version:1,sha256Hash:"7e6c69e6eb59f8ccb97ab73686f3d8b7d85a72a0298745ccd8bfc68e4054ca5b"}}}]}function g(e,t,n,a){n||(n="web");return y({operationName:"PlaybackAccessToken_Template",query:'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "'+n+'", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "'+n+'", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}',variables:{isLive:!0,login:e,isVod:!1,vodID:"",playerType:t}},a)}function y(e,t){return ClientIntegrityHeader,(t||fetch)("https://gql.twitch.tv/gql",{method:"POST",body:JSON.stringify(e),headers:{"Client-Id":CLIENT_ID,"Client-Integrity":ClientIntegrityHeader,"X-Device-Id":gql_device_id,Authorization:AuthorizationHeader}})}function f(e){return Object.fromEntries(e.split(/(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))/).filter(Boolean).map((e=>{const t=e.indexOf("="),n=e.substring(0,t),a=e.substring(t+1),r=Number(a);return[n,Number.isNaN(r)?a.startsWith('"')?JSON.parse(a):a:r]})))}async function m(e){try{if(!e||!e.includes(AD_SIGNIFIER))return 1;var t=e.match(/#EXT-X-DATERANGE:(ID="stitched-ad-[^\n]+)\n/);if(t.length>1){const e=f(t[1]);var n=parseInt(e["X-TV-TWITCH-AD-POD-LENGTH"]?e["X-TV-TWITCH-AD-POD-LENGTH"]:"1"),a=(parseInt(e["X-TV-TWITCH-AD-POD-POSITION"]?e["X-TV-TWITCH-AD-POD-POSITION"]:"0"),e["X-TV-TWITCH-AD-RADS-TOKEN"]),r=e["X-TV-TWITCH-AD-LINE-ITEM-ID"],o=e["X-TV-TWITCH-AD-ORDER-ID"],i=e["X-TV-TWITCH-AD-CREATIVE-ID"],s=e["X-TV-TWITCH-AD-ADVERTISER-ID"];const l={stitched:!0,roll_type:e["X-TV-TWITCH-AD-ROLL-TYPE"].toLowerCase(),player_mute:!1,player_volume:.5,visible:!0};for(let e=0;e<n;e++)if(OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS)await y(p("video_ad_pod_complete",a,l));else{const t={...l,ad_id:s,ad_position:e,duration:30,creative_id:i,total_ads:n,order_id:o,line_item_id:r};await y(p("video_ad_impression",a,t));for(let e=0;e<4;e++)await y(p("video_ad_quartile_complete",a,{...t,quartile:e+1}));await y(p("video_ad_pod_complete",a,l))}}return 0}catch(e){return console.log(e),0}}function v(e,t){r.forEach((n=>{n.postMessage({key:e,value:t})}))}function h(e,t){function n(e,t){if(e.stateNode&&t(e.stateNode))return e.stateNode;let a=e.child;for(;a;){const e=n(a,t);if(e)return e;a=a.sibling}return null}var a=function(){var e=null,t=document.querySelector("#root");if(t&&t._reactRootContainer&&t._reactRootContainer._internalRoot&&t._reactRootContainer._internalRoot.current&&(e=t._reactRootContainer._internalRoot.current),null==e){var n=Object.keys(t).find((e=>e.startsWith("__reactContainer")));null!=n&&(e=t[n])}return e}();if(!a)return void console.log("Could not find react root");var r=n(a,(e=>e.setPlayerActive&&e.props&&e.props.mediaPlayerInstance));r=r&&r.props&&r.props.mediaPlayerInstance?r.props.mediaPlayerInstance:null;var o=n(a,(e=>e.setSrc&&e.setInitialPlaybackSettings));if(!r)return void console.log("Could not find player");if(!o)return void console.log("Could not find player state");if(r.paused||r.core?.paused)return;if(e){console.log("Force seek to reset player (hopefully fixing any audio desync) pos:"+r.getPosition()+" range:"+JSON.stringify(r.getBuffered()));var i=r.getPosition();return r.seekTo(0),void r.seekTo(i)}if(t)return r.pause(),void r.play();const s="video-quality",l="video-muted",d="volume";var c=localStorage.getItem(s),u=localStorage.getItem(l),p=localStorage.getItem(d);r?.core?.state&&(localStorage.setItem(l,JSON.stringify({default:r.core.state.muted})),localStorage.setItem(d,r.core.state.volume)),r?.core?.state?.quality?.group&&localStorage.setItem(s,JSON.stringify({default:r.core.state.quality.group})),o.setSrc({isNewMediaPlayerInstance:!0,refreshAccessToken:!0}),setTimeout((()=>{localStorage.setItem(s,c),localStorage.setItem(l,u),localStorage.setItem(d,p)}),3e3)}function T(){try{Object.defineProperty(document,"visibilityState",{get:()=>"visible"})}catch{}try{Object.defineProperty(document,"hidden",{get:()=>!1})}catch{}var e=e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()};document.addEventListener("visibilitychange",e,!0),document.addEventListener("webkitvisibilitychange",e,!0),document.addEventListener("mozvisibilitychange",e,!0),document.addEventListener("hasFocus",e,!0);try{/Firefox/.test(navigator.userAgent)?Object.defineProperty(document,"mozHidden",{get:()=>!1}):Object.defineProperty(document,"webkitHidden",{get:()=>!1})}catch{}for(var t=["video-quality","video-muted","volume","lowLatencyModeEnabled","persistenceEnabled"],n=new Map,a=0;a<t.length;a++)n.set(t[a],localStorage.getItem(t[a]));var r=localStorage.setItem;localStorage.setItem=function(e,t){n.has(e)&&n.set(e,t),r.apply(this,arguments)};var o=localStorage.getItem;localStorage.getItem=function(e){return n.has(e)?n.get(e):o.apply(this,arguments)}}window.reloadTwitchPlayer=h,e(window),t=function(e){for(var t=[],n=e;n;){var a=n.toString();s.some((e=>a.includes(e)))&&t.push(n),n=Object.getPrototypeOf(n)}return t}(window.Worker),n=function(e,t){for(var n=e,a=0;a<t.length;a++)Object.setPrototypeOf(t[a],n),n=t[a];return n}(class extends(function(e){for(var t=null,n=null,a=e;a;){var r=a.toString();o.some((e=>r.includes(e)))&&!i.some((e=>r.includes(e)))?null!==n&&Object.setPrototypeOf(n,Object.getPrototypeOf(a)):(null===t&&(t=a),n=a),a=Object.getPrototypeOf(a)}return t}(window.Worker)){constructor(t,n){var a=!1;try{a=new URL(t).origin.endsWith(".twitch.tv")}catch{}if(a){var o=`\n                    ${c.toString()}\n                    ${u.toString()}\n                    ${e.toString()}\n                    ${g.toString()}\n                    ${y.toString()}\n                    ${p.toString()}\n                    ${m.toString()}\n                    ${f.toString()}\n                    ${d.toString()}\n                    ${l.toString()}\n                    var workerString = getWasmWorkerJs('${t.replaceAll("'","%27")}');\n                    declareOptions(self);\n                    self.addEventListener('message', function(e) {\n                        if (e.data.key == 'UboUpdateDeviceId') {\n                            gql_device_id = e.data.value;\n                        } else if (e.data.key == 'UpdateClientIntegrityHeader') {\n                            ClientIntegrityHeader = e.data.value;\n                        } else if (e.data.key == 'UpdateAuthorizationHeader') {\n                            AuthorizationHeader = e.data.value;\n                        }\n                    });\n                    hookWorkerFetch();\n                    eval(workerString);\n                `;super(URL.createObjectURL(new Blob([o])),n),r.push(this),this.addEventListener("message",(e=>{if("UboShowAdBanner"==e.data.key)null!=(t=i())&&(t.P.textContent="Blocking"+(e.data.isMidroll?" midroll":"")+" ads",OPT_SHOW_AD_BANNER&&(t.style.display="block"));else if("UboHideAdBanner"==e.data.key){var t;null!=(t=i())&&(t.style.display="none")}else"UboChannelNameM3U8Changed"==e.data.key||("UboReloadPlayer"==e.data.key?h():"UboPauseResumePlayer"==e.data.key?h(!1,!0):"UboSeekPlayer"==e.data.key&&h(!0))}))}else super(t,n);function i(){var e=document.querySelector(".video-player"),t=null;return null!=e&&null==(t=e.querySelector(".ubo-overlay"))&&((t=document.createElement("div")).className="ubo-overlay",t.innerHTML='<div class="player-ad-notice" style="color: white; background-color: rgba(0, 0, 0, 0.8); position: absolute; top: 0px; left: 0px; padding: 5px;"><p></p></div>',t.style.display="none",t.P=t.querySelector("p"),e.appendChild(t)),t}}},t),Object.defineProperty(window,"Worker",{get:function(){return n},set:function(e){var t;t=e.toString(),!o.some((e=>t.includes(e)))||i.some((e=>t.includes(e)))||s.some((e=>t.includes(e)))?n=e:console.log("Attempt to set twitch worker denied")}}),a=window.fetch,window.fetch=function(e,t,...n){if("string"==typeof e&&e.includes("gql")){var r=t.headers["X-Device-Id"];if("string"!=typeof r&&(r=t.headers["Device-ID"]),"string"==typeof r&&(gql_device_id=r),gql_device_id&&v("UboUpdateDeviceId",gql_device_id),"string"==typeof t.body&&t.body.includes("PlaybackAccessToken")){if(OPT_ACCESS_TOKEN_PLAYER_TYPE){const e=JSON.parse(t.body);if(Array.isArray(e))for(let t=0;t<e.length;t++)e[t].variables.playerType=OPT_ACCESS_TOKEN_PLAYER_TYPE;else e.variables.playerType=OPT_ACCESS_TOKEN_PLAYER_TYPE;t.body=JSON.stringify(e)}"string"==typeof t.headers["Client-Integrity"]&&(ClientIntegrityHeader=t.headers["Client-Integrity"],ClientIntegrityHeader&&v("UpdateClientIntegrityHeader",t.headers["Client-Integrity"])),"string"==typeof t.headers.Authorization&&(AuthorizationHeader=t.headers.Authorization,AuthorizationHeader&&v("UpdateAuthorizationHeader",t.headers.Authorization))}}return a.apply(this,arguments)},"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?T():window.addEventListener("DOMContentLoaded",(function(){T()}))}();