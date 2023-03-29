// iterates over elements of collection ,
// returning an array of all elements predicate returns truthy for
// the predicate is invoked with one argument: value
// arguments :
// 1. the collection to iterate over
// 2. the function invoked per iteration
// returns the new filtered array

function filter(arr, func) {
  if (arr !== null && func !== undefined) {
    for (i = 0; i < arr.length; i++) {
      return arr.filter(isBigEnough);
    }
  }
  return "[]";
}

function isBigEnough(value) {
  if (value >= 10) {
    return true;
  }
  return false;
}

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // Doit afficher `[12, 130, 44]`
console.log(filter([1, 6, 173, 151])); // Doit afficher `[]`
console.log(filter(null, isBigEnough)); // Doit afficher `[]`
