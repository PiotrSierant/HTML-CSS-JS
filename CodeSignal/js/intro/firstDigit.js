function solution(inputString) {
    const array_string = inputString.split('');
    let result;
    for(let element of array_string) {
        if(!isNaN(Number(element)) && element !== ' ') {
            return result = element
        }
    }
    return result;
}
console.log(solution("var_1__Int"))
console.log(solution("q2q-q"))