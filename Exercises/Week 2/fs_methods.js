// const _ = require('lodash');
// import _ from 'lodash';

var fs = require('fs');

fs.open('mynewfile1.txt', 'w', function (err, file) {
if (err) throw err;
    console.log('Opened new file in write mode!');
});
  
fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Overwrote file!');
});

fs.appendFile('mynewfile1.txt', '\nThis is my text.', function (err) {
    if (err) throw err;
    console.log('Appended text!');
});

fs.readFile('mynewfile1.txt', 'UTF-8', function(err, data) {
    console.log(data);
    console.log('data logged!');
});

fs.unlinkSync('mynewfile1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

fs.rename('mynewfile1.txt', 'mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });