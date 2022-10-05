function solution(inputString) {
    const pattern = /[^0-9]/g
    const arr = inputString.split(pattern);
    const numbers = arr.filter(element => Number(element))
    console.log(numbers)
    return numbers.reduce((total, value) => {
        return Number(total) + Number(value)
    }, 0)
}
const inputString = "\"abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -\"";
console.log(solution(inputString));