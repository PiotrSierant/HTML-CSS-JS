function solution(text) {
    const pattern = /[^a-z^A-Z]/
    const arr = text.split(pattern);
    const len = arr.map(element => {
        return element.length
    })
    const maxValue = Math.max(...len)
    const indexMaxValue = len.indexOf(maxValue);
    return arr[indexMaxValue]
}

const text = "Ready, steady, go!";
console.log(solution(text)) // "steady".
const text1 = "To be or not to be";
console.log(solution(text1)) // "steady".

