function solution(inputString) {
    const arr = inputString.split('-');
    return arr.length === 6 && arr.every((el)=>/^[A-F\d]{2}$/.test(el));
}
const inputString1 = "00-1B-63-84-45-E6" // true
const inputString2 = "Z1-1B-63-84-45-E6" // false
const inputString3 = "not a MAC-48 address" // false

// scope  (0 to 9 or A to F)

console.log(solution(inputString1))
console.log(solution(inputString2))
console.log(solution(inputString3))