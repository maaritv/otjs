const fs = require('node:fs');  //Tiedostoon kirjoitus synkronisesti. käytetään pienille tiedostoille.
const path = require('path');  //Hakemistojen yhdistäminen
const readline = require('readline-sync'); //syötteen lukeminen

function validateFilePath(filePath) {
    if (filePath.startsWith('/')) {
        throw new Error('Writing to the root is not allowed!');
    }
}

function validateData(data) {
    if (data.length > 10) {
        throw new Error('Data should be less than 10 characters long.');
    }
}

function writeDataToFile(dir, filename, data) {
    try {
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
        const filePath = readline.question(`Enter the file path. You are now at: ${getCurrentWorkingDirectory()} `);
        validateFilePath(filePath)

        let data = readline.question('Enter the data to write to the file (max 10 characters): ');
        validateData(data)
        //Tässä sovelluksessa nimeä ei kysytä käyttäjältä, voitaisi kyllä
        const appFileName = 'appfile.txt';
        try {
            //Kutsutaan hyötyfunktiota tai palvelufunktiota.
            writeDataToFile(filePath, appFileName, data)
            console.log("No exceptions got, good, writing file succeeded.")
        } catch (err) {
            throw new Error('Failed to open or create the file: ' + err.message);
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Run the main function
main();
