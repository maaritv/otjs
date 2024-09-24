const printGlobals = require("./global_test.js")

//names on voimassa päätasolla.
let names = ['Matti', 'Minna', 'Iines', 'Joni', 'Mikko', 'Leena']

//More names on globaali muuttuja, joka näkyy myös test.js-tiedostossa 
//määritellyille funktioille.
moreNames = ["Antti", "Pekka", "Juha"]
//printGlobals pystyy tulostamaan moreNames-muuttujan arvon
//mutta ei names-muuttujan arvoa.
printGlobals()

function getAnimals() {
  const animals = ['Dog', 'Cat', 'Horse', 'Turtle', 'Rabbit']
  let lastAnimal = ""

  for (i = 0; i < animals.length; i++) {
    let animal = animals[i]
    lastAnimal = animal
  }
  console.log("Listan viimeinen eläin: " + lastAnimal)
  console.log(names)
  return animals
}

const newAnimals = getAnimals()
console.log("i is "+i)
console.log(newAnimals)