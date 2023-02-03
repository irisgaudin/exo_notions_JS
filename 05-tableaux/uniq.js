// take off the repeated (dupplicate) elements from an array

function uniq(arr) {
  let dupplicateFree = [];
  for (i = 0; i < arr.length; i++) {
    if (!dupplicateFree.includes(arr[i])) {
      // if dupplicateFree DOES NOT(!) already include arr[i] then push it dans duplicateFree
      dupplicateFree.push(arr[i]);
    }
  }
  return dupplicateFree;
}

console.log(uniq([2, 3, 2, 2, 1])); // [2,3,1]
console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
