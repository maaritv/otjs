const readline = require('readline-sync')

calculateArea()

function calculateRectangleArea(width, height){
   if ((width*height)<0){
    throw new Error("Pinta-ala ei voi olla negatiivinen!")
   }
   return (width*height);
}

function calculateArea() {
    
    const widthInput = readline.question("Syötä leveys? ");
    const lengthInput = readline.question("Syötä pituus? ");

    try {
        const width = parseFloat(widthInput);
        const length = parseFloat(lengthInput);
        //Jos leveyttä ja pituutta ei voida muuttaa numeroiksi, pitää antaa 
        //poikkeus, joka päättää try-lohkon suorituksen. 
        //JavaScriptin tyyppimuunnos parseFloat ei anna poikkeusta, jos 
        //muunnos ei onnistu. vrt. Python
        if (isNaN(width) || isNaN(length)) {
            throw new Error("Syötettä ei voitu muuntaa numeroksi");
        }

        const result = calculateRectangleArea(width, length);
        console.log(`Pinta-ala on: ${result}`);
    } catch (error) {
        console.log(`Pinta-alaa ei voitu laskea: ${error.message}`);
    }
}
