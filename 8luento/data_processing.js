
const data = require('./books.json')

/**
 * Funktionaalista ohjelmointia JavaScriptillä 
 * ilman arrayfunktioita. Normaaleja nimettyjä
 * funktioita on kuitenkin ketjutettu rivillä 41.
 */

const start = new Date().getTime()
const validBooks = getValidBooks(data)
console.log(validBooks)
const end = new Date().getTime()
console.log("execution took: "+(end-start)+" ms.")


function getValidBooks(books) {
    return booksWithUniqueIds(validatePublicationYear(books))
}

function validatePublicationYear(books){
    return books.filter(book => book.publicationYear > 0 && Number.isInteger(book.publicationYear));
}

function booksWithUniqueIds(books) {

    function sortBooksById(bks) {
        return bks.sort((a, b) => a.id - b.id);
    }

    function filterBooksWithUniqueId(books){
        return books.reduce((acc, current) => {
            // Check if the current book's id is different from the last added book's id
            if (acc.length === 0 || acc[acc.length - 1].id !== current.id) {
              acc.push(current); // Add current book to the accumulator if it's unique
            }
            return acc; // Return the accumulator for the next iteration
          }, []);
    }

    return filterBooksWithUniqueId(sortBooksById(books))
}