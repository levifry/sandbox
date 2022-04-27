var longestRun = function(string) {

    let longestSeries = [0,0];

    if (string.length <= 0) {
        console.log('empty string');
        return;
    }

    let seriesLength = 0;
    let currentRecord = 0;
    let startChar;
    let startCharIndex;
    let updateStartChar = true;

    for (let i = 0; i < string.length; i++) {

        if (string.charAt(i) === string.charAt(i + 1)) {

            seriesLength++;

            if (updateStartChar) {
                startChar = string.charAt(i);
                startCharIndex = i;
                updateStartChar = false;
            }

        } else {
            
            if (currentRecord < seriesLength) {
                currentRecord = seriesLength;
                longestSeries = [startCharIndex, i];
            }

            seriesLength = 0;
            updateStartChar = true;

        }

    }
    
    console.log(longestSeries);
    return longestSeries;
};