
const matrixTools = require("./matrix.js")

const numberMatrix = [
    [100, 105, 103],
    [120, 134, 99],
    [34, 52, 67],
    [72, 33, 67]
];


//Muutetaan jäsenen matrix[3][1] arvo 60:ksi

numberMatrix[3][1] = 60;
matrixTools.printMyMatrix(numberMatrix)

//Lasketaan yhteen kunkin rivin jäsenet ja luodaan 
//tuloksista uusi numerovektori, joka palautetaan.

function createVectorWithRowSums(matrix) {
    for (let h = 0; h < matrix.length; h++) {
        const row = matrix[h];
        let rowSum = 0;
        for (let w = 0; w < row.length; w++) {
            rowSum = rowSum + row[w];
        }
        matrix[h]=rowSum;
    }
    return matrix;
}

/**
 * Tulostaa yksiulotteisen numerolistan.
 * @param {yksiulotteinen numerolista} myVector 
 */

function printMyVector(myVector){
    for (let i = 0; i < myVector.length; i++) {
      process.stdout.write(`${myVector[i]} \t`);
    }
}

const rowSumVector = createVectorWithRowSums(numberMatrix);
console.log(rowSumVector);
printMyVector(rowSumVector)
