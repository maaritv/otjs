
function getInformation(book){
  if (!book){
    throw new Error("Kirja, jolle tiedot pitäisi antaa puuttuu!")
  }
  const infoText = `Kirjan nimi on\t${book.title}\nKirjailja on\t\t${book.author}`
  return infoText;
}


/* Tämä on JSON-objekti eikä kirja-luokan ilmentymä. 
Kysyttäessä (typeof) molemmat ovat objekteja. */


const book3 = {
  title: 'Neiti etsivä kohtaa kolmion',
  author: 'Carylon Keene',
  publicationYear: 1960,
  bookAge: function () {
    return new Date().getFullYear() - this.publicationYear
  }
}

book3.getDescription = function () {
  return `${this.title} on kirjailija ${this.author} paras kirja :-)`
}


/** Seuraava syntaksi tulee paremmin tutuksi funktionaalisen 
 * ohjelmoinnin yhteydessä, kun puhutaan anonyymeistä 
 * funktioista. 
 */

const myFunction = function () {
  return "I added this function."
}

book3.munFunktio = myFunction

console.log(book3.munFunktio())


console.log(`Book3 information\n${getInformation(book3)}. Kirjan tyyppi on ${typeof book3}`)

console.log(`Tässä kutsutaan book3:n funktiota \"age\" ${book3.bookAge()}`)
console.log(`Book3:lle on lisätty uusi metodi, ja tässä sitä kutsutaan  ${book3.getDescription()}`)



