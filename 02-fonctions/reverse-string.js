/* Explanations : This code defines a function reverseString(str) that takes in a string as an argument and returns its reverse.
Here is how the function works:

It declares a variable result which is initially an empty string.
It uses a for loop to iterate through the characters of the input 
string str starting from the last index and ending at the first index (i = str.length - 1; i >= 0; i--).
For each iteration, it adds the current character to the 
esult variable using the charAt() method which returns the character at a specific index.
After the loop ends, the function returns the result variable which now contains the reversed string.
Finally, the code calls the function with two different string inputs "Le Reacteur" and "I Love Code" and log the results to the console.

 */

const reverseString = (str) => {
  result = "";
  for (let i = str.length; i >= 0; i--) { //for (let *debut de la boucle*; *quand s'arrete la boucle*;*que fait la boucle *)
    result += str.charAt(i);
  }
  return result;
};
console.log(reverseString("I love Code"));


