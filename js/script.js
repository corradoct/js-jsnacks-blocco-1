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
