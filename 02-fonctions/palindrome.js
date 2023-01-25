const palindrome = (str) => {
  result = "";
  for (let i = str.length; i >= 0; i--) {
    result = result + str.charAt(i);
  }
  if (result === str) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome("racecar")); //should return TRUE
console.log(palindrome("salut"))//should return FALSE