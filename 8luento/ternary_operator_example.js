const input = require("readline-sync")

function evenFunction() {
    console.log("The number is even.");
}

function oddFunction() {
    console.log("The number is odd.");
}

//readline huolehtii syötteen validoinnista!
//se antaa poikkeuksen, jos syötetty arvo 
//ei ole kokonaisluku, siksi try catch

const numberGiven = input.questionInt("Anna luku: ")
numberGiven % 2 === 0 ? evenFunction() : oddFunction();

//sama if-else:iä hyödyntäen.
if (numberGiven % 2 === 0) {
    evenFunction();
} else {
    oddFunction();
}



