//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
//each statue having an non-negative integer size. Since he likes to make things perfect,
//he wants to arrange them from smallest to largest so that each statue will be bigger
//than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
//Help him figure out the minimum number of additional statues needed.

/* Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3. */

function solution(statues) {
  let sortedStatues = statues.sort(function (a, b) {
    return a - b;
  });
  let maxNum = Math.max(...sortedStatues);
  let minNum = sortedStatues[0]
  let result = maxNum - minNum - sortedStatues.length+1 ;

  return result;
}

console.log(solution([6, 2, 3, 8])); // return 3
