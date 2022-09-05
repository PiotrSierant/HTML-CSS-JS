function solution(inputArray) {
    let result = [];
    inputArray.reduce((a,b) => {
        result.push(Math.abs(a-b));
        return b
    })
    return Math.max(...result);
}
