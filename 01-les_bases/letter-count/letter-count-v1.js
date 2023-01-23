//consigne : compter le nombre de "e" danws la chaine de caracteres

const str = "compte les e de cette phrase";
let counter = 0;
//etape 1 : faire une boucle pour compter toutes les lettres de la string
//etape 2: ajouter une condition pour compter seulement les "e"
for (let i = 0; i < str.length; i++) {
if (str[i]==="e"){
    counter++
}
}

console.log(counter);
