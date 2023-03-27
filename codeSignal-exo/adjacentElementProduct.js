/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.
because 7 and 3 produce the largest product. */

function solution(inputArray) {
    let tab = []
    for (i=0;i<inputArray.length-1; i++){
        tab.push (inputArray[i]*inputArray[i+1])
    }
    let result = Math.max(...tab) // revoir ...
    return result
}

//step 1 : multiply adjacent numbers
//step 2 : return the biggest

console.log(solution([4, 10, 1])); //40
