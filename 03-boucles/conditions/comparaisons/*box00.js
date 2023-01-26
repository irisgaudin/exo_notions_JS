//REFAIRE
//
//ETAPE 1 - faire trois tirets a la ligne :
//ETAPE 2 - agrandir les tirets a la longueurs de width
//ETAPE 3 - remplacer le deuxieme rang par des etoiles
// remplacer les coins par des ronds
// remplacer les etoiles par des espaces
const box = (width, height) => {
  let str = "";
  //affiche chaque ligne:
  for (let i = 0; i < height; i++) {
    //affiche chaque caractere de chaque ligne
    for (let j = 0; j < width; j++) {
      //est-ce qu'on est sur la 1ere ligne ?
    }
    str = str + "\n";
  }
  return str;
};
console.log(box(5, 3));
