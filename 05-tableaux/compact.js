//remove falsey values from the array

const compact = (arr) => {
  let falsey = [false, null, 0, "", undefined, NaN];
  let newTab = [];
  for (i = 0; i < arr.length; i++) {
    if (falsey[i] != arr[i] && arr[i] != "") {
      newTab.push(arr[i]);
    }
  }
  return newTab;
};

console.log(compact([0, 1, false, 2, "", 3, null, 0])); // Doit afficher `[1, 2, 3]`
