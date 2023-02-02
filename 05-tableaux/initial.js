// return all BUT the last element
const initial = (arr) => {
  let butLast = arr.pop();
  let newArr = arr;
  return newArr;
};

console.log(initial([1, 2, 3, 4, 5])); // [1,2,3,4]
// using slice :

const initial2 = (arr) => {
  let newTab = arr.slice(0, arr.length - 1);
  return newTab;
};

console.log(initial2([1, 2, 3])); //[1,2]
