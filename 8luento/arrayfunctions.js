/**
 * Opettele käyttämään seuraavia array-funktioita.
 * 
 * 1. filter
 * 2. map
 * 3. find 
 * 
 */


const books = [
    { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Scribner", isbn: "9780743273565", publicationYear: 1925 },
    { id: 2, name: "1984", author: "George Orwell", publisher: "Secker & Warburg", isbn: "9780451524935", publicationYear: 1949 },
    { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee", publisher: "J.B. Lippincott & Co.", isbn: "9780061120084", publicationYear: 1960 },
    { id: 4, name: "The Catcher in the Rye", author: "J.D. Salinger", publisher: "Little, Brown and Company", isbn: "9780316769488", publicationYear: 1951 },
    { id: 5, name: "Brave New World", author: "Aldous Huxley", publisher: "Secker & Warburg", isbn: "9780060850524", publicationYear: 1932 }
];

console.log("-------------MAP------------------------")
const bookNames = books.map(book => book.name);
console.log(`MAP:\tNimet ovat ${bookNames}`);
console.log("------------FILTER--ALL MATCHING ITEMS------------")
const oldBooks = books.filter(book => book.publicationYear < 1950);
console.log("FILTER 1:");
printBooks(oldBooks)
const oldBooks2 = books.filter(book => isPublishedBefore(book, 1950));
console.log("FILTER 2:");
printBooks(oldBooks2)
console.log("------------FIND-FIRST------------------")
//Etsi ensimmäinen kirja, jonka kys. Secker ja Warburg on julkaissut
const seckerBook = books.find(book => book.publisher === "Secker & Warburg");
console.log(seckerBook);
console.log("------------EVERY------------------------")
//paluuarvo on true, jos listan jokainen jäsen toteuttaa ehdon.
const hasAuthor = books.every(book => (book.author!==null && book.author!="" && book.author!=undefined));
console.log(`Onko kaikilla kirjoilla kirjailija? ${hasAuthor}`);

console.log("------------FOREACH------------------------")
//4. Tulosta kirjan tiedot
printBooks(books)


function isPublishedBefore(book, year){
    if (book.publicationYear < year){
        return true;
    }
    return false;
}

function printBooks(books){
    books.forEach(book => {
        console.log(`Book: ${book.name} by ${book.author} (Published by ${book.publisher} in ${book.publicationYear})`);
    });
}









