/* Given an integer n, return the largest number that contains exactly n digits.

Example
For n = 2, the output should be
solution(n) = 99.

 */

/* ---------------------------------------------------- */

//largest integer will always be 9s
//steps:
//add 9s next to each others n times 

function solution(n) {
    let result = ""
    for (i=0;i<n;i++){
        result += "9"
    }  
   return parseInt(result)
  } 
  