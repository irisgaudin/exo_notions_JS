/* You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11. */


function solution(n) {
   let str = n.toString().split("")
   let num = str.map(x=>parseInt(x))
   return num[0]+num[1]

}
