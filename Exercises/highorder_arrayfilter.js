const arr = [1, 2, 3, 4];

const odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]



var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];


var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});

// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
// const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels);
console.log(empire);