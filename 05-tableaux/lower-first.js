//convert i[0].toLowerCase()

function lowerFirst(str) {
  return str.replace(str[0], str[0].toLowerCase());
}
console.log(lowerFirst("Fred")); // 'fred'
console.log(lowerFirst("FRED")); // 'fRED'
