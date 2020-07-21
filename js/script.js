// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//Il computer deve generare 16 numeri casuali tra 1 e 100.
var bomba = [];
do {
var scelta = parseInt(prompt('Inserisci un numero per la scelta: 0, 1 oppure 2'));
} while (scelta != 0 && scelta != 1 && scelta != 2);
switch (scelta){
    case 0:
    var massimo = 100;
    break;
    case 1:
    var massimo = 80;
    break;
    case 2:
    var massimo = 50;
    break;
    default:
    var massimo = 100;
}
while (bomba.length < 16){
    var numeroComputer = numeroRandom(1,massimo);
    if(!ricerca(bomba,numeroComputer)){
        bomba.push(numeroComputer);
    }
}
console.log(bomba);

var possibilita = massimo - bomba.length;
var numeri = [];
var numeroUtente;
var trovato = false;
while (numeri.lenght < possibilita && trovato == false){
    numeroUtente = parseInt(prompt('Inserisci un numero'));
    while (numeroUtente <= 0 || numeroUtente > massimo){
        numeroUtente = parseInt(prompt('Attenzione, hai inserito un numero fuori dal range! Inserisci un numero da 1 a ' + massimo));
    }
    if(ricerca(bomba,numeroUtente)){
        trovato = true;
    } else if(!ricerca(numeri,numeroUtente)){
        numeri.push(numeroUtente);
    } else {
        alert('Attenzione non vale, il numero è già presente! Inseriscine un altro');
    }
}

if (trovato){
    alert('Hai perso! Con tentativi ' + numeri.length);
} else {
    alert ('Hai vinto');
}
console.log(numeri);



//FUNZIONI
function numeroRandom (min,max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function ricerca(arr,num){
    var i = 0;
    while (i < arr.length){
        if (num == arr[i]){
            return true;
        }
        i++;
    }
    return false;
}