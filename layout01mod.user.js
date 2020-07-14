// ==UserScript==
// @name         Modification for Meldkamerspel
// @namespace    https://none/
// @version      0.1
// @description  Kleine aanpassingen van LSS-Manager.
// @author       Alex Calsbeek
// @match        https://www.meldkamerspel.com/
// @match        https://meldkamerspel.com/
// @match        https://www.missionchief.com/
// @match        https://missionchief.com/
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


