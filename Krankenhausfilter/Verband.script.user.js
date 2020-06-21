// ==UserScript==
// @name        KrankenhausFilter_Verband
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
var k = 10000; // so oft überprüfen VerbandKHs
var l = 250; // nicht weiter als 'l' km 
var m = 50; // maximale Abgabe
var n = 5; // nicht näher als 'n' km
var i;
for (i = 1; i <= k; i++) {
    var fachabteilung = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ') > td:nth-child(5) > span:nth-child(1) ';
    var ent = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ') > td:nth-child(2)';
    var entfern = document.querySelector(ent).innerHTML;
    var entfernung = entfern.split(',');
    var ab = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ') > td:nth-child(4)';
    var abga = document.querySelector(ab).innerHTML;
    var abgabe = abga.split(' ');
    var voAll = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ') > td:nth-child(6) > a:nth-child(1)';
    var vollAll = document.querySelector(voAll);
    var mission = 'div.row:nth-child(6) > div:nth-child(2) > a:nth-child(1)';
    if (document.querySelector(fachabteilung).innerHTML == 'Nein') {
        var kill = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ')';
        killElement(document.querySelector(kill));
        i = i - 1;
    }
    else if (entfernung[0] > l) {
        var kill = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ')';
        killElement(document.querySelector(kill));
        i = i - 1;
    }
    else if (abgabe[2] > m) {
        var kill = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ')';
        killElement(document.querySelector(kill));
        i = i - 1;
    }
    else if (vollAll.className == 'btn btn-danger') {
        var kill = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ')';
        killElement(document.querySelector(kill));
        i = i - 1;
    }
    else if (document.querySelector(mission).innerHTML == 'Großfeuer im Krankenhaus' && entfernung[0] < n) {
        var kill = 'table.table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(' + i + ')';
        killElement(document.querySelector(kill));
        i = i - 1;
    }
}
