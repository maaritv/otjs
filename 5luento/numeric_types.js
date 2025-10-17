

const a=1.2
const b = 4
const c = a+b

console.log(`Tulos ${c}`)
console.log(`A:n (${a}) tyyppi on ${typeof a} B:n (${b}) tyyppi on ${typeof b}. C:n tyyppi ${typeof c}.`)


let claim  = 0.1 + 0.2 === 0.30000000000000004
console.log(`Tämä väite on ${claim}`) 

claim  = 0.1 + 0.2 === 0.3
console.log(`Tämä väite on ${claim}`)


const s = 0.1+0.2
const value = 0.3
const roundedS = s.toFixed(1)
const roundedValue = value.toFixed(1)
console.log(`Pyöristä 0.1+0.2 summa on pyöristettynä ${roundedS}`)
console.log(`Verrataan pyöristettyyn arvoon ${roundedValue}`)

claim  = s.toFixed(1) === value.toFixed(1)
console.log(`Tämä väite on nyt ${claim}`) 
