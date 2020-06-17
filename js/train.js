/*
Il programma dovrà permettere l'inserimento del nome del passeggero, dei chilometri che vuole percorrere e la selezione di una categoria (over65, minorenne, maggiorenne).
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
(Come esercizio precedente)
Dovrà creare un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
*/

var makeTicket = document.getElementById('makeTicket');
var cancel = document.getElementById('cancel');
var price;
var trainNumber;
var trainCarriage;

makeTicket.addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var km = document.getElementById('km').value;
  var category = document.getElementById('category').value;
  console.log(name);
  console.log(surname);
  console.log(km);
  console.log(category);
});
