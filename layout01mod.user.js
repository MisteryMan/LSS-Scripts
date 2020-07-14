// ==UserScript==
// @name         Modification for Meldkamerspel
// @namespace    https://none/
// @version      0.2
// @description  Kleine aanpassingen van LSS-Manager.
// @author       Alex Calsbeek
// @include      /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/.*$/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    document.body.style.overflow = "hidden";
    document.getElementById("missions_outer").style.overflow = "hidden";
    document.getElementById("buildings_outer").style.overflow = "hidden";
    document.getElementById("chat_outer").style.overflow = "hidden";
    document.getElementById("radio_outer").style.overflow = "hidden";

$("head").append("<style type='text/css'>#map_outer { width: 40%; top: 0px!important; height: calc(101vh - 90px)!important; }" +
                 "#missions-panel-body { height: 92%!important }" +
                 "#buildings_outer, #chat_outer, #missions_outer, #radio_outer { width: calc(60% - 110px); }" +
                 "div#mission_list { display: flex; flex-direction: column-reverse; }" +
                 "#map {     height: calc(100vh - 90px)!important; }" +
                 ".alliance_true.btn-group { height: 23px; }" +
                 "</style>");
    /*
                     "div#missions_outer { height: calc( 53vh - 70px ); }" +
                 "div#chat_outer { display: block; height: calc(46vh - 0px); }" +
    */

})();


