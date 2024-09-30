function calculateNPV(rate, cashFlows) {

    if (typeof rate !== "number" || rate < 0) {
        throw new Error("Interest rate must be positive float " + typeof rate)
    }

    if (!Array.isArray(cashFlows)) {
        throw TypeError("Cashflows must be an array")
    }

    if (cashFlows.length === 0) {
        throw TypeError("Cashflow array must be longer than 0")
    }

    let npv = 0;

    for (let t = 0; t < cashFlows.length; t++) {
        if (typeof cashFlows[t] !== "number") {
            throw TypeError("Cashflows must be numbers.")
        }
        npv = npv + cashFlows[t] / (1 + rate) ** t;
    }

    return npv;
}


// Example usage:
const discountRate = 0.1; // 10% discount rate
const cashFlows = [-1000, 200, 300, 400, 500];
// Initial investment and cash flows

const npv = calculateNPV(discountRate, cashFlows);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(`The NPV of the cash flows is: ${npv.toFixed(2)} euro`);

