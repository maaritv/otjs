const myexports = require("./global_test.js")


//names on voimassa päätasolla ja sen alla olevissa 
//lohkoissa, jos sitä ei varjosteta alla (mutta ei yllä) olevassa 
//lohkossa.
let names = ['Matti', 'Minna', 'Iines', 'Joni', 'Mikko', 'Leena']

//More names on globaali muuttuja, joka näkyy myös test.js-tiedostossa 
//määritellyille funktioille.
moreNames = ["Antti", "Pekka", "Juha"]
//printGlobals pystyy tulostamaan moreNames-muuttujan arvon
//mutta ei names-muuttujan arvoa.
myexports.printGlobals()
myexports.sayHi()


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
  //Palautetaan viittaus luotuun animals-listaan kutsuvalle funktiolle.
  return animals
}

function getCopyOfAnimals() {
  const animals = ['Dog', 'Cat', 'Horse', 'Turtle', 'Rabbit']
  let lastAnimal = ""

  for (i = 0; i < animals.length; i++) {
    const animal = animals[i]
    lastAnimal = animal
  }
  console.log("Listan viimeinen eläin: " + lastAnimal)
  console.log(names)
  //Ei palauteta viittausta rivillä 36 luotuun animals-listaan
  // vaan luodaan kokonaan uusi. Alkuperäinen animals-lista 
  // vapautuu muistista, kun sitä ei enää tarvita.
  //kutsuva funktio saa viittauksen tähän kopioon, ja 
  //jatkaa sen prosessointia. Huomaa, kopioinnin jälkeen 
  // alkuperäiseen listaan 
  //lisätty eläin ei näy kopiossa.
  const animalsCopy =  [...animals]
  animals.push("Worm")
  return animalsCopy;
}

const newAnimals = getAnimals()
console.log(`Viittaus funktion luomaan eläinlistaan ${JSON.stringify(newAnimals)}`)

const copyAnimals = getCopyOfAnimals()

//i:n edestä puuttuu let/const määrittely, se on siis globaali,
//ja voimassa edelleen kun funktiosta poistutaan.
//mahdollisuus virheeseen on olemassa, jos tämä ei ole
//tarkoituksellista.
console.log("i is "+i)
console.log(`Eläinlistan kopio ei sisällä alkuperäiseen kopion luomisen jälkeen lisätty matoa. ${copyAnimals}`)