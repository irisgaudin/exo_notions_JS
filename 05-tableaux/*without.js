//

const without = (arr, toExclude) => {
  let filteredTab = [];

  for (i = 0; i < arr.length; i++) {
    if (!toExclude.includes(arr[i])) {
      filteredTab.push(arr[i]);
    }
  }

  return filteredTab;
};

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
