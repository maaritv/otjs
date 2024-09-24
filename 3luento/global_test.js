
function printGlobals(){
  //names-muuuttuja ei näy tälle funktiolle, koska se on 
  //määritelty let-määreellä eikä tämä funktio 
  //ole kys. koodilohkon tasolla tai alla vaan rinnalla.
  //console.log(names)
  console.log("Printing globals from other code module! "+moreNames)
}

module.exports = printGlobals