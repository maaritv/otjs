const books = [
    { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Scribner", isbn: "9780743273565", publicationYear: 1925 },
    { id: 2, name: "1984", author: "George Orwell", publisher: "Secker & Warburg", isbn: "9780451524935", publicationYear: 1949 },
    { id: 3, name: "To Kill a Mockingbird", author: "Harper Lee", publisher: "J.B. Lippincott & Co.", isbn: "9780061120084", publicationYear: 1960 },
    { id: 4, name: "The Catcher in the Rye", author: "J.D. Salinger", publisher: "Little, Brown and Company", isbn: "9780316769488", publicationYear: 1951 },
    { id: 5, name: "Brave New World", author: "Aldous Huxley", publisher: "Secker & Warburg", isbn: "9780060850524", publicationYear: 1932 }
];

//puhdas funktio ei muuta alkuperäistä listaa, vaan tekee siitä 
//kopion, johon lisää uuden kirjan. sitten se palauttaa tuon kopion.
function addBookToListPure(book, booklist){
    //luodaan ensin kopio argumenttina saadusta kirjalistasta
    //kutsujan kirjalista ei muutu.
    const newbooklist = JSON.parse(JSON.stringify(booklist))
    const newbook = JSON.parse(JSON.stringify(book))
    newbook.id=700
    newbooklist.push(newbook)
    //console.log(newbooklist)
    //console.log(booklist)
    return newbooklist
}

//funktio, jolla on sivuvaikutus lisää arvon suoraan
//argumenttina saatuun listaobjektiin.
//listan palautusta ei siis tarvita.

function addBookToList(book, booklist){
    booklist.push(book)
}

const carBook = {
    title: "How to fix a car",
    author: "James Carman"
}

const plantBook = {
    title: "How to grow a plant",
    author: "Max Tulip"
}

//Pure function returns a new copy of the list given 
//as an argument
const newBooks = addBookToListPure(carBook, books)

//calling with side effect. no return value is 
//specified.
addBookToList(plantBook, newBooks)
//console.log(books)
console.log(newBooks)
//console.log(carBook)
