


function showBooks(books) {
  books.forEach(book => {
    console.log(`Name:\t${book.title}\nAuthor:\t${book.author}\n\n`)    
  });
}

function showError(errorMsg) {
  console.log(`VIRHE: ${errorMsg}`)
}

/** 
  getBooks on korkean asteen yhtälö, koska se 
  saa kaksi takaisinkutsufunktiota parametrikseen.
*/

function getBooks(succeeded, failed) {
  const url = `https://<lisää osoite luentomateriaalista>`;
  
  fetch(url, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => {
      //console.log(JSON.stringify(json));
      succeeded(json)
    })
    .catch(error => {
      failed(error)
    });
}

getBooks(showBooks, showError);