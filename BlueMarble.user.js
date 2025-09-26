// ==UserScript==
// @name         Blau Murmel
// @namespace    https://github.com/asango100/Wplace-BlueMarble-MinorMods
// @version      0.1.0
// @description  A userscript to automate and/or enhance the user experience on Wplace.live. Make sure to comply with the site's Terms of Service, and rules! This script is not affiliated with Wplace.live in any way, use at your own risk. This script is not affiliated with TamperMonkey. The author of this userscript is not responsible for any damages, issues, loss of data, or punishment that may occur as a result of using this script. This script is provided "as is" under the MPL-2.0 license. The "Blue Marble" icon is licensed under CC0 1.0 Universal (CC0 1.0) Public Domain Dedication. The image is owned by NASA. Forked and modified for personal use
// @author       SwingTheVine, Asango100
// @license      MPL-2.0
// @supportURL   https://discord.gg/tpeBPy46hf
// @homepageURL  https://bluemarble.lol/
// @icon         https://raw.githubusercontent.com/asango100/Wplace-BlueMarble-MinorMods/refs/heads/main/dist/assets/Favicon.png
// @match        https://wplace.live/*
// @run-at       document-end
// @noframes
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @connect      telemetry.thebluecorner.net
// @resource     overlayCSS https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/overlay.css
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/utils.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/apiManager.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/Overlay.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/Template.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/templateManager.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/observers.js
// @require      https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/main.js
// @updateURL    https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/BlueMarble.meta.js
// @downloadURL  https://cdn.jsdelivr.net/gh/asango100/Wplace-BlueMarble-MinorMods@v0.1.0/BlueMarble.user.js
// ==/UserScript==

// Wplace  --> https://wplace.live
// License --> https://www.mozilla.org/en-US/MPL/2.0/

(function () {
  'use strict';
  try {
    const css = (typeof GM_getResourceText === 'function') ? GM_getResourceText('overlayCSS') : '';
    if (css) GM_addStyle(css);
  } catch (e) {
    console.warn('CSS inject failed:', e);
  }
})();
