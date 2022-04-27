  var factorial = (number) => {
    // If the number is negative, it doesn't have a factorial. Return an
    // impossible value to indicate this.
    if (number < 0) {
      return -1;
    }
  
    // If the number is zero, its factorial is one.
    if (number === 0) {
      return 1;
    }
    
    debugger;
  
    // If the number is neither illegal nor zero, call factorial again,
    // this time passing in a smaller number. Eventually you'll reach 0,
    // causing each call to return to its caller and the recursion terminates.
    console.log(number);
    return (number * factorial(number - 1));
  }
  
  console.log(`running recursive function on 3:`);
  console.log(`final: ${factorial(3)}`);
  console.log(`running recursive function on 5:`);
  console.log(`final: ${factorial(5)}`);
  