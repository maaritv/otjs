
console.log("------------------when myNumber is undefined ----------------------------------------")
let myNumber;

if (myNumber==undefined){
    console.log(`My number (${myNumber}) is == undefined `)
}
else {
    console.log(`My number (${myNumber}) is !== undefined `)
}

if (myNumber===undefined){
    console.log(`My number (${myNumber}) is === undefined (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is !== undefined (${myNumber})`)
}

if (myNumber){
    console.log(`undefined:\tMy number is defined...(${myNumber})`)
}

console.log("------------------when myNumber is null ----------------------------------------")
myNumber=null

if (myNumber==undefined){
    console.log(`My number (${myNumber}) is still == undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is !== undefined even its value is now (${myNumber})`)
}

if (myNumber===undefined){
    console.log(`My number (${myNumber}) is still === undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is  !=== undefined because its value is now (${myNumber})`)
}

if (myNumber){
    console.log(`null:\tMy number is defined...(${myNumber})`)
}

console.log("------------------when myNumber is '' ----------------------------------------")
myNumber = ''

if (myNumber==undefined){
    console.log(`My number (${myNumber}) is still == undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is !== undefined even its value is now (${myNumber})`)
}

if (myNumber==undefined){
    console.log(`My number (${myNumber}) is still === undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is  !=== undefined even its value is now (${myNumber})`)
}

if (myNumber){
    console.log(`''\tMy number is defined...(${myNumber})`)
}

console.log("------------------when myNumber is NaN ----------------------------------------")
myNumber=NaN

if (myNumber==undefined){
    console.log(`My number (${myNumber}) is still == undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is  !== undefined because its value is now (${myNumber})`)
}

if (myNumber===undefined){
    console.log(`My number (${myNumber}) is still === undefined even its value is now (${myNumber})`)
}
else {
    console.log(`My number (${myNumber}) is  !=== undefined because its value is now (${myNumber})`)
}

if (myNumber){
    console.log(`NAN\tMy number is defined...(${myNumber})`)
}

console.log("-------------------when \"5\" and 5 ----------------------------------------")

let five="5"
myNumber=5

if (five==myNumber){
    console.log(`(${typeof five}) five == (${typeof myNumber}) myNumber`)
}

if (five === myNumber){
   console.log(`(${typeof five}) five === (${typeof myNumber}) myNumber`)
}
else {
    console.log(`(${typeof five}) five !=== (${typeof myNumber}) myNumber`)
}

if (myNumber){
    console.log(`5\tNOW, My number is defined. it is not undefined or null!! (${myNumber})`)
}

console.log(`------------------ \"5\"+5 is ${five+myNumber}--------------------------`)
console.log("------------------when 5 and 5 ----------------------------------------")

five=5

if (five==myNumber){
    console.log(`(${typeof five}) five == (${typeof myNumber})  myNumber`)
}

if (five === myNumber){
   console.log(`(${typeof five}) five === (${typeof myNumber}) myNumber`)
}

if (myNumber){
    console.log(`5\tNOW, My number is defined. it is not undefined or null!! (${myNumber})`)
}
console.log(`------------------ 5+5 is ${five+myNumber}--------------------------`)