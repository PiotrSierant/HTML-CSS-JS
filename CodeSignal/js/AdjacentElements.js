// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
// znajdz 2 sasiednie liczby ktore daja najwiekszy wynik
    let result = -Infinity;
    for(let i = 0; i < inputArray.length; i++){
        let newResult = inputArray[i] * inputArray[i+1]
        if ( newResult > result) {
            result = newResult;
        }
    }
    return result;
}
const array = [-23, 4, -3, 8, -12];
console.log(solution(array));