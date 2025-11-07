/**
 * Vain tieodoksi, ei tarvitse opetella tekemään.
 */

const readline = require("readline-sync")
const crypto = require('node:crypto');

let isAuthenticated=false;

const username = readline.question("Anna käyttäjänimi: ")
const checkIfPasswordsMatch=authenticate(username);
//console.log("Trying to, but can not, check what is the value of maxNumberOfRetrys, that is defined now inside authenticate-function: "+maxNumberOfRetrys)
while (isAuthenticated === false){
    const password = readline.question("Anna salasana: ")
    isAuthenticated = checkIfPasswordsMatch(password);
    console.log(`Is authenticated? ${isAuthenticated}`)
}


function authenticate(name){

    //Käyttäjätunnuksia ei koskaan oikeasti näin kirjoiteta osaksi ohjelmakoodia,
    //vaan ne haettaisi tässä tietokannasta! Voit testata koodia onnin salasanalla kkk
    let users = [{
        username: 'onni',
        encryptedPassword: '8bf8f07d7f742a8d6bbfb00be2b41e47e093e8ab59cdd49126ccfb85f3f9763c30aae39b3f2d804e9be2990649ca2d134b8d6198f96d121e7f147661c95f969c'
    },
    {
        username: 'anni',
        encryptedPassword: '7af10d5ced8d4553ae264b083b8e3a4959b959ffdb525bbd42d8ee5250e4512055544fb66d1ea74502ee93d886c7fb36cb0c976e5099748ee12cae8202134123'
    }]

    const user=users.find(user => user.username===name)
    if (!user){
      throw (new Error("Authentication failed."))
    }
    //passwordCheck säilyttää viittauksen tämän muuttujaan sen jälkeenkin
    //kun authenticate-funktion suoritus on päättynyt.
    //numberOfRetrys siis säilyy kahden passwordCheck-kutsun välillä.
    let numberOfRetrys = 0;
    const maxNumberOfRetrys = 3;

    function passwordCheck(password){
        if (numberOfRetrys>maxNumberOfRetrys){
            throw new Error("Tried too many times!")
        } 
        //älä määrittele suolaa osana koodia, koska se päätyy versiohallintaan luettavaksi.
        const givenPasswordHash = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512');
        
        const passwordOk = user.encryptedPassword === givenPasswordHash.toString('hex')
        console.log(numberOfRetrys+" isAuthenticated on "+isAuthenticated)
        numberOfRetrys++;
        return passwordOk
    }

    return passwordCheck

}


