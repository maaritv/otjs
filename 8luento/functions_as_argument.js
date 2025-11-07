/*  
  Korkeamman asteen funktio.
  Opwettele:

  - Luomaan yksinkertainen matemaattinen 
    puhdas funktio.

  - Välittämään se argumenttina toiselle funktiolle,
    joka suorittaa argumenttina saamansa funktion.
*/

const { validateNumber } = require('./my_validators');

function calculateSum(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function calculateDifference(a, b) {
  return parseFloat(a) - parseFloat(b);
}


function executeMyFunction(function_to_execute) {
  console.log("Anna kaksi numeroa, joihin operaatio kohdistetaan")
  let a = readline.question("Anna ensimmäinen tekijä? ");
  validateNumber(a)

  let b = readline.question("Anna toinen tekijä? ");
  validateNumber(b)
  const floatb = parseFloat(b)

  //suoritetaan argumenttina saatu funktio.
  const rslt = function_to_execute(a, b)
  return rslt
}

/** 
  Tämä on konsolipohjainen yhdenkäyttäjän node.js toteutus, 
  jossa esitellään funktiotyyppejä. Yleensä node.js JavaScript-
  ympäristöä käytetään Web-palveluiden ohjelmoinnissa monen käyttäjän
  sovelluksissa.

  Ohjelman suoritus alkaa tästä:
*/

const readline = require('readline-sync');


let iWantTo = readline.question("Mitä haluat tehdä? [summa, erotus] ");

let myFunction='';

if (iWantTo === 'summa') {
  myFunction = calculateSum;
}
else if (iWantTo === 'erotus') {
  myFunction = calculateDifference;
}
else {
  console.log(`Annoit väärän arvon [${iWantTo}].`)
  return;
}

try {
  //executeMyFunction on korkeamman asteen funktio, koska se
  //saa argumentikseen toisen funktion (summaa tai erotus, 
  //riippuen kumman käyttäjä valitsi)
  const result = executeMyFunction(myFunction)
  console.log(`Tulos on ${result}`)
}
catch (e) {
  console.log(`Lasku epäonnistui ${e.message}`)
}