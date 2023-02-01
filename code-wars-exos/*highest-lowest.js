//return the higest and lowest number of the string
// for loop to check the entire string,
// add condition

function highAngLow(numbers) {
  let max = 0;
  let min = 0;
  for (i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      //TO DO : TERMINER CETTE PARTIE - ne fonctionne pas
      min = numbers[i];
    }
  }
  let total = max.toString() + " , " + min.toString();

  return total;
}

console.log(highAngLow("1 2 3 4 5")); // return "5 1"
console.log(highAngLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAngLow("1 9 3 4 -5")); // return "9 -5"
