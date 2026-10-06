


const fslibrary = require('node:fs');

/**
 * Lukee tiedoston sisällön ja palauttaa sen. Jos tiedoston lukeminen epäonnistuu, annetaan poikkeus.
 * @param {polku tiedostoon} path 
 * @returns content of the file in string
 */


function read_file(path) {
  try {
    const data = fslibrary.readFileSync(path, 'utf8');
    //console.log(data);
    return data;
  } catch (err) {
    throw new Error(`Reading file failed because ${err.message}`)
  }
}

try {
  const filePath = './myfile.txt';
  const content = read_file(filePath);
  console.log(content);
} catch (err) {
  console.error(err);
}





