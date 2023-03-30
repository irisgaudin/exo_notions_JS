// n children got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount 
// find how many pieces of candy WILL BE EATEN by ALL the children together 
// individual pieces canNOT be split 

// example : 
// for n=3 and m=10, the output should be solution(n,m)= 9 

/* --------------------------------------------- */

// find if m is divisible by n, and round down 
// MODULO ? 

function solution(n, m) {
    let modulo = m%n 
    let result = m - modulo 
    return result
}
