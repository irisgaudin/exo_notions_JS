//"permuter la casse" => changer le minuscule en majuscule et inversement

const swapCase = (str) => {
  newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      newstr = newstr + str[i].toUpperCase();
    } else {
      newstr = newstr + str[i].toLowerCase();
    }
  }
  return newstr;
};
console.log(swapCase("Hello")); // Affichera : "hELLO"
console.log(swapCase("Le Reacteur")); // Affichera : "lE rEACTEUR"


//REFAIRE 
const swapCasev2 = (tab) => {
  newtab = []
  for (let i = 0; i < tab.length; i++) {
    newtab += tab[i].slice();
  }
  return newtab;
};

console.log(swapCasev2(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]
