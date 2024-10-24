
const books = require("./books.json")

const validBooks = books.filter(book => book.publicationYear > 0 && Number.isInteger(book.publicationYear)).sort((a, b) => a.id - b.id).reduce((acc, current) => {
    if (acc.length === 0 || acc[acc.length - 1].id !== current.id) {
       acc.push(current); 
     }
     return acc; 
   }, [])

   console.log(validBooks)
