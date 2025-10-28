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

module.exports = Book;