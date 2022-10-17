function solution(inputString) {
    while(inputString.includes("(")) {
        const findEnd = inputString.indexOf(")");
        const findStart = inputString.lastIndexOf("(", findEnd);
        const reverse = inputString.slice(findStart + 1, findEnd).split('').reverse().join('');
        inputString = inputString.slice(0, findStart) + reverse + inputString.slice(findEnd + 1);
    }
    return inputString;
}
const str = '(bar)';
console.log(solution(str));