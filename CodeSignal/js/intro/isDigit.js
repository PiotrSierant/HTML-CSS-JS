function solution(symbol) {
    if(symbol === '0') {
        return true
    }
    return !!Number(symbol);
}

const number = "0";

console.log(solution(number));
console.log(Number(number))