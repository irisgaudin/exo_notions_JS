function solution(inputString) {
    let newstr = inputString.split("").reverse().join("")    
    if (newstr === inputString){
        return true
    } else {
        return false
    }
}
console.log(solution("abba"))//true