// in : tab[0,1,2]
// x && z === int --> if not ERROR
// y === (+ || - || * || / || %) // TAKE OFF THE QUOTES
// out : result in number --> faudra .JOIN() nop? ou un math qq chose
// if nombre de parameter != 3 --> ERROR

function doop(tab) {
  let result = [];
  //errors:
  for (i = 0; i < tab.length; i++) {
    if (tab.length != 3) {
      return "ERROR";
    } else if (
      Number.isInteger(tab[0]) === false ||
      Number.isInteger(tab[2]) === false
    ) {
      return "Numbers must be integers";
    } else {
      //no error:
      if (tab[1] === "+") {
        return tab[0] + tab[2];
      } else if (tab[1] === "-") {
        return tab[0] - tab[2];
      } else if (tab[1] === "*") {
        return tab[0] * tab[2];
      }
    }
  }
  return result.push(tab);
}

console.log(doop([5, "+", 4])); // Affichera : 9
console.log(doop([9, "*", 2])); // Affichera : 18
console.log(doop([11, "-", 4])); // Affichera : 7
console.log(doop([-1, "*", 4])); // Affichera : -4
console.log(doop([10.1, "-", 2])); // Affichera : Numbers must be integers
console.log(doop([8])); // Affichera : ERROR
