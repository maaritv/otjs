const Book = require('./model/Book.js');


/**
 * Tämä esimerkki on tiedoksi. JS luokkaa ei tarvitse oppia 
 * toteuttamaan.
 * 
 * Opettele ymmärtämään 
 * JS luokan toimitntaperiaate:
 * 
 * - dynaamisesti tyypitetyn kielen toiminta jäsenmuuttujien 
 *   ja funktioiden suhteen. Niitä voidaan lisätä dynaamisesti 
 *   joko yhdelle ilmentymälle tai kaikille (lisätään prototyyppiibn)
 *   funktio. 
 */




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


/** Seuraava syntaksi tulee paremmin tutuksi funktionaalisen 
 * ohjelmoinnin yhteydessä, kun puhutaan anonyymeistä 
 * funktioista. 
 */

const myFunction = function () {
  return "I added this function."
}

book1.omaFunktio = myFunction

console.log(book1.omaFunktio())
//book2:lla ei ole vastaavaa funktiota, koska sitä ei erikseen tälle 
//ilmentymälle annettu


//Uusi luokan jäsenmuuttuja voidaan lisätä prototyypille
//ajonaikaisesti. Nyt se on voimassa molemmille kirjoille,
//ne voivat molemmat sitä kutsua.
Book.prototype.setPrice = function (newPrice) {
  this.price=newPrice;
};

book1.setPrice(100)
//molemmille kirjoille on ilmestynyt uusi jäsenmuuttuja,
//jota javascriptissä voidaa lukea suoraan luokan ulkopuolelta.
//ne ovat oletusarvoisesti julkisia.
console.log(`Kirjan 1 hinta on ${book1.price}`)

book2.setPrice(50)
console.log(`Kirjan 2 hinta on ${book2.price}`)

const setName =function(name){
  this.title=name;
}

book1.setName=setName;
console.log(`Vanha nimi: ${book1.title}`)
book1.setName("Nimi vaihdettu")
console.log(`Uusi nimi: ${book1.title}`)


//JavaScriptissä luokalle voi määritellä dynaamisesti uusia attribuutteja.
//useissa kielissä kuten Javassa näin ei voi tehdä.
book1.price = 400.50
console.log(`Book1 hinta on nyt ${book1.price}. Hinta on tyyppiä ${typeof book1.price}`)

//Koska JavaScript on dynaamisesti tyypitetty kieli, price-attribuutin tyyppi voidaan 
//sijoittamalla vaihtaa toiseksi. 
book1.price = "Kissa"
console.log(`Book1 hinta on nyt ${book1.price}. Hinta on tyyppiä ${typeof book1.price}`)


