/**
 * Node.js funktio voi palauttaa toisen funktion.
 * Opettele:
 * 
 * - määrittelemään sisäfunktio
 * - palauttamaan funktion funktiosta.
 * 
 * Katso mallia alta.
 * 
 * @param {
 * } customer 
 * @returns 
 */

function getFormulaForGreetings(customer){
    //sisäfunktion sisään kopioidaan asiakas ulommasta funktiosta.
    //tehdään syväkopio.
    //näitä sisäfunktiota kutsutaan ilman parametreja.
    function sayBye(){
        const myCustomer=JSON.parse(JSON.stringify(customer))
        console.log(`I am sorry ${myCustomer.name}, but you are too young to use this app.`)
    }

    function sayHi(){
        //ei tehdä viittausta funktion sisäiseen asiakasobjektiin, 
        //vaan tehdään siitä syväkopio.
        const myCustomer=JSON.parse(JSON.stringify(customer))
        console.log(`Hi, Welcome ${myCustomer.name}`)
    }

    if (!customer || !customer.age || !customer.name){
        throw new Error("Customer parameter or age field was missing.")
    }
    if (customer.age<10){
        return sayBye;
    }
    else {
        return sayHi;
    }
}

const maija = {
    name: 'Maija',
    age: 9
}

const matti = {
    name: 'Matti',
    age: 19
}

const formulaForGreetingsToMaija = getFormulaForGreetings(maija)
const formulaForGreetingsToMatti = getFormulaForGreetings(matti)

formulaForGreetingsToMatti()
formulaForGreetingsToMaija()
