// ==UserScript==
// @name         map dunkel lss grey
// @namespace    https://www.leitstellenspiel.de/
// @version      0.1
// @description  Macht die Map Dunkel bei LSS
// @author       SanniHameln
// @match        https://www.leitstellenspiel.de/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.leaflet-tile {
    filter: invert(1) grayscale(.7);
    -webkit-filter: invert(1) grayscale(.7);
`);
