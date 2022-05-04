//index.js

// const _ = require('lodash');
// import _ from 'lodash';

var fs = require('fs');

function myFunction(fileName){

    let returnString = '';

    // Reads an input file and returns the contents as a string
    let fileContents = fs.readFileSync(fileName, 'utf8');
    let linesArray = fileContents.split('\n');

    for (let fullName of linesArray) {
        let firstName = fullName.split(' ')[0].charAt(0).toUpperCase() + fullName.split(' ')[0].slice(1);
        let lastName = fullName.split(' ')[1].charAt(0).toUpperCase() + fullwebName.split(' ')[1].slice(1);
        fullName = firstName + ' ' + lastName;
        returnString = returnString + fullName + "\n";
    }
  
    // Writes the contents to a file
    fs.writeFileSync(fileName, returnString.slice(0,-1));
  
}

myFunction('input.txt');