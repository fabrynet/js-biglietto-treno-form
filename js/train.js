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
var cancelTicket = document.getElementById('cancelTicket');

makeTicket.addEventListener('click', function() {

  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var km = document.getElementById('km').value;
  var category = document.getElementById('category').value;

  var price;
  var priceKm = 0.21;
  var sale1 = 0.8;
  var sale2 = 0.6;

  // controllo compilazione campi del form
  if (name == "" || surname == "" || km == "") {
    alert("Attenzione compila tutti i campi");
  } else {

    if (category == "Minorenne") {
      price = (km * priceKm * sale1).toFixed(2);
    } else if (category == "Over 65") {
      price = (km * priceKm * sale2).toFixed(2);
    } else {
      price = (km * priceKm).toFixed(2);
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

    // animazioni effetti comparsa e scomparsa
    document.getElementById('form').className = "hidden";
    document.getElementById('title').innerHTML = "Ecco il tuo biglietto";
    document.getElementById('ticket').className = "show";

    console.log(name);
    console.log(surname);
    console.log(km);
    console.log(category);
    console.log(price);
    console.log(trainNumber);
    console.log(trainCarriage);

  }

});

cancelTicket.addEventListener('click', function() {

  // animazioni effetti comparsa e scomparsa
  document.getElementById('ticket').className = "hidden";
  document.getElementById('title').innerHTML = "Acquista il biglietto online";
  document.getElementById('form').className = "show";

  // reset del form
  document.getElementById('name').value = "";
  document.getElementById('surname').value = "";
  document.getElementById('km').value = "";
  document.getElementById('category').value = "Maggiorenne";

});
