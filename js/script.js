// ////////////////////////////// JSnack 1

// // L’utente inserisce due numeri in successione, con due prompt.
// // Il software stampa il maggiore.
//
// // Creo la variabile per l'elemento html
// var message = document.getElementById('message');
//
// // Chiedo e controllo i numeri all'utente
// var numeroUnoString = prompt('Inserisci il primo numero');
// console.log(numeroUnoString);
// while (numeroUnoString.length != 4 && isNaN(numeroUnoString)) {
//   numeroUnoString = prompt('Inserisci il primo numero');
// }
// var numeroDueString = prompt('Inserisci il secondo numero');
// while (numeroDueString.length != 4 && isNaN(numeroDueString)) {
//   numeroDueString = prompt('Inserisci il secondo numero');
// }
//
// // Converto le stringhe in numeri
// var numeroUno = parseInt(numeroUnoString);
// var numeroDue = parseInt(numeroDueString);
//
// // Confronto i numeri per trovare il maggiore
// var maggiore;
// if (numeroUno > numeroDue) {
//   maggiore = numeroUno;
//   message.innerHTML = 'Il numero maggiore è ' + maggiore;
// } else if (numeroUno < numeroDue) {
//   maggiore = numeroDue;
//   message.innerHTML = 'Il numero maggiore è ' + maggiore;
// } else {
//   maggiore = message.innerHTML = 'I numeri sono uguali';
// }


// ////////////////////////////// JSnack 2

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// // Creo la variabile per l'elemento html
// var message = document.getElementById('message');
//
// // Creo i due prompt e controllo i valori
// var parolaUno = prompt('Inserisci la prima parola');
//
// while (parolaUno.length == 0) {
//   parolaUno = prompt('Errore.Inserisci la prima parola');
// }
//
// var parolaDue = prompt('Inserisci la seconda parola');
//
// while (parolaDue.length == 0) {
//   parolaDue = prompt('Errore.Inserisci la seconda parola');
// }
//
// // Controllo la lunghezza delle parole e stampo il risultato
// if (parolaUno.length > parolaDue.length) {
//   message.innerHTML = parolaDue + ' , ' + parolaUno;
// } else {
//   message.innerHTML = parolaUno + ' , ' + parolaDue;
// }


// ////////////////////////////// JSnack 3

 // Il software deve chiedere per 5 volte all’utente di inserire un numero.
 // Il programma stampa la somma di tutti i numeri inseriti.
 // Esegui questo programma in due versioni, con il for e con il while.

 // Creo la variabile per l'elemento
 // var message = document.getElementById('message');

// Chiedo i numeri all'utente, li controllo e faccio la somma

// Versione for

// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci il ' + (i + 1) + ' numero'));
//   while (isNaN(numero)) {
//     numero = parseInt(prompt('Errore.Inserisci il ' + (i + 1) + ' numero'));
//   }
//   somma += numero;
// }

// Versione while

// var somma = 0;
// var i = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('Inserisci il ' + (i + 1) + ' numero'));
//   while (isNaN(numero)) {
//     numero = parseInt(prompt('Errore.Inserisci il ' + (i + 1) + ' numero'));
//   }
//   i++;
//   somma += numero;
// }


// Stampo la somma
// message.innerHTML = 'la somma è ' + somma;



// ////////////////////////////// JSnack 4


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// // Creo la variabile per l'elemento
// var message = document.getElementById('message');
//
// // Creo l'array degli invitati
// var listaInvitati = ['Topolino', 'Pippo', 'Pluto', 'Paperino'];
//
// // Chiedo il nome all'utente
// var nomeUtente = prompt('Inserisci il tuo nome');
//
// // Controllo se il nome si trova nella lista
// var utenteTrovato = false;
// var i = 0;
// while (utenteTrovato === false && i < listaInvitati.length) {
//   if (nomeUtente === listaInvitati[i]) {
//     utenteTrovato = true;
//   }
//   i++;
// }
//
// // Stampo il messaggio
// if (utenteTrovato === true) {
//   message.innerHTML = 'Puoi entrare';
// } else {
//   message.innerHTML = 'Non puoi entrare';
// }



// ////////////////////////////// JSnack 5


// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che
//  compongono il numero.


// // Creo la variabile per l'elemento
// var message = document.getElementById('message');
//
// // Chiedo il numero all'utente
// var numeroUtente = prompt('Inserisci un numero di quettro cifre');
//
// // Suddivido il numero in 4 numeri
// numeroSplit   = numeroUtente.split("");
//
// // Calcolo la somma dei 4 numeri
// var somma = 0;
// for (var i = 0; i < numeroSplit.length; i++) {
//   var numeroSplitNumeri = parseInt(numeroSplit[i]);
//   somma += numeroSplitNumeri;
// }
//
// // Stampo il messaggio
// message.innerHTML = 'La somma dei quattro numeri è ' + somma;


// ////////////////////////////// JSnack 6

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// // Chiedo il numero all'utente
//  var n = parseInt(prompt('Inserisci un numero da 1 a 10'));
//
// // Creo e stampo n volte l'array in base al numero che ha inserito l'utente
//  for (var i = 0; i < n; i++) {
//   var array = generaArray();
//   console.log(array);
//  }
//
// // Funzione che genera un array di 10 numeri interi casuali
// // Ritorna array generato
//  function generaArray () {
//    var arrayNumeri = [];
//    for (var i = 0; i < 10; i++) {
//      var number = Math.floor(Math.random() * 100) + 1;
//      arrayNumeri.push(number);
//      }
//      return arrayNumeri;
//  }


// ///////////////////////////  JSnack 7

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di
// cognomi, Gatsby vuole generare una falsa lista di invitati.


// // Creo la variabile per l'elemento html
// var message = document.getElementById('message');
//
// // Creo array nomi
// var arrayNomi = ['topolino', 'pippo', 'paperino', 'pluto'];
//
// // Creo array cognomi
// var arrayCognomi = ['rossi', 'bianchi', 'verdi', 'gialli'];
//
// // Creo le variabili che mi serviranno per la lista di nomi e cogmoni casuali
// var numeroInvitatiFalsi = 5;
// var nome = '';
// var cognome = '';
// var listaFalsa = [];
//
// // Creo un ciclo for per scorrere i due array, selezionare i valori tramite indice e comporre il nuovo array di invitati falsi
// for (var i = 0; i < numeroInvitatiFalsi; i++) {
//
//   // Assegno alle rispettive variabili il valore preso tramite indici generati casualmente
//   var indiceCasualeNome = Math.floor(Math.random() * arrayNomi.length);
//   nome = arrayNomi[indiceCasualeNome];
//   var indiceCasualeCognome = Math.floor(Math.random() * arrayCognomi.length);
//   cognome = arrayCognomi[indiceCasualeCognome];
//
//   // Concateno i valori presi e li inserisco nel novo array
//   var nomeFalsoCompleto = nome + ' ' + cognome;
//   listaFalsa.push(nomeFalsoCompleto);
// }
//
// // Stampo a video la lista creata
// message.innerHTML = listaFalsa;


// //////////////////////////  JSnack 8

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà
// tanti quanti l’altro.

// // Creo la variabile per l'elemento
// var message = document.getElementById('message');
//
// // Creo array nomi e conservo la lunghezza dell'array in una variabile
// var arrayNomi = ['pippo', 'paperino', 'pluto', 'zio paperone'];
// var lunghezzaArrayNomi = arrayNomi.length;
//
// // Creo array cognomi e conservo la lunghezza dell'array in una variabile
// var arrayCognomi = ['qui', 'quo', 'qua', 'topolino'];
// var lunghezzaArrayCognomi = arrayCognomi.length;
//
// // Tramite un ciclo if controllo le lunghezze degli array. Se un array è piu corto dell'altro, invoco la funzione per aggiungere elementi
// // all'array più corto in modo da fargli raggiungere la stessa lunghezza di quello pià lungo.
// // Se sono di uguale lunghezza non faccio nulla
// var lunghezze = 0;
// if (lunghezzaArrayNomi < lunghezzaArrayCognomi) {
//   arrayNomi = riempiArray(arrayNomi, lunghezzaArrayCognomi);
//   lunghezze = 1;
// }else if (lunghezzaArrayNomi > lunghezzaArrayCognomi) {
//   arrayCognomi = riempiArray(arrayCognomi, lunghezzaArrayNomi);
//   lunghezze = 2;
// }
//
// // Dopo aver ottenuto il risultato del ciclo if, stampo a video il messaggio finale
// if (lunghezze === 1) {
//   message.innerHTML = 'Il primo array è più corto del secondo, quindi ho aggiunto elementi casuali al primo array.' + '<br>' + arrayNomi + '<br>' + arrayCognomi;
// } else if (lunghezze === 2) {
//   message.innerHTML = 'Il secondo array è più corto del primo, quindi ho aggiunto elementi casuali al secondo array.' + '<br>' + arrayNomi + '<br>' + arrayCognomi;
// } else {
//   message.innerHTML = 'Gli array hanno la stessa lunghezza, quindi non ho modificato nulla.' + '<br>' + arrayNomi + '<br>' + arrayCognomi;
// }
//
// //  ************************  FUNZIONI******************* //
//
// // Funzione che, tramite un ciclo while, modifica l'array originale, riempendolo con elementi casuali, fino al raggiungimento della lunghezza desiderata
// // Argomenti :
// //             ==> array da riempire : l'array più corto che deve essere modificato
// //             ==> lunghezza da raggiungere : la lunghezza dell'array più lungo
// // Ritorna il nuovo array modificato
// function riempiArray (arrayDaRiempire, lunghezzaDaRaggiungere) {
//   while (arrayDaRiempire.length < lunghezzaDaRaggiungere) {
//     var elementoCasuale = Math.floor(Math.random() * 10);
//     arrayDaRiempire.push(elementoCasuale);
//   }
//   return arrayDaRiempire;
// }


// //////////////////////////   JSnack 9

// Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// Creo la variabile per l'elemento
var divRed = document.getElementById('red');
var divGreen = document.getElementById('green');

// Creo l'array dei numeri
var arrayNumeri = [1, 51, 23, 78, 99, 150, 22, 66];

// Creo le variabili per separare i numeri pari dai numeri dispari
var listaRed = '';
var listaGreen = '';


// // *****************  Versione senza la funzione  **************** //
// // Tramite un ciclo for scorro l'array e con un ciclo if individuo i numeri pari e i numeri dispari e li assegno alle variabili sopra dichiarate
// for (var i = 0; i < arrayNumeri.length; i++) {
//   if (arrayNumeri[i] % 2 === 0) {
//     listaGreen += arrayNumeri[i] + ',';
//   } else {
//     listaRed += arrayNumeri[i] + ',';
//   }
// }
//
// // Stampo a video il risultato
// divGreen.innerHTML = listaGreen;
// divRed.innerHTML = listaRed;



// *****************  Versione con la funzione  **************** //
// // Tramite un ciclo for scorro l'array e con la funzione pariDispari e un ciclo if individuo i numeri pari e i numeri dispari e li assegno alle variabili sopra dichiarate
// for (var i = 0; i < arrayNumeri.length; i++) {
//   var numeroPariDispari = pariDispari(arrayNumeri[i]);
//   if (numeroPariDispari) {
//     listaGreen += arrayNumeri[i] + ',';
//   } else {
//     listaRed += arrayNumeri[i] + ',';
//   }
// }
//
// // Stampo a video il risultato
// divRed.innerHTML = listaRed;
// divGreen.innerHTML = listaGreen;
//
// // *************************  FUNZIONI  ************************ //
// // Funzione che stabilisce se il numero è pari o dispari
// // Argomenti:
// //            ==> numero : il numero da controllare
// // Ritorna true se il numero è pari, altrimenti false se il numero è dispari.
// function pariDispari (numero) {
//   var controlloPariDispari = false;
//   if (numero % 2 === 0) {
//   controlloPariDispari = true;
//   }
//   return controlloPariDispari;
// }
