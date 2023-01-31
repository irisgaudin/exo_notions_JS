//A REFAIRE :
//indexOf()= pour faire une recherche de correspondance à un index donné. = -1 when cannot find

function secondGreatLow(values) {
  // check for errors, -> make sure we only have numbers :
  for (i = 0; i < values.length; i++) {
    if (isNaN(values[i]) === true) {
      // if an index of values is = NaN, then
      return "error";
    }
  }
  let uniqueValues = [];

  for (i = 0; i < values.length; i++) {
    if (uniqueValues.indexOf(values[i] === -1)) {
      // if the value[i] n'existe pas dans uniqueValues then you push it in
      uniqueValues.push(values[i]);
    }
  }
  // if there is only one element in uniquevalues then put the same twice:
  if (uniqueValues.length === 1) {
    return [values[0], values[0]];
  }
  //sort the new values /!\ NUMBER
  uniqueValues.sort(function (a, b) {
    return a - b;
  }); 
  // return an array composed of only 2 elements: the second higher and the second lower
  return [uniqueValues[uniqueValues.length - 2], uniqueValues[1]];
}

console.log(secondGreatLow([1, 42, 42, 180])); // Affichera [42, 42]
console.log(secondGreatLow([4, 90])); // Affichera [90, 4]
console.log(secondGreatLow([7, 7, 12, 98, 106])); // Affichera [12, 98]
console.log(secondGreatLow([8])); // Affichera [8, 8]
console.log(secondGreatLow([-12, -12, -12])); // Affichera [-12, -12]
console.log(secondGreatLow(["ABC", 9, 4, 10])); //  Affichera : ERROR
