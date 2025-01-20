// ==UserScript==
// @name         Auto download in drive.google.com
// @namespace    Auto download Google Drive
// @description  A userscript help automatic download files in Google Drive
// @version      1.0
// @icon         data:image/jpeg;base64,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
// @match        https://drive.google.com/file/d/*
// @match        https://drive.usercontent.google.com/download*
// @license      GPL-3.0
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20download20in20drivegooglecom.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20download20in20drivegooglecom.meta.js
// ==/UserScript==
