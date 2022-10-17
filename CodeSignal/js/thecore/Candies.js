function solution(n, m) {
    const eatCandiesAlone = Math.floor(m/n);
    return n * eatCandiesAlone;
}
let n = 3;
let m = 10;
console.log(solution(n, m))