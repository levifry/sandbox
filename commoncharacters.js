// Credits for this solution to @zachhaines

var commonCharacters = function (...args) {

    for (let i = 0; i < args.length - 1; i++) {
  
      let matches = [];
      let string1 = args[0];
      
      for (let j in string1) {
  
        if (string1[j] === " ") {
          continue;
        }
  
        let string2 = args[i+1];
        
        for (let k in string2) {
  
          if (string1[j] === string2[k] && !matches.includes(string2[k])) {
            matches.push(string2[k]);
          }
        }
      }
  
      args[0] = matches.join('');
  
    }
  
    if (args[0] === "") {
      return "";
    }
    
    return args[0];
}