//in : str (avec seulement des x ou o)
//out: true si nb"x" = nb"o"

function exOh(str) {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i <= str.length; i++)
    if (str.charAt(i) === "x") {
      countX++;
    } else if (str.charAt(i) === "o") {
      countO++;
    }
  if (countO === countX) {
    return true;
  } else {
    return false;
  }
}
console.log(exOh("xooxxo")); //true
console.log(exOh("x")); //false
