/** Ohjelman suoritus alkaa. */
//Tällä tavoin voit ottaa käyttöön erilaisia 
//sovelluskirjastoja. Tällä saamme luettua käyttäjän
//syötteet näppäimistöltä.
const readline = require('readline-sync')
const { validateNumber, convertStringToNumber } = require('./myvalidators.js')


/** 
  Funktiolla on sivuvaikutus, koska se kasvattaa sellaisen 
  muuttujan (accountBalance) arvoa, joka ei ole määritelty tämän funktion sisällä.
  Tämän kaltaisilla funktioilla on usein arvaamattomia vaikutuksia, 
  ja siksi tämä toteutus luultavasti pyydettäisi koodinkatselmoinnissa 
  muuttamaan siten, että sivuvaikutuksia ei olisi.
*/

function changeAccountBalance(change, monthlySpendLimit) {
  // jos change < 0, kysymyksessä rahan nosto, jos change > 0,
  // talletetaan lisää rahaa tilille.
  let changeToDo = convertStringToNumber(change)
  //Esiehtotarkistus!
  if ((accountBalance + changeToDo) < 0) {
    throw new Error("Tilin saldo ei riitä!")
  }

  if (changeToDo < 0 && Math.abs(changeToDo) > monthlySpendLimit) {
    throw new Error("Et voi nostaa enempää kuin nostoraja antaa!")
  }
  //Ei return-lausetta!-> sivuvaikutus sijoitettaessa
  //ylempänä määriteltyyn accountbalance-funktion.
  accountBalance = accountBalance + changeToDo
}


/** 
  Tämä funktio on ns. aito funktio ilman sivuvaikutuksia. 
  Paluuarvo on riippuvainen vain funktion
  parametreista ei muuttujista, jotka on määritelty 
  funktion ulkopuolella kuten oli tilanne ylläolevassa 
  funktiossa. 
*/

function getNewMonthlySpendLimit(oldLimit, change) {
  let changeToDo = convertStringToNumber(change)
  const oldLimitAsNumber = convertStringToNumber(oldLimit)

  if ((oldLimitAsNumber + changeToDo) < 0) {
    throw new Error('Käyttöraja ei voi olla negatiivinen!')
  }
  return oldLimitAsNumber + changeToDo
}


/** Sovelluksen tila koostuu muuttujista accountBalance ja 
     monthlySpendLimit (rivi 65)
     * accountBalance muuttuja on määritelty samalla tasolla, kuin
     * funktio, joka sitä käyttää (changeAccountBalance)
     * siksi funktio näkee sen.
     */
let accountBalance = 400
let input = "";


try {
  //Tämä funktio on määritelty tasoa alempana kuin funktio 
  //joka sitä käyttää. Siksi funktio EI näe tätä muuttujaa, vaan 
  //se on annettava parametrina 
  let monthlySpendLimit = 150
  //Molempien muuttujien arvoa muutetaan seuraavan tapahtumasilmukan 
  //sisällä.
  while (input !== 'q') {
    console.log(`Saldosi on ${accountBalance}`)
    console.log(`Käyttörajasi on ${monthlySpendLimit}`)
    let changeBalanceBy = readline.question(`Paljonko haluat muuttaa saldoa?`);
    validateNumber(changeBalanceBy)
    let changeMonthlySpendLimitBy = readline.question("Paljonko haluat muuttaa kuukausittaista käyttörajaa? ");
    validateNumber(changeMonthlySpendLimitBy)
    changeAccountBalance(changeBalanceBy, monthlySpendLimit)
    console.log(`Tilin saldo on nyt ${accountBalance}`)
    monthlySpendLimit = getNewMonthlySpendLimit(monthlySpendLimit, changeMonthlySpendLimitBy)
    console.log(`New monthly spendlimit is now ${monthlySpendLimit}`)
    input = readline.question(`Jatketaanko? Paina q, jos haluat lopettaa, muuten mitä tahansa muuta kirjainta.`);
  }
}
catch (error) {
  if (error.constructor.name === 'TypeError') {
    console.log(`Virhe syötteessä: ${error}`)
  }
  else {
    console.log(`Exception: ${error}`)
  }
}



