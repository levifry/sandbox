// Credits for this solution: @zachhaines

var longestRun = string => {
    let winningStreak = 0;
    let winnerIndex = [0, 0];
    // Edge Case for empty string
    if(string === '') {
      return;
    }
    // Starting Character
    for (let i = 0; i < string.length; i++) {
      // console.log('\ni:', i);
      let streak = 0;
      let j = 0;
      // Succesive Characters
      while (string[i] === string[i+j+1]) {
        j++
        streak +=1;
      }
      if (winningStreak < streak) {
        winningStreak = streak;
        winnerIndex = [i, i + streak];
      } 
      i += streak;
    }
    return winnerIndex;
  };