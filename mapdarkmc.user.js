// ==UserScript==
// @name         map dark
// @namespace    missionchief.com
// @version      0.1
// @description  try to take over the world!
// @author       SanniHameln
// @match        https://www.missionchief.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.leaflet-tile {
    filter: invert(1) grayscale(.5);
    -webkit-filter: hue-rotate(180deg) invert(100%);
}
`);
