//arr.push(values)

const fill = (arr, values) => {
  let tab = [];
  for (i = 0; i < arr.length; i++) {
    tab.push(values);
  }
  return tab;
};

console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`
console.log(fill(["Hello", "World"], "Bonjour")); // Doit afficher `["Bonjour", "Bonjour"]`
