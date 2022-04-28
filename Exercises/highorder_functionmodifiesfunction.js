function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(2, 3);
// → calling with [2, 3]
// → called with [2, 3] , returned 2

noisy(Math.max)(2, 3);
// → calling with [2, 3]
// → called with [2, 3] , returned 3