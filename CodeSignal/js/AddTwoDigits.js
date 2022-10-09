function solution(n) {
    const arr = Array.from(String(n)).map(element => Number(element))
    return arr.reduce((total, value) => {
        return total + value
    }, 0)
}
const n = 29; // the output should be 11
console.log(solution(n));