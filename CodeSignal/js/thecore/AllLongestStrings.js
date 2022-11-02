function solution(inputArray) {
    const arrayOfLength = inputArray.map(element => element.length);
    const theBiggestLength = Math.max(...arrayOfLength);
    return inputArray.filter(element => element.length === theBiggestLength)
}