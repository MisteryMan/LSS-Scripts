// ==UserScript==
// @name         map donker
// @namespace    meldkamerspel.com
// @version      0.1
// @description  try to take over the world!
// @author       SanniHameln
// @match        https://www.meldkamerspel.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.leaflet-tile {
    filter:invert(1) grayscale(.5);
    -webkit-filter:hue-rotate(180deg) invert(100%);
}
`);
