//goal on veut transformer les minuscules en maj et inversement
//faire une boucle for pour parcourir les i de la str
// les index pair = from maj to min --> .toLowerCase()
// if [i] est divisible par 2 alors [i] est pair --> (modulo 2= 0)
// les index impair = from min to maj
//return la str

function lowerUpper(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      // index pair
      result = result + str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(lowerUpper("La ville de Paris")); // Affichera : "lA vIlLe dE pArIs"

