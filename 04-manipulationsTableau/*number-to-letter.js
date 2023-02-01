// A REFAIRE
//ERRORS : for all invalid parameters (decimaux, NaN, negatif)
// 0<num<9999
//

const numberToLetter = (num) => {
  let result = "";

  //ERRORS :
  if (num < 0) {
    return "put a positive number";
  } else if (isNaN(num) === true) {
    return "put a number";
  } else if (Number.isInteger(num) === false) {
    return "put an integer";
  } else {
    //VALID INPUT:
    let dizaines = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = result + dizaines.replace(1, one);
  }
};
console.log(numberToLetter(15)); // fifteen
console.log(numberToLetter(35)); // thirty-five
console.log(numberToLetter("ABC")); //put a number
console.log(numberToLetter("32.9")); //put an integer
console.log(numberToLetter(-8)); //put a positive number
 