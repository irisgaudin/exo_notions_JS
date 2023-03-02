// separer par index
// multiplier le nombre de lettre par le num de l'index
// ajouter un tiret
// mettre la premiere lettre en maj puis les autres en min

const accum = (str) => {
  let splited = str.toUpperCase().split("");
  let result = "";

  for (let i = 0; i < splited.length; i++) {
    result = result + splited[i] + splited[i].repeat(i).toLowerCase();
    if (i !== splited.length - 1) {
      result = result + "-";
    }
  }
  return result;
};

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("cwAt")); // -> "C-Ww-Aaa-Tttt"

// pour chaque element de splited, tu m'ajoutes un element \\
