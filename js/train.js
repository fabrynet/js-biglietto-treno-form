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

makeTicket.addEventListener('click', function() {

  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var km = document.getElementById('km').value;
  var category = document.getElementById('category').value;

  var price;
  var priceKm = 0.21;
  var sale1 = 0.8;
  var sale2 = 0.6;

  if (category == "underage") {
    price = km * priceKm * sale1;
  } else if (category == "over65") {
    price = km * priceKm * sale2;
  } else {
    price = km * priceKm;
  }

  var minTrainNumber = 10000;
  var maxTrainNumber = 90000;
  var minTrainCarriage = 1;
  var maxTrainCarriage = 15;
  var trainNumber = Math.floor(Math.random() * (maxTrainNumber - minTrainNumber + 1) + minTrainNumber);
  var trainCarriage = Math.floor(Math.random() * (maxTrainCarriage - minTrainCarriage + 1) + minTrainCarriage);

  var passenger = surname + " " + name;
  document.getElementById('passenger').innerHTML = passenger;
  document.getElementById('trainNumber').innerHTML = trainNumber;
  document.getElementById('trainCarriage').innerHTML = trainCarriage;
  document.getElementById('price').innerHTML = price;
  document.getElementById('categoryTicket').innerHTML = category;

  console.log(name);
  console.log(surname);
  console.log(km);
  console.log(category);
  console.log(price);
  console.log(trainNumber);
  console.log(trainCarriage);

});
