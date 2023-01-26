//EXO01:
/* const generateString = (num) => {
  let str = "";

  // Début de votre code
  for (let i = 0; i <= num; i++) {
    str = str + "-";
  }
  // Fin de votre code

  return str;
};

console.log(generateString(1)); // Doit afficher `-`
console.log(generateString(2)); // Doit afficher `--`
console.log(generateString(4)); // Doit afficher `----`
console.log(generateString(19)); // Doit afficher `-------------------`
 */
//EXO02:
/* const generateString = (num) => {
  let str = "";

  // Début de votre code
  for (let i = 0; i < num; i++) {
    if (str === "") {
      str = str + "o";
    } else {
      str = "-" + str;
    }
  }
  // Fin de votre code

  return str;
};

console.log(generateString(1)); // Doit afficher `o`
console.log(generateString(2)); // Doit afficher `-o`
console.log(generateString(4)); // Doit afficher `---o`
console.log(generateString(19)); // Doit afficher `------------------o` */
/* 
//EXO03:
console.log("o---o\n|   |\no---o"); */

// En testant ce script, vous pourrez constater que la combinaison `\n`
// déclenche un retour à la ligne

//EXO04:-----------------------------------------------------------------------------
/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

/* // Début de votre code
function generateString(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str = str + "o---o\n";
  }
  return str
}
// Fin de votre code

const height = 20;
console.log(generateString(height)); */

//EXO05:-----------------------------------------------------------------------------
/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères
  suivantes :
  -----
  -----
  -----
*/

/*

  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n'
  pour déclencher des retours à la ligne
*/

const generateString = (height, width) => {
  let str = "";

  // Début de votre code
  for (let i = 0; i < height; i++) {

    for (let i = 0; i < width; i++) {
      str = str + "-";
    }
    str = str + '\n'
  }

  // Fin de votre code

  return str;
};

const height = 3;
const width = 5;
console.log(generateString(height, width));
