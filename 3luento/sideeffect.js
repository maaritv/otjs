const validateNumber = require('./myvalidators.js')

/** 
  Funktiolla on sivuvaikutus, koska se kasvattaa sellaisen 
  muuttujan (accountBalance) arvoa, joka ei ole määritelty tämän funktion sisällä.
  Tämän kaltaisilla funktioilla on usein arvaamattomia vaikutuksia, 
  ja siksi tämä toteutus luultavasti pyydettäisi koodinkatselmoinnissa 
  muuttamaan siten, että sivuvaikutuksia ei olisi.
*/

function changeAccountBalance(change) {
  accountBalance = accountBalance + parseFloat(change)
}

/** 
  Tämä funktio on ns. aito funktio ilman sivuvaikutuksia. 
  Paluuarvo on riippuvainen vain funktion
  parametreista ei muuttujista, jotka on määritelty 
  funktion ulkopuolella kuten oli tilanne ylläolevassa 
  funktiossa. 
*/

function getNewMonthlySpendLimit(monthlySpendLimit, change) {
  return monthlySpendLimit + parseFloat(change)
}


/** Ohjelman suoritus alkaa. */
//Tällä tavoin voit ottaa käyttöön erilaisia 
//sovelluskirjastoja. Tällä saamme luettua käyttäjän
//syötteet näppäimistöltä.
const readline = require('readline-sync')

/** Sovelluksen tila koostuu muuttujista accountBalance ja 
     montlySpendLimit (rivi 46)
     * accountBalance muuttuja on määritelty samalla tasolla, kuin
     * funktio, joka sitä käyttää (changeAccountBalance)
     * siksi funktio näkee sen.
     */
let accountBalance = 400

try {
  //Tämä funktio on määritelty tasoa alempana kuin funktio 
  //joka sitä käyttää. Siksi funktio EI näe tätä muuttujaa, vaan 
  //se on annettava parametrina 
  let monthlySpendLimit = 150

  let changeBalanceBy = readline.question("Paljonko haluat muuttaa saldoa? ");
  validateNumber(changeBalanceBy)
  let changeMonthlySpendLimitBy = readline.question("Paljonko haluat muuttaa kuukausittaista käyttörajaa? ");
  validateNumber(changeMonthlySpendLimitBy)
  changeAccountBalance(changeBalanceBy)
  console.log(`Tilin saldo on nyt ${accountBalance}`)

  monthlySpendLimit = getNewMonthlySpendLimit(monthlySpendLimit, changeMonthlySpendLimitBy)
  console.log(`New monthly spendlimit is now ${monthlySpendLimit}`)
}
catch (error) {
  if (error.constructor.name === 'TypeError') {
    console.log(`Virhe syötteessä: ${error}`)
  }
  else {
    console.log(`Some unidentified error ${error.constructor.name}`)
  }
}



