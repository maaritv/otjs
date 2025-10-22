
//Opettele tekemään tämä.
//matriisin jäsenten läpikäynti yksinkertaisimmillaan.

const matrix = [
   ["a", "b", "c"],
   ["d", "e", "f"],
   ["g", "f", "i"],
   ["j", "k", "l"]
];

function printMyMatrix(myMatrix) {
   //console.log("Printing my matrix "+myMatrix);
   for (let h = 0; h < myMatrix.length; h++) {
      let row = myMatrix[h];
      for (let w = 0; w < row.length; w++) {
         let column=row[w];
         process.stdout.write(`${column} \t`);
      }
      console.log("\n");
   }
}

//printMyMatrix(matrix)


module.exports =  {printMyMatrix}


