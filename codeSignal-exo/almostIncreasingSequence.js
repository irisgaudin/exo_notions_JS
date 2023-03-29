// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than ONE element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
// Sequence containing only one element is also considered to be strictly increasing.

// Example :

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be solution(sequence) = true.

/* ---------------------- MY TURN -------------------------- */
// input : array of integers
// output : boolean
// true = if its possible to get a stricly increasing array BY REMOVING NOT MORE THAN 1 ELEMENT from array
// true = sequence containing ONLY ONE element

// STEPS :
// check if array has more than 2 elements ,
// if no -> return true,
// if yes --> check if array is in ascending order (if arr[i]<arr[i+1])
// if one NO --> return true
// if more than one no --> return false

function solution(sequence) {
  let falseCount = 0;

  if (sequence.length <= 2) {
    return true;
  } else {
    for (i = 0; i < sequence.length - 1; i++) {
      if (sequence[i] >= sequence[i + 1]) {
        //console.log(i,sequence[i],sequence[i+1],sequence[i+2])
        falseCount++;
        if (
          sequence[i] >= sequence[i + 2] &&
          sequence[i - 1] >= sequence[i + 1]
        ) {
          // si je supprime i je verifie i+2, si je supprime i+1 alors je verifie i-1, si les deux j'ajoute au falsecount
          falseCount++;
        }
        if (falseCount > 1) {
          return false;
        }
      }
    }
    return true;
  }
}

console.log(solution([1, 2, 3, 1])); // false
console.log(solution([1, 3, 2])); // true
