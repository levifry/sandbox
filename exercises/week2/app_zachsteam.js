//Arguments passed in to a node command are part of the process.argv array
//The 0 index in the array is where your Node installation is stored
//The 1 index in the array is where the file you ran Node on is stored
//The 2 index in the array is the first argument you pass to the Node command after the file name
//See documentation here - https://nodejs.org/docs/latest/api/process.html#process_process_argv

/*
O-ICE:
OUPUTS:
-n-aarray of arraysomatching pokemon type converted to a string
  ew text doucuments called "output.txt
  - a new sting in 'output.txt'
  - Example formatting:<
fletchinder ()pokemon name
    razor-wind, swords-dance, fly, tackle, .... (pokemon moves)
  -sSTRETCH GOAL: Given a pokemon name, createspokemonnName.txt withits stats ()see therREADME.MD

INPUTS:
  -receive a stringo[
  - string is a kemon type
  - example type: 'fire', 'plant', 'water','electric'
  -pokeapi.coor(awJSON file)
  - STRETCH GOAL: Pokemon name input

CONSTRAINTS:
  - must use "promise.all"
  - must use "fs.writeFile" (async version)

EDGE CASES:
  - Mispelled Type: ncorrect spellingofpokemon type, return:  the string: N"o matching type found for f${input}""
  - No Moves: I no movies are found,rreturn the exact string: "There were no moves found for this pokemon"

*/


//Phase I - Receive Input and Fetch
// require fs modules
import fetch from 'node-fetch';
import fs from 'fs';
let outputString = "";
// user inputs a string-- > create a variable
let pokeType = process.argv[2];
let data = [];

// fetch our pokemon from api()URL: https://pokeapi.co/ .json
// fetch links
// https://pokeapi.co/api/v2/type/ //20 items total with all pokemon types
//https://pokeapi.co/api/v2/type/grass //resource for type




let promisesArray = ['Pikachu\nElectric shock, lightning rod, tail whip', 'Chortle\nChortle move 1, move 2'];

fetch(`https://pokeapi.co/api/v2/type/${pokeType}`)
  .then(response => response.json())
  .then(data => data.pokemon.map(element => element.pokemon.name))
  .then(promisesArray.push(/*push a promise to return the name of the pokemon and his moves*/)
    .then(/*take URLs received from first fetch and fetch the moves for each pokemon*/)
    .then(/*execute logic to take results and convert to a string, this will resolve in the promisesArray*/))
  .then(data => console.log(data))
  .then(Promise.all(promisesArray)
    .then(/*put strings together and print to output.txt*/));



  // .then(urls => urls.map(url => {
  // .then(response => response.json())))
  // .then(data => data.pokemon.map(element => element.pokemon.url)

  //   .then(promises => Promise.all(promises).then());
// .then(data => console.log(data.pokemon[i].pokemon.url));



/* BRAINSTORM
- now we have an array of urls to each pokemon that are of requested type
- now, we must fetch the array of pokemon urls
- then we must access the key 'moves' within each pokemon url
- Should we use map again? We think yes!
*/




// code from https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
// var promises = urls.map(url => fetch(url));
// var texts = [];
// Promise.all(promises)
//   .then(results => {
//     results.forEach(result => result.text()).then(t => texts.push(t))
//   })
// --------------------------------

//console.log(typePromise);
console.log('\nBREAK - BREAK - BREAK\n')
console.log('DATA:', data);