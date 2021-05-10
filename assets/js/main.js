// Snack 1:
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// var zucchine = [
//     {varieta: "verde", peso: 3, lunghezza: 10},
//     {varieta: "bianca", peso: 5, lunghezza: 7},
//     {varieta: "gialla", peso: 6, lunghezza: 11},
//     {varieta: "bianca", peso: 7, lunghezza: 8},
//     {varieta: "gialla", peso: 2, lunghezza: 2},
//     {varieta: "verde", peso: 4, lunghezza: 3},
//     {varieta: "verde", peso: 3, lunghezza: 9},
//     {varieta: "gialla", peso: 5, lunghezza: 5},
//     {varieta: "bianca", peso: 6, lunghezza: 10},
//     {varieta: "verde", peso: 2, lunghezza: 6},
// ];

// var pesoZucchine = 0;

// for(var i = 0; i < zucchine.length; i++) {
//     console.log(zucchine[i].peso);
//     pesoZucchine += zucchine[i].peso;
//     console.log(pesoZucchine);
// }

// Snack 2:
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// var zucchine = [
//     {varieta: "verde", peso: 3, lunghezza: 20},
//     {varieta: "bianca", peso: 5, lunghezza: 7},
//     {varieta: "gialla", peso: 6, lunghezza: 21},
//     {varieta: "bianca", peso: 7, lunghezza: 8},
//     {varieta: "gialla", peso: 2, lunghezza: 2},
//     {varieta: "verde", peso: 4, lunghezza: 3},
//     {varieta: "verde", peso: 3, lunghezza: 19},
//     {varieta: "gialla", peso: 5, lunghezza: 5},
//     {varieta: "bianca", peso: 6, lunghezza: 10},
//     {varieta: "verde", peso: 2, lunghezza: 16},
// ];

// var zucchinePiccole = [];
// var zucchineGrandi = [];

// for(var i = 0; i < zucchine.length; i++) {
//     var lunghezzaZucchine =  zucchine[i].lunghezza;
//     if (lunghezzaZucchine > 15) {
//         zucchineGrandi.push(zucchine[i])
//     } else {
//         zucchinePiccole.push(zucchine[i])
//     }
// }

// console.log(zucchinePiccole);
// console.log(zucchineGrandi);

// var pesoZucchinePiccole = 0;

// for(var i = 0; i < zucchinePiccole.length; i++) {
//     console.log(zucchinePiccole[i].peso);
//     pesoZucchinePiccole += zucchinePiccole[i].peso;
//     console.log(pesoZucchinePiccole);
// }

// var pesoZucchineGrandi = 0;

// for(var i = 0; i < zucchineGrandi.length; i++) {
//     console.log(zucchineGrandi[i].peso);
//     pesoZucchineGrandi += zucchineGrandi[i].peso;
//     console.log(pesoZucchineGrandi);
// }

// Snack 3:
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// function stringaGirata (stringa) {
//     return stringa.split("").reverse().join("");
// }

// var domanda = prompt("Inserisci una parola");
// console.log(stringaGirata(domanda));

// Snack 4:
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// var frutta = ["banana", "frangola", "kiwi", "arancia"];
// var colori = ["gialla", "rossa", "verde", "arancione"];
// var fruttaColori = [];

// for (var i = 0; i < frutta.length && i < colori.length; i++) {
//     fruttaColori.push(frutta[i]);
//     fruttaColori.push(colori[i]);
// }

// console.log(fruttaColori);

// Snack 5:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

// function arrayFinale (a,b,array){
    
//     var nuovaArray = [];
    
//     if (a < b && b <= array.length) {
//         for (var i = a; i <= b; i++ ) {
//             nuovaArray.push(array[i]);
//         }
//     }

//     return nuovaArray;
// }

// console.log(arrayFinale(3,7,["Milano", "Roma", "Napoli", "Venezia", "Torino", "Firenze", "Bologna", "Palermo", "Genova", "Bari"]));