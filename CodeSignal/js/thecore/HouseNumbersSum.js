function solution(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((total, value) => {
        return total + value;
    }, 0);
}
