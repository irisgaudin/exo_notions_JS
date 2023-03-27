
function solution(n) {
  result = 1;
  for (i = 0; i < n; i++) {
    result = c * (n - i);
  }
  console.log(result);
}


//----- SOLUTION -------//

function solution(n) {
    return n*n + (n-1)*(n-1);
}
