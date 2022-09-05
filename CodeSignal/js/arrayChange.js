function solution(inputArray) {
    let max = inputArray[0];
    let moves = 0;
    for(let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= max) {
            moves += max - inputArray[i] + 1;
            inputArray[i] = max + 1;
        }
        max = inputArray[i]
    }
    return moves
}