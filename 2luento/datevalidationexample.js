const readline = require('readline-sync')

function validateDateString(dateString) {
    // Regular expression to match the YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    // Test the date string against the regex
    if (!regex.test(dateString)) {
        throw new Error(`Invalid date format: ${dateString} it should be YYYY-MM-DD`);
    }

    // Parse the date components to ensure it's a valid date
    const [year, month, day] = dateString.split('-').map(Number);

    // Create a Date object from the components
    const date = new Date(year, month - 1, day);

    // Check if the date is valid (month - 1 because months are 0-indexed in JavaScript)
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        throw new Error(`Invalid date: ${dateString} in right format.`);
    }
    return true;
}

function testingDateValidation() {

    // Example usage:
    const dateString1 = "2024-08-15";
    const dateString2 = "2024-13-01";
    const dateString3 = "2024-02-29"; // Leap year
    const dateString4 = "not-a-date";

    try {
        console.log(validateDateString(dateString1));
    }
    catch (e) {
        console.log("Not valid! " + e.message)
    }

    try {
        console.log(validateDateString(dateString2));
    }
    catch (e) {
        console.log("Not valid! " + e.message)
    }

    try {
        console.log(validateDateString(dateString3));
    }
    catch (e) {
        console.log("Not valid! " + e.message)
    }

    try {
        console.log(validateDateString(dateString4));
    }
    catch (e) {
        console.log("Not valid! " + e.message)
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
        console.log("DEBUG: " + birthDateObj + "/" + eighteenDateObj)
        throw new Error(`Age is under 18!`);
    }
    console.log(`${birthDate}  is ok!`)
}

function validateName(name) {
    if (typeof name !== "string" || name.trim() === "")
        throw (new TypeError("Anna merkkijono!"))
}

/**
 * Syötteet validoidaan heti, kun ne on luettu, ennen kuin niitä
 * käytetään mihinkään.
 */

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


function saveCustomerToDatabase(customer) {
    //ei vielä toteutusta
}

