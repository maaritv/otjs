const Dinero = require('dinero.js')

/**
 * TIEDOKSI! EI TARVITSE OPETELLA TEKEMÄÄN.
 * 
 */


//Vertaa:
//https://www.calculatorsoup.com/calculators/financial/net-present-value-calculator.php
//laskettu liukuluvuilla

function calculateNPV(rate, cashFlows) {
    if (typeof rate !== "number" || rate < 0) {
        throw new Error("Interest rate must be a positive float " + typeof rate);
    }

    if (!Array.isArray(cashFlows)) {
        throw new TypeError("Cashflows must be an array");
    }

    if (cashFlows.length === 0) {
        throw new TypeError("Cashflow array must be longer than 0");
    }

    let npv = 0;
    let npvD = Dinero({ amount: 0, currency: 'EUR' })

    for (let t = 0; t < cashFlows.length; t++) {
        if (typeof cashFlows[t] !== "number") {
            throw new TypeError("Cashflows must be numbers.");
        }
        const cashFloTD = Dinero({ amount: (cashFlows[t]*100), currency: 'EUR' })
        // Calculate present value of each cash flow
        const presentValue = cashFlows[t] / Math.pow((1 + rate), t);
        const presentValueD = cashFloTD.divide(Math.pow((1 + rate), t));

        // Muunnetaan vuotuisen kassavirran diskontattu arvo 
        //desimaaliluvuksi ennen kuin se lisätään npv-muuttujaan
        npv = npv + parseFloat(presentValue);
        npvD=npvD.add(presentValueD)
    }
    console.log("Present value "+npv)
    console.log("Present value with Dinero "+npvD.setLocale("fi-FI").toFormat())
    return npvD;
}

// Ohjelman suoritus alkaa tästä:
const discountRate = 0.1; // 10% discount rate
const cashFlows = [-1000, 200, 300, 400, 500]; // Initial investment and cash flows

const npvD = calculateNPV(discountRate, cashFlows);
console.log(`The NPV of the cash flows is: ${npvD.setLocale("fi-FI").toFormat()}`);
