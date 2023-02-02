// return all elements BUT the first one
const tail = (arr) => {
  let notFirst = arr.slice(1);
  return notFirst;
};

console.log(tail([1, 2, 3])); // return [2,3]
console.log(tail([1,2,3,4,5,6,7,8,9]))
