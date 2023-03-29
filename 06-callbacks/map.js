// creates an array of valyes by running each element in collection through iteratee
//the iteratee is invoked with one argument : value
//return the new mapped array

function map(tab, func) {
  if (func !== undefined) {
    return tab.map(callback);
  }
}

function callback(value) {
  return value * 2;
}

console.log(map([1, 2, 3], callback)); // Doit afficher `[2, 4, 6]`
console.log(map([4, 1, 3])); // Doit déclencher une erreur `TypeError : ... is not a function`

