
function validateNumber(str) {
  if (isNaN(parseFloat(str)))
    throw (new TypeError("This is not a number!"));
}

function convertStringToNumber(str) {
  if (typeof str === "number") {
    //It is not a string but number, nop (no operation) is needed.
    return str;
  }
  if (typeof str === "string") {
    const parsedFloat = parseFloat(str);
    if (isNaN(parsedFloat)) {
      throw new Error(str + " can not be parsed to number!");
    }
    return parsedFloat;
  }
  throw new Error("Parameter was not a string or a number");
}

module.exports = { validateNumber, convertStringToNumber };