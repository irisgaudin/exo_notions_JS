//function taking a list of non negative integers and strings and
//returns a new list with the strings filtered out

function filter_list(l) {
  result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      result.push(l[i]);
    }
  }
  return result;
}

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, "aafs", "123", 177])); //[1,2,177];
