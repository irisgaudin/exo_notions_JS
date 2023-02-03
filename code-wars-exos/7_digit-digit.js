//

function squareDigits(num) {
  let str = num.toString();
  let splited = str.split("");
  console.log(splited);
  let tabSplit = [];

  for (i = 0; i < splited.length; i++) {
    tabSplit.push(splited[i] * splited[i]);
  }

  let result = parseInt(tabSplit.join(""));
  return result
}

console.log(squareDigits(48));
