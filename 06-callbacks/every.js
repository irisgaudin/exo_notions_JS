//checks if predicate returns truthy for all elements of collection
//iteration is stopped once predicate returns falsey
//returns true if all elements pass the predicate check, else false

function every(coll, func) {
  if (coll !== null && func !== undefined) {
    for (i = 0; i < coll.length; i++) {
      if (func(coll[i]) === false) {
        return false;
      }
    }
  } else if (coll === null || func !== undefined) {
    return false;
  }
  return true;
}

const isLargerThanTen = (element) => {
  if (element >= 10) {
    return true;
  } else {
    return false;
  }
};

console.log(every([10, 20, 30], isLargerThanTen)); // Doit afficher `true`
console.log(every([10, 8, 20], isLargerThanTen)); // Doit afficher `false`
console.log(every([4, 13, 5])); // Doit afficher `false`
console.log(every(null, isLargerThanTen)); // Doit afficher `false`
