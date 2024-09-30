const Dinero = require('dinero.js')


const years = 2
const months = 12
const weeklyMoneyEur = 10.40
const numberOfPayments = years * months * 4

console.log(`Viikkorahan suuruus\t${weeklyMoneyEur} euroa / viikko`)
console.log(`Viikkorahan kesto\t${numberOfPayments} viikkoa`)
const totalMoney = numberOfPayments * weeklyMoneyEur
console.log(`Viikkoraha on liukulukuina ${totalMoney} euroa`)

/*
It's important to state that Dinero.js doesn't deal with cents separately. The amounts are specified in minor currency units, depending on the currency you're using. 
If you're using USD, then money is represented in cents.
https://www.honeybadger.io/blog/currency-money-calculations-in-javascript/
*/

const weeklyMoneyCent = weeklyMoneyEur * 100
let money = Dinero({ amount: weeklyMoneyCent, currency: 'EUR' })
const result = money.multiply(numberOfPayments) // returns new Dinero object

console.log("Kertolaskettuna (dinero): " + result.setLocale("fi-FI").toFormat())


const addition = Dinero({ amount: weeklyMoneyCent, currency: 'EUR' })

for (let i = 0; i < (numberOfPayments - 1); i++) {
   console.log((i + 2) + ". maksu " + numberOfPayments + ":sta kertymä: " + money.setLocale("fi-FI").toFormat())
   money = money.add(addition)
}
console.log("Yhteensä kertymänä (dinero): " + money.setLocale("fi-FI").toFormat())

