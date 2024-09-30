const Dinero = require('dinero.js')

/**
 * Lasketaan myyjän kuukausipalkka, joka koostuu peruspalkasta
 * ja kuukauden myyntiin suhteutetusta provisiosta (provisio%*myynti)
 */

const monthlySalesEur = 100000  
const baseSalaryEur = 1000  

//Dinero kirjasto tarvitsee eurot senteiksi muutettuna!
const monthlySalesCents = monthlySalesEur*100  
const provisionPercent = 2.56
const baseSalaryCents = baseSalaryEur*100  


//Luodaan muuttujaperuspalkalle ja myyntiluvulle
let monthlySalaryCentsD = Dinero({ amount: baseSalaryCents, currency: 'EUR' })
const monthlySalesCentsD = Dinero({ amount: monthlySalesCents, currency: 'EUR'})

//Provisio on suhteessa kuukauden myyntiin
const monthlyProvisionCentsD = monthlySalesCentsD.percentage(provisionPercent)
console.log(`Provisio ${monthlyProvisionCentsD.setLocale("fi-FI").toFormat()}`)

monthlySalaryCentsD=monthlySalaryCentsD.add(monthlyProvisionCentsD)

const monthlyTotalSalaryString=monthlySalaryCentsD.setLocale("fi-FI").toFormat()
console.log(`Kuukauden kokonaispalkka ${monthlyTotalSalaryString}`)