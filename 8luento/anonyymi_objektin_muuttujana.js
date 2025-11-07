/*
  Opettele ymmärtämään, mihin this-sana viittaa.
*/
/** OHJELMAN SUORITUS ALKAA */

/** kirjoita terminaaliin node anonyymit.js */

/** 
  Näillä funktioilla ei ole nimeä, mutta niiden 
  määrittely on sijoitettu vakioihin, joiden 
  tyyppi on nyt "function"
*/

const person = {
  name: 'Mikko',
  birth_date: '1999-01-01',
}

const myAnonymousFunction = function() {
  console.log("Tervetuloa! ", this.name);
};

//arrow function
const myArrowFunction = (name) => {
  console.log("Hei! " + name);
}

//Tässä niitä kutsutaan vakion avulla.
myAnonymousFunction("Pekka")
myArrowFunction("Pekka")
console.log("testing")
person.sayHello = myAnonymousFunction
person.sayHello()
console.log("say hello ends")

