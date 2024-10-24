// Add a method to sort books by id
Array.prototype.sortBooksById = function() {
    return this.sort((a, b) => a.id - b.id);
};

// Add a method to filter books with unique ids
Array.prototype.filterBooksWithUniqueId = function() {
    return this.reduce((acc, current) => {
        // Check if the current book's id is different from the last added book's id
        if (acc.length === 0 || acc[acc.length - 1].id !== current.id) {
          acc.push(current); // Add current book to the accumulator if it's unique
        }
        return acc; // Return the accumulator for the next iteration
      }, []);
};

Array.prototype.validatePublicationYear = function (){
    return this.filter(book => book.publicationYear > 0 && Number.isInteger(book.publicationYear));
}



const data = require("./books.json")

const result = data.validatePublicationYear().sortBooksById().filterBooksWithUniqueId();
console.log(result);
