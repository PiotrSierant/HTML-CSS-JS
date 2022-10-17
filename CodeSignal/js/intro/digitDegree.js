function solution(n) {
    if (n<10)
        return 0;
    return  1 + solution(Number(String(n).split('').map(Number).reduce((a,b)=>a+b)));
}

console.log(solution(5))
console.log(solution(100))
console.log(solution(91))