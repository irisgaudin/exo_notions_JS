//goal : faire une fonctio qui multiplie SEULEMENT les tables de multiplication des nombres ENTIERS ET POSITIFS
// if num = negatif --> then "vous devez entrer nb positif.."
//else if num decimal --> "nombre entier
//else if ABC --> "vous devez entrer un ombre "
//else number.isInteger()--> fonction table multi
// faire une boucle for pour concat *

function tableMult(num) {
  let int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (num < 0) {
    return "Vous devez entrer un nombre positif";
  } else if (isNaN(num) === true) {
    return "Vous devez entrer un nombre";
  } else if (Number.isInteger(num) === false) {
    return "Vous devez entrer un nombre entier";
  } else if (Number.isInteger(num) === true) {
    for (let i = 0; i < int.length; i++) {
      int[i] = int[i] * num;
    }
    return int;
  }
}

console.log(tableMult(-1)); //Vous devez entrer un nombre positif
console.log(tableMult("ABC")); //Vous devez entrer un nombre
console.log(tableMult(1.1)); //Vous devez entrer un nombre entier
console.log(tableMult(9)); // table de multi

//
