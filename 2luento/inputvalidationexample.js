const readline = require('readline-sync')

calculateArea()

function calculateRectangleArea(width, height){
    //Esiehtotarkistus: negatiivinen pinta-ala ei ole oikea vastaus.
    //Esiehtotarkistus on ensimmäinen toiminto funktiossa ja 
    //se tarkistaa, että parametreja voidaan käyttää että 
    //parametrit ovat käyttötarkoitukseen sopivat.
   if ((width*height)<0){
    throw new ValueError("Pinta-ala ei voi olla negatiivinen!")
   }
   return (width*height);
}

function calculateArea() {
    
    const widthInput = readline.question("Syötä leveys? ");
    const lengthInput = readline.question("Syötä pituus? ");
    //Vinkki: voit validoida syötteen suoraan readline-kirjastolla, kun 
    //luet sen funktiolla questionFloat. Silloin et tarvitse 
    //validointia tässä. Esiehtotarkastus tarvitaan silti.
    //https://npmdoc.github.io/node-npmdoc-readline-sync/build/apidoc.html

    try {
        //Validointi pitää suorittaa, ennen kuin varsinaista funktiota
        //calculateArea -kutsutaan.
        const width = parseFloat(widthInput);
        const length = parseFloat(lengthInput);
        //Validointi: Jos leveyttä ja pituutta ei voida muuttaa numeroiksi, pitää antaa 
        //poikkeus, joka päättää try-lohkon suorituksen. 
        //JavaScriptin tyyppimuunnos parseFloat ei anna poikkeusta, jos 
        //muunnos ei onnistu. vrt. Python
        if (isNaN(width) || isNaN(length)) {
            throw new Error("Syötettä ei voitu muuntaa numeroksi");
        }

        const result = calculateRectangleArea(width, length);
        console.log(`Suorakulmion pinta-ala on: ${result}`);
    } catch (error) {
        console.log(`Pinta-alaa ei voitu laskea: ${error.message}`);
    }
}
