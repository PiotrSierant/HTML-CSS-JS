function solution(inputArray, k) {
    const indexPopElement = [];
    const initK = k;
    for(let i = 0; i < inputArray.length; i++) {
        if(i !== k - 1) {
            indexPopElement.push(inputArray[i]);
        }
        if(i === k - 1) {
            k = k + initK;
        }
    }

    return indexPopElement
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));