// trier le tableau du plus petit au plus grand .sort(function (a,b){return a-b})
// extraire le plus grand nombre (le stocker dans une var?) .pop()
// additionner tous les nombres restant entre eux-->  concat (for !)
// ajoute des conditions, si la somme des chiffres = la var max
// retourne true, sinon return false

function arrayAddition(tab) {
  const orderTab = tab.sort(function (a, b) {
    return a - b;
  }); // careful pour trier des nombres...
  const max = orderTab.pop(); // stock max number
  let sum = 0;
  for (let i = 0; i < orderTab.length; i++) {
    sum += orderTab[i];
  } // ici je veux additionner tous les elements de orderTab

  if (sum === max) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
