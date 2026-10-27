const arr = [1, 2, 3];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true

const date = new Date();

console.log(date instanceof Date);  // true
console.log(date instanceof Array); // false

const myNumber=5
console.log(`Type of mynumber is ${typeof myNumber}`) //number is primitive data type
console.log(`myNumber is istance of Number is ${myNumber instanceof Number}`) //Number is class number is primitive data type

console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof null);         // "object"
console.log(typeof (() => {}));   // "function"