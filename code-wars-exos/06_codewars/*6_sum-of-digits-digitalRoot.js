//FONCTION RECURSIVE
//"until a single digit is produced" --> recursivité
//etapes de l'exo :
// 1: fonction argument n
// 2: put to string and SPLIT  THEN LOOP THEN PARSEINT pour additionner les chiffres de n entre eux AND return result //
// 3: add condition if result > 9 --> then callback the function (recursive)
// condition for non-negativ number ?)

const digitalRoot = (n) => {
  let result = 0;
  let strSplit = n.toString().split(""); //step 2

  for (let i = 0; i < strSplit.length; i++) {
    result += parseInt(strSplit[i]);
  }

  if (result > 10) {
    return digitalRoot(result);
  }

  return result;
};

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2
