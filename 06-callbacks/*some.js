const some = (tab, func) => {
  //REFAIRE
};

const isLargerThenTen = (element) => {
  if (element >= 10) {
    return true;
  }
  return false;
};

console.log(some([10, 9, 8], isLargerThenTen)); // doit afficher true
console.log(some([1, 4, 2], isLargerThenTen)); // doit afficher false
