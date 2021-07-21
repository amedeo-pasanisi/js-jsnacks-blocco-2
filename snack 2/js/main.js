// Prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati
var listaNomi = ["pippo", "tizio", "caio", "ken"];

var listaCognomi = ["rossi", "neri", "bianchi", "verdi", "gialli"];

var indiceNomiRandom;
var indiceCognomiRandom;

for (var i = 0; i < listaNomi.length; i++) {
    indiceNomiRandom = Math.floor (Math.random() * listaNomi.length);
    indiceCognomiRandom = Math.floor (Math.random() * listaCognomi.length);
    
    console.log (listaNomi [indiceNomiRandom] + " " + listaCognomi [indiceCognomiRandom]);
}