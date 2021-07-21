// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var somma = 0;

for (var i = 1; i < numeri.length; i += 2) {
    somma += numeri [i];
    console.log ("la somma dei numeri in posizione dispari è: " + somma);
}