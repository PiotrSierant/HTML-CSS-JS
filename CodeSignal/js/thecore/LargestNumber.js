function solution(n) {
    let str = '';
    for(let i = 0; i < n; i ++) {
        str += '9';
    }
    return Number(str)
}

const n = 3;
const x = 5;
console.log(solution(n));
console.log(solution(x));
