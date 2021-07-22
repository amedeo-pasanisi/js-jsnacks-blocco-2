// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var array1 = ["elemento", "elemento", "elemento", "elemento", "elemento"]; // 5 elementi
console.log("numero elementi all'interno dell'array 1: " + array1.length);

var array2 = ["elemento", "elemento", "elemento"]; // 3 elementi
console.log("numero elementi all'interno dell'array 2: " + array2.length);

console.log("elementi da aggiungere all'array 2: " + (array1.length - array2.length));

if (array1.length > array2.length) {
    var minore = array2
} else if (array1.length < array2.length) {
    minore = array1
}

while (array2.length != array1.length) {
    minore.push ("elemento");
    console.log ("+1 elemento");
}

console.log("numero finale di elementi all'interno dell'array minore: " + arrayMinore.length);