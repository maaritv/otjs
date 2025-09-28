const readline = require('readline-sync')
const fs = require('fs')

calculateArea()

/** Luetaan data tiedostosta. 
 * Huomaa, että hakemistopolku voi tässä viitata
 * mihin tahansa tiedostoon, jonka omistaa 
 * käyttäjä, jona koodia AJAT. Siksi annettu 
 * hakemisto pitää myös esiehdossa tarkistaa, 
 * eikä hakemistopolkua kannata kysyä käyttäjältä, 
 * jos se ei ole ihan pakollista.
 */

function readFromFile(filePath) {
    if (filePath.startsWith("/")) {
        throw new Error("Only relative paths are allowed.")
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8'); // luetaan tiedosto synkronisesti
        return data.trim(); // poistetaan turhat rivinvaihdot ja välilyönnit
    } catch (err) {
        throw new Error(`Error in reading file ${filePath}`);
    }
}

function calculateRectangleArea(width, height) {
    //Esiehtotarkistus: negatiivinen pinta-ala ei ole oikea vastaus.
    if ((width * height) < 0) {
        throw new ValueError("Area can not be negative!")
    }
    return (width * height);
}

function calculateArea() {

    //Luetaan syöte tällä kertaa tiedostosta.
    //Hakemistot on määritelty valmiiksi eikä
    //niitä kysytä käyttäjältä. ./ viittaa 
    //siihen hakemistoon, jossa koodi AJETAAN, 
    //ei siis siihen hakemistoon, jossa koodi 
    //sijaitsee.

    const directory = "./data"

    try {
        const widthInput = readFromFile(`${directory}/width.txt`);
        const lengthInput = readFromFile(`${directory}/height.txt`);
        //Data luetaan nyt tiedostosta omassa funktiossaan. 
        //Sekin pitää validoida ennen käyttöä.
        //Esiehtotarkastus tarvitaan edelleen myös.
        const width = parseFloat(widthInput);
        const length = parseFloat(lengthInput);
        //Validointi: Jos leveyttä ja pituutta ei voida muuttaa numeroiksi, pitää antaa 
        //poikkeus, joka päättää try-lohkon suorituksen. 
        //JavaScriptin tyyppimuunnos parseFloat ei anna poikkeusta, jos 
        //muunnos ei onnistu. vrt. Python
        if (isNaN(width) || isNaN(length)) {
            throw new Error("Input could not be parsed to float.");
        }

        const result = calculateRectangleArea(width, length);
        console.log(`Rectangle area is : ${result}`);
    } catch (error) {
        console.log(`Area could not be calculated: ${error.message}`);
    }
}
