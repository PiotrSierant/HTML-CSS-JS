function solution(inputString) {
    if(inputString.length % 2 === 1) {
        return false
    }
    const middle = inputString.length / 2
    const firstPart = inputString.slice(0, middle)
    const lastPart = inputString.slice(middle)
    return firstPart === lastPart
}