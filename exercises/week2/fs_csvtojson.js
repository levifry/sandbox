var fs = require('fs');
var path = require('path');
const workingDir = path.resolve(process.cwd(), "exercises/week2");

function myFunction(inputFileName, outputFileName){

    // Expected Output: [{"First Name":"Mike","Last Name":"Smith"},{"First Name":"Jane","Last Name":"Doe"}]
    let JSONArray = [];
    let JSONString = '';

    // Reads an input file and returns the contents as an array of tableHeaders and an array of all tableRows
    let fileContents = fs.readFileSync(path.join(workingDir, inputFileName)).toString();
    let tableHeaders = fileContents.split('\n')[0].split(',');
    let tableRows = fileContents.split('\n');

    // Remove headers from tableRows
    tableRows.shift();

    // Generate an array of arrays containing each row of data
    for (let item in tableRows) {
        tableRows[item] = (tableRows[item]).split(',');
    }

    // Grab a row of data
    for (let row of tableRows) {
        
        // Create an object to push the key:value pairs for this row into
        let rowObject = {};

        // For each header item (key) in the row, generate a key:value pair and update the return object
        for (let key in tableHeaders) {
            rowObject = {
                ...rowObject,
                [tableHeaders[key]]: row[key]
            };
        }

        // Push the rowObject into the JSONArray
        JSONArray.push(rowObject);

    }

    // Convert the JSONArray to a string and store it in JSONString
    JSONString = JSON.stringify(JSONArray);
  
    // Writes the contents of the JSONAString to a new file
    fs.writeFileSync(path.join(workingDir, outputFileName), JSONString);

    // Deletes input file
    // fs.unlinkSync(inputFileName);
  
}

myFunction('input.csv', 'output.json');