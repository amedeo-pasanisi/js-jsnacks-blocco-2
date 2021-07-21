// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var arrayMaggiore = ["elemento", "elemento", "elemento", "elemento", "elemento"]; // 5 elementi
console.log("numero elementi all'interno dell'array maggiore: " + arrayMaggiore.length);

var arrayMinore = ["elemento", "elemento", "elemento"]; // 3 elementi
console.log("numero elementi all'interno dell'array minore: " + arrayMinore.length);

console.log("elementi da aggiungere all'array minore: " + (arrayMaggiore.length - arrayMinore.length));

while (arrayMinore.length != arrayMaggiore.length) {
    arrayMinore.push ("elemento");
    console.log ("+1 elemento");
}

console.log("numero finale di elementi all'interno dell'array minore: " + arrayMinore.length);