const str = "le reacteur c'est super !";
let counter = 0;
//faire une boucle pour compter tous les caracteres de str
//add condition pour compter SEULEMENT les e ET les r
//faire une adition de e et r ??
for (i = 0; i <= str.length; i++) {
  if (str[i] === "e" || str[i]==="r") {
    counter++;
  }
}
console.log(counter);
