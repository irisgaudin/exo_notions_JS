//in : str
//out : nb de mot que contient str
//mots séparés d'un espace --> USE SPLIT

function wordCount(str) {
  let array = str.split(" "); // on divise l'array par mots
  let result = array.length; // on compte les index de l'array
  return result;
}

console.log(wordCount("Hello world")); // output: 2
console.log(wordCount("one 22 three")); // output :3

// sans utiliser split(): 

/*  */