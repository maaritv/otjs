
function validateNumber(str) {
  if (isNaN(parseFloat(str)))
    throw (new TypeError("This is not a number!"))
}

module.exports = validateNumber;