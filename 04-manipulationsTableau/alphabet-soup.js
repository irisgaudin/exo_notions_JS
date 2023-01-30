function alphabetSoup(str) {
  let result = str
    .split("") // separe chaque lettre de la string
    .sort() //trie les lettres dans l'ordre alphabetique
    .join(""); //remettre les lettres dans une seule string
  return result;
}
console.log(alphabetSoup("hello")); //"ehllo"
console.log(alphabetSoup("thereactor")); // Affichera "aceehorrtt"
console.log(alphabetSoup("hooplah")); // Affichera "ahhloop"
