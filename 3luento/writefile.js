const fs = require('fs');
const path = require('path');

/**
 * Funktion tehtävä (function) on kirjoittaa 
 * annettu data annetun nimiseksi tiedostoksi 
 * annettuun hakemistoon.
 * HUOM: Hakemiston täytyy olla olemassa!
 * 
 * @param {string} dir - Hakemiston polku
 * @param {string} filename - Tiedoston nimi
 * @param {string} data - Tallennettava data
 */
function writeDataToFile(dir, filename, data) {
    try {
        // Yhdistetään tiedostopolku
        const filePath = path.join(dir, filename);

        // Kirjoitetaan data tiedostoon. 
        //antaa poikkeuksen, jos hakemistoa ei löydy
        fs.writeFileSync(filePath, data, 'utf8');
        //ei tulosteta tässä käyttäjälle mitään!!
    } catch (err) {
        throw new Error(`Writing file failed because ${err.message}`)
    }
}

//ajetaan sovellus. node writefile.js
//varmista, että hakemistossa (avaa terminaali) 
//on oikean niminen hakemisto. Jos ei ole 
//tee se komennolla mkdir data tai käytä
//esim. windowsin File Manageria.

const filePath='./fileet';
const fileName='myfile.txt';
const data="Tämän haluan kirjoittaa tiedostoon!";

try {
    writeDataToFile(filePath, fileName, data);
    //Päätasolla, joka on vastuussa käyttäjän kanssa kommunikoinnista, tulostetaan 
    //viesti käyttäjälle.
    console.log(`✅ Data tallennettu tiedostoon: ${filePath}`);
} catch (err) {
    console.log("❌ Virhe tiedostoa kirjoitettaessa!");
    console.error("Varsinainen virhe voidaan kirjoittaa esim. palvelimen logiin.", err.message);
}
