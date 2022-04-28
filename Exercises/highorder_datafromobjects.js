var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// var officersIds = [];
// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });

// var officersIds = officers.map(function (officer) {
//   return officer.id
// });

const officersIds = officers.map(officer => officer.id);

console.log(`Officer IDs: ${officersIds}`);