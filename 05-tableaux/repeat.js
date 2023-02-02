function repeat(str, num) {
  let result = "";
  for (i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("*", 3)); // Doit afficher `***`
console.log(repeat("abc", 2)); // Doit afficher `abcabc`
console.log(repeat("abc", 0)); // Doit afficher  ``
