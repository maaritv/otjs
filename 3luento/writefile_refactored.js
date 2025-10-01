const fs = require('node:fs');  //Tiedostoon kirjoitus synkronisesti. käytetään pienille tiedostoille.
const path = require('path');  //Hakemistojen yhdistäminen
const readline = require('readline-sync'); //syötteen lukeminen

function validateFilePath(filePath) {
    if (filePath.length===0) {
        throw new Error('Directory name must not be empty!');
    }
}

function checkFilePath(filePath) {
    if (filePath.startsWith('/')) {
        throw new Error('Writing to the root is not allowed in this app!');
    }
}

function validateData(data) {
    if (data.length==0) {
        throw new Error('Data must not be empty.');
    }
    if (data.length > 20) {
        throw new Error('Data should be less than 20 characters long.');
    }
}

function writeDataToFile(dir, filename, data) {
    try {
        checkFilePath(dir)
        // Yhdistetään tiedostopolku
        const filePath = path.join(dir, filename);

        // Kirjoitetaan data tiedostoon. 
        //antaa poikkeuksen, jos hakemistoa ei löydy
        fs.writeFileSync(filePath, data, 'utf8');
    } catch (err) {
        throw new Error(`Writing file failed because ${err.message}`)
    }
}

function getCurrentWorkingDirectory() {
    const path = process.cwd();
    return path;
}

function main() {
    try {
        //Käyttöliittymätaso
        const workingDir = getCurrentWorkingDirectory();
        console.log(`You are now at: ${workingDir}`)
        const filePath = readline.question(`Enter the file path: `);
        validateFilePath(filePath)

        let data = readline.question('Enter the data to write to the file (max 10 characters): ');
        validateData(data)
        //Tässä sovelluksessa nimeä ei kysytä käyttäjältä, voitaisi kyllä. ei tarvitse validoida.
        const appFileName = 'appfile.txt';
        //Kutsutaan hyötyfunktiota tai palvelufunktiota.
        writeDataToFile(filePath, appFileName, data)
        console.log("No exceptions got, good, writing file succeeded.")
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Run the main function
main();
