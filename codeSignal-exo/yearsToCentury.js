/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17. */

//with a for loop :
/* function solution(year) {
  let century = 0;
  for (i = year; i < year; i++) {
     century += 1;
  }
  return century
} */

//with a while loop :

function solution(year) {
  let century = 0;
  while (year > 0) {
    year = year - 100;
    century = century + 1;
  }
  return century;
}

console.log(solution(1970)); //20
