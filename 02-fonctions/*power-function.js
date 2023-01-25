//REFAIRE ! 

//in : deux nombre entiers (num,power)
// out : resultat de num exposant power SANS Math.pow

const powerFunc = (num, power) => {
  let result = num;
  for (let i = 1; i < power; i++) {
    result =result*num;
  }
  return result;
};

console.log(powerFunc(3, 3)); //27
console.log(powerFunc(3, 4)); //81
console.log(powerFunc(-3, 7)); //-2,187
console.log(powerFunc(2, -5)); //0.03125
console.log(powerFunc(9, 0)); //1

//le principe des exposants est de multiplier "num" par lui meme "power" foix
//3^4 = 3*3*3*3 = 81
