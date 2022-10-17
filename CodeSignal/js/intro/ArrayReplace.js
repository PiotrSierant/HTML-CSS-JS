function solution(inputArray, elemToReplace, substitutionElem) {
    let indexes = []
    if(inputArray.includes(elemToReplace)) {
        for(let i = 0; i < inputArray.length; i++) {
            if(inputArray[i] === elemToReplace) {
                indexes.push(i);
            }
        }
    }
    for(let i = 0; i < indexes.length; i++) {
        inputArray[indexes[i]] = substitutionElem;
    }
    return inputArray
}
let inputArray =  [1, 2, 1];
let elemToReplace = 1;
let substitutionElem = 3;

solution(inputArray, elemToReplace, substitutionElem)