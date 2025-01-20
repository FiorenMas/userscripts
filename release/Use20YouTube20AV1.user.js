// ==UserScript==
// @name                Use YouTube AV1
// @description         Use AV1 for video playback on YouTube
// @namespace           http://tampermonkey.net/
// @version             2.4.3
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant               none
// @run-at              document-start
// @license             MIT
//
// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          firefox FireMonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey
//
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Use20YouTube20AV1.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Use20YouTube20AV1.meta.js
// ==/UserScript==
!function(){"use strict";const e=(async()=>{})().constructor;console.debug("force-youtube-av1","injected");const t=()=>{function e(e,t){return function(o){let r;return r=void 0!==o&&function(e){if("string"==typeof e&&e.startsWith("video/"))if(e.includes("av01")){if(/codecs[\x20-\x7F]+\bav01\b/.test(e))return!0}else if(e.includes("av1")&&/codecs[\x20-\x7F]+\bav1\b/.test(e))return!0}(o),r=void 0===r?e.apply(this,arguments):t?r?"probably":"":r,r}}const t=(HTMLVideoElement||0).prototype;t&&"function"==typeof t.canPlayType&&(t.canPlayType=e(t.canPlayType,!0));const o=window.MediaSource;o&&"function"==typeof o.isTypeSupported&&(o.isTypeSupported=e(o.isTypeSupported))};let o=null;try{o=navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:"video/mp4; codecs=av01.0.05M.08.0.110.05.01.06.0",height:1080,width:1920,framerate:30,bitrate:2826848},audio:{contentType:"audio/webm; codecs=opus",channels:"2.1",samplerate:44100,bitrate:255236}})}catch(e){o=null}const r=e=>{e&&e.supported&&e.smooth?function(){try{Object.defineProperty(localStorage.constructor.prototype,"yt-player-av1-pref",{get(){return this===localStorage?"8192":this.getItem("yt-player-av1-pref")},set(e){return this.setItem("yt-player-av1-pref",e),!0},enumerable:!0,configurable:!0})}catch(e){}"8192"===localStorage["yt-player-av1-pref"]?(console.debug("force-youtube-av1","AV1 enabled"),t()):console.warn("Use YouTube AV1 is not supported in your browser.")}():console.warn("force-youtube-av1","Your browser does not support AV1. You might conside to use the latest version of Google Chrome or Mozilla FireFox.")};(o||e.resolve(0)).catch(r).then(r)}();