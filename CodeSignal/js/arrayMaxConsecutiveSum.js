function solution(inputArray, k) {
    let rollingSum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let max = rollingSum;
    for(let i = 0; i < inputArray.length - k; i++){
        rollingSum += inputArray[i + k] - inputArray[i];
        max = Math.max(max, rollingSum);
    }
    return max;
}

console.log(solution([2, 3, 5, 1, 6], 2));