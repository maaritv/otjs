

function validateNumber(str) {
    const nbr = parseFloat(str)
    if (isNaN(nbr)){
      throw (new TypeError("Merkkijonon pitää olla numeroarvo."))
    }
  }

  module.exports = {validateNumber}