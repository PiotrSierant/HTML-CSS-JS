function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(element => element === elemToReplace ? substitutionElem : element);
}
