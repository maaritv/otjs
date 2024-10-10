class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  //Tämä on book-luokan jäsenfunktio. Se ei saa parametriksi kirjaa,
  //koska se lukee tarvitsemansa tiedot tämän luokan sisäisistä
  //jäsenmuuttujista. this....
  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
  }
}

//Tämä on normaali nimetty funktio, joka saa parametriksi kirjaolion.
function getInformation(book) {
  return `${book.title} by ${book.author}, published in ${book.publicationYear}`;
}

// Creating instances of the Book class. two book objects.
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
//Tässä jäsenmuuuttujia muutetaan suoraan luokan ulkopuolelta. 
//Tällainen voi rikkoa luokan sisäisen eheyden tyhjäämällä esim.
//jäsenmuuttujia, joilla oletetaan olevan arvo. Jäsenmuuttujia olisi 
//parempi muuttaa jäsenfunktioilla, jotka rajaavat mahdollisten luokan 
//sisäisten tilojen määrää. (kaikkia jäsenmuuttujia ei aina saa muuttaa, 
//kun olio on kerran luotu!)
book1.author = "Charles Dickens"
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
book2.athor = "Charles Dickens"

console.log(`Book1 information ${book1.getInfo()}. Kirjan tyyppi on ${typeof book1}`)
console.log(`Book2 information ${book2.getInfo()}. Kirjan tyyppi on ${typeof book2}`)

/* Tämä on JSON-objekti eikä kirja-luokan ilmentymä. 
Kysyttäessä (typeof) molemmat ovat objekteja. */


const book3 = {
  title: 'Neiti etsivä kohtaa kolmion',
  athor: 'Carylon Keene',
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

book1.omaFunktio = myFunction
book3.munFunktio = myFunction

console.log(book1.omaFunktio())
console.log(book3.munFunktio())

console.log(`Book3 information ${getInformation(book3)}. Kirjan tyyppi on ${typeof book3}`)

console.log(`Tässä kutsutaan book3:n funktiota \"age\" ${book3.bookAge()}`)
console.log(`Book3:lle on lisätty uusi metodi, ja tässä sitä kutsutaan  ${book3.getDescription()}`)

//JavaScriptissä luokalle voi määritellä dynaamisesti uusia attribuutteja.
//useissa kielissä kuten Javassa näin ei voi tehdä.
book1.price = 400.50
console.log(`Book1 hinta on nyt ${book1.price}. Hinta on tyyppiä ${typeof book1.price}`)

//Koska JavaScript on dynaamisesti tyypitetty kieli, price-attribuutin tyyppi voidaan 
//sijoittamalla vaihtaa toiseksi. 
book1.price = "Kissa"
console.log(`Book1 hinta on nyt ${book1.price}. Hinta on tyyppiä ${typeof book1.price}`)


