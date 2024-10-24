/**Anonyymit funktioMÄÄRITTELYT, joita kukaan ei kutsu.
  ne pitää tallettaa muuttujaan, muuten niitä ei pysty 
  myöhemmin kutsumaan **/

  
  /**ANONYMOUS FUNCTION saved to variable for future calling*/
  let ciaoFunctionVariable = function() {
    console.log("Ciao, olen vain määrittely, ja jonkun pitää kutsua!");
  };
  
  //Anonyymi ns. nuolifunktio.
  let helloFunction = () => {
    console.log("Hello when you call me");
  };

  let setTimeOutWithMe = () => { 
    setTimeout(function() {
    console.log("Hei! Kestää vähän, jos joku kutsuu :-)");
  }, 3000)
 };

/** SELF EXECUTING FUNCTION */
setTimeout(function() {
    console.log("Moi! Kesti vähän :-)");
  }, 3000);
  
  /** SELF EXECUTING ANONYMOUS FUNCTION */
  (function() {
    console.log("Ciao now!");
  })();
  
  //sELF EXECUTING ANONYMOUS ARROW FUNCTION
  (() => {
    console.log("Hello now");
  })();

  /**
   * Muuttujaan talletettujen funktioiden kutsut ovat tässä.
   */

  ciaoFunctionVariable()
  helloFunction()
  setTimeOutWithMe()