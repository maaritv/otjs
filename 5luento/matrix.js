
//Opettele tekemään tämä.
//matriisin jäsenten läpikäynti yksinkertaisimmillaan.

const matrix = [
   ["a", "b", "c"],
   ["d", "e", "f"],
   ["g", "f", "i"],
   ["j", "k", "l"]
];

function printMyMatrix(myMatrix, numberedItems=false) {
   //console.log("Printing my matrix "+myMatrix);
   let i=0;
   for (let h = 0; h < myMatrix.length; h++) {
      let row = myMatrix[h];
      for (let w = 0; w < row.length; w++) {
         let column=row[w];
         if (numberedItems){
            process.stdout.write(`(${i}) ${column} \t`);
         }
         else {
            process.stdout.write(`${column} \t`);
         }
         i++;
      }
      console.log("\n");
   }
}

//printMyMatrix(matrix, true)


module.exports =  {printMyMatrix}


