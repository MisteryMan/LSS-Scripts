// ==UserScript==
// @name         Fay's Coin Sale Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  USES Usage ONLY
// @author       AARC
// @match        https://*.missionchief.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("coins_top").classList.remove("saleHighlight");
    document.getElementById("sale_countdown").remove();
})();