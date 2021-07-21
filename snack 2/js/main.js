// Prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati
var Nomi = ["pippo", "tizio", "caio", "ken"];

var Cognomi = ["rossi", "neri", "bianchi", "verdi", "gialli"];

var indiceNomiRandom;
var indiceCognomiRandom;

for (var i = 0; i < Nomi.length; i++) {
    indiceNomiRandom = Math.floor (Math.random() * Nomi.length);
    indiceCognomiRandom = Math.floor (Math.random() * Cognomi.length);
    
    console.log (Nomi [indiceNomiRandom] + " " + Cognomi [indiceCognomiRandom]);
}