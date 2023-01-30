const displayArray = (tab, option) => {
  let str = tab.join(option);
  return str;
};
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], " ")); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], ", ")); // Affichera "Pomme, Banane, Abricot, Cerise"
