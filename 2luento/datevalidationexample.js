const readline = require('readline-sync')


//testingDateValidation();
try {
    validateDateString("999-15-17")
    console.log("Oli ookoo")
}
catch (e){
    console.log("Ei ollut ookooo")
}
console.log("olisin laskenut oikein, jos olisit antanut validin päivämäärän")

/* Voit luoda päivämääräobjektin onnistuneesti, jos päivämäärämerkkijono 
   on oikeassa muodossa. Se ei kuitenkaan vielä tarkoita, että päivämäärä 
   on järkevä sovelluksen näkökulmasta. Siksi se tarvitsee myös esiehtotarkastuksen,
   jossa varmistetaan, että se on sovelluksen näkökulmasta järkevä. 
*/

function validateDateString(myDateStr){
    if (myDateStr && !typeof(myDateStr==="str")){
        throw (new TypeError("Date must be given as a string!"));
    }
    const year = new Date(myDateStr).getFullYear();
    //Huomaa! year===Nan ei toimi... Validissa pvm:ssä vuosi ei ole NaN!!!
    if (isNaN(year)){
        throw (new Error(`Date string ${myDateStr} is in invalid format!`));
    }
    return true;
}



function testingDateValidation() {

    //dates

    const dateArray = ["9000-13-10","0-02-60", "0-2-1", "0000-05-01","2024-08-15", "2024-08-15", "-3000-11-10", "2024-02-29", "5098-12-13", "not-a-date"]

    for (let i=0; i<dateArray.length; i++){
        const dateString=dateArray[i];
        try {
            //Validointifunktio antaa poikkeuksen, jos ei validimerkkijono. 
            //Laitetaan se try-lohkon sisään.
            const validationResult = validateDateString(dateString);
            console.log(`Merkkijono ${dateString} on validi päivämäärä ${validationResult}`);
            try {
                checkAge(dateString)
            }
            catch(e){
                console.log(`Henkilö on alle 18 vuotias! ${dateString}`)
            }
            console.log("---------------\n")
        }
        catch (e){
            //Käsitellään poikkeus, tässä riittää, että kerrotaan käyttäjälle asiasta.
            console.log(`validointivirhe ${e.message}`)
        }
    }

}
//Esiehtotarkistus tilanteeseen, jossa päivämäärän pitää olla
//enemmän kuin 18 vuotta sitten.
function checkAge(birthDate) {
    let currentDateObj = new Date();
    let eighteenDateObj = new Date();
    eighteenDateObj.setFullYear(currentDateObj.getFullYear() - 18);

    let birthDateObj = new Date(birthDate);
    if (birthDateObj > eighteenDateObj) {
        //console.log("DEBUG: " + birthDateObj + "/" + eighteenDateObj)
        throw new Error(`Ikä alle 18!`);
    }
    console.log(`${birthDate}  on yli 18!`)
}

function validateName(name) {
    if (typeof name !== "string" || name.trim() === "")
        throw (new TypeError("Anna merkkijono!"))
}

/**
 * Syötteet validoidaan heti, kun ne on luettu, ennen kuin niitä
 * käytetään mihinkään.
 */
/*
try {
    const firstName = readline.question("Syötä etunimi? ");
    validateName(firstName)
    const lastName = readline.question("Syötä sukunimi? ");
    validateName(lastName)
    const birthDate = readline.question("Syötä päivämäärä? (VVVV-KK-VV)");
    validateDateString(birthDate)
    checkAge(birthDate);

    const customer = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate
    }
    saveCustomerToDatabase(customer)
} catch (error) {
    console.error(error.message);
}
*/

function saveCustomerToDatabase(customer) {
    //ei vielä toteutusta
}

