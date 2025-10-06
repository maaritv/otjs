const printGlobals = require("./global_test.js")

//names on voimassa päätasolla ja sen alla olevissa 
//lohkoissa, jos sitä ei varjosteta alla (mutta ei yllä) olevassa 
//lohkossa.
let names = ['Matti', 'Minna', 'Iines', 'Joni', 'Mikko', 'Leena']

//More names on globaali muuttuja, joka näkyy myös test.js-tiedostossa 
//määritellyille funktioille.
moreNames = ["Antti", "Pekka", "Juha"]
//printGlobals pystyy tulostamaan moreNames-muuttujan arvon
//mutta ei names-muuttujan arvoa.
printGlobals()


/**
 * 
 * @returns Muuttujat ja vakiot ovat voimassa siinä lohkossa
 * missä ne määritellään ja lohkon sisäisissä lohkoissa.
 */
function getAnimals() {
  const animals = ['Dog', 'Cat', 'Horse', 'Turtle', 'Rabbit']
  let lastAnimal = ""

  for (i = 0; i < animals.length; i++) {
    const animal = animals[i]
    lastAnimal = animal
  }
  console.log("Listan viimeinen eläin: " + lastAnimal)
  console.log(names)
  //Palautetaan animals kutsuvalle funktiolle.
  return animals
}

const newAnimals = getAnimals()
//i:n edestä puuttuu let/const määrittely, se on siis globaali,
//ja voimassa edelleen kun funktiosta poistutaan.
//mahdollisuus virheeseen on olemassa, jos tämä ei ole
//tarkoituksellista.
console.log("i is "+i)
console.log(newAnimals)