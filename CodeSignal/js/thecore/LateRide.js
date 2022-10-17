function solution(n) {
    return (Math.floor(n / 60) + '' + (n % 60)).split('').map(Number).reduce((total, value) => total + value);
}

const n = 240;
console.log(solution(n))
const zn = 808
console.log(solution(zn))