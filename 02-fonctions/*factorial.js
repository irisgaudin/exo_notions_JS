//in : nombre num
// out : factorielle de num
// num entier entre 1 et 18

function factorial(num) {
  let count = 1;
  for (let i = num; i >= 1; i--) {
    count = count * i;
  }
  return count;
}

console.log(factorial(4)); // 24
console.log(factorial(10)); // 3 628 800

//on part de n et on multipli tous les num entier precedants jusqu'à 1
