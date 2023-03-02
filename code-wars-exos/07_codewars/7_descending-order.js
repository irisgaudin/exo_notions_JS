function descendingOrder(n) {
  let test = n.toString();
  let result = test.split("");
  let sorted = result.sort();
  let reverse = sorted.reverse();
  let joined = reverse.join("");
  let num = parseInt(joined);
  return num;
}

console.log(descendingOrder(42145)); //54421
console.log(descendingOrder(145263)); //654321
