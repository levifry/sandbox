var pilots = [
  {
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

// var rebels = pilots.filter(function (pilot) {
//   return pilot.faction === "Rebels";
// });
// var empire = pilots.filter(function (pilot) {
//   return pilot.faction === "Empire";
// });

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels);
console.log(empire);

const pilotsInFaction = faction => pilots.filter(pilot => pilot.faction === faction);
console.log(pilotsInFaction('Rebels'));





// Another arr.filter example:
// const arr = [1, 2, 3, 4];
// const odds = arr.filter(function(element) {
//   return element % 2 !== 0;
// });
// console.log(odds); // [1, 3]