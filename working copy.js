["a string", ["array", "or", "object"]].forEach(arg => console.log(typeof arg));

const arr = [1, 2, 3, 4];

const odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]