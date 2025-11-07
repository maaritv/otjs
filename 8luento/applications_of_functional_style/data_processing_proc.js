
/**
 * Vain tieodoksi, ei tarvitse opetella tekemään.
 */

const data = require('../books.json')

//console.log(data)

const start = new Date().getTime()
const validBooks = getValidBooks(data)
console.log(validBooks)
const end = new Date().getTime()
console.log("execution took: "+(end-start)+" ms.")



function getValidBooks(books) {
    const sortedBooks = sortBooksById(books);
    let previousBook = null;
    const validBooks = []

    for (let i = 0; i < sortedBooks.length; i++) {
        const book = sortedBooks[i]
        if (previousBook && previousBook.id !== book.id &&  book.publicationYear > 0 && Number.isInteger(book.publicationYear)) {
            validBooks.push(book)
        }
        previousBook = { ...book }
    }

    return validBooks;
}

function sortBooksById(bks) {
    const n = bks.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element
        let minIndex = i;

        // Iterate through the unsorted elements
        for (let j = i + 1; j < n; j++) {
            // Update minIndex if the element at j is smaller than the current minimum
            if (bks[j].id < bks[minIndex].id) {
                minIndex = j;
            }
        }

        // If the minimum is not the position of the current element, swap them
        if (minIndex !== i) {
            let temp = bks[i];
            bks[i] = bks[minIndex];
            bks[minIndex] = temp;
        }
    }
    //console.log(bks)
    return bks;
}

