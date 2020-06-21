// ==UserScript==
// @name        KrankenhausFilter_Eigene
// @namespace   leitstellenspiel
// @description entfernt Krankenhäuser aus der Liste
// @include     https://www.leitstellenspiel.de/vehicles/*
// @author	    Tatuetata112;Jenkins
// @version     2
// @grant       none
// ==/UserScript==
function killElement(element) {
    if (element) {
        var papa = element.parentNode;
        if (papa) papa.removeChild(element);
    }
}
var j = 10000; // so oft überprüfen eigene KHs
var l = 50; // nicht weiter als 'l' km
var n = 5; // nicht näher als 'n' km
var m = 5; // Anzahl maximaler Einträge
var x;
for (x = 1; x <= j; x++) {
    var fachabteilungOwn = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ') > td:nth-child(4) > span:nth-child(1) ';
    var entOwn = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ') > td:nth-child(2)';
    var entfernOwn = document.querySelector(entOwn).innerHTML;
    var entfernungOwn = entfernOwn.split(',');
    var voOwn = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ') > td:nth-child(5) > a:nth-child(1)';
    var vollOwn = document.querySelector(voOwn);
    var mission = 'div.row:nth-child(6) > div:nth-child(2) > a:nth-child(1)';
    if (document.querySelector(fachabteilungOwn).innerHTML == 'Nein') {
        var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
        killElement(document.querySelector(kill));
        x = x - 1;
    }
    else if (entfernungOwn[0] > l) {
        var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
        killElement(document.querySelector(kill));
        x = x - 1;
    }
    else if (vollOwn.className == 'btn btn-danger') {
        var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
        killElement(document.querySelector(kill));
        x = x - 1;
    }
    else if (document.querySelector(mission).innerHTML == 'Großfeuer im Krankenhaus' && entfernungOwn[0] < n) {
        var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
        killElement(document.querySelector(kill));
        x = x - 1;
    }
    else if (x > m) {
        var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
        killElement(document.querySelector(kill));
        x = x - 1;
    }
}
