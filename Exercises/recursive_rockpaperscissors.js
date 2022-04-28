var rockPaperScissors = (num) => { // number here will determine stack depth (or "tree" depth)
  
  const results = [];
  const choices = ['rock', 'paper', 'scissors'];

  const recurse = (currentPlay) => {

    for (let i in choices) {

      const currentChoice = [choices[i]];
      const playThread = currentPlay.concat(currentChoice);

      if (currentPlay.length === num) { // check the bucket to see if it's full
        results.push(currentPlay);
        return;
      }
      
      recurse(playThread);
      
    }

    return;
  };

  recurse([]);

  if (results.length === 3 ** num) {
    return results;
  }

};

console.log(rockPaperScissors(3))