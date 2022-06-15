const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

// function solution(inputArray) {
//     function compareNr(a, b) {
//         return a.length - b.length
//     }
//     let sortedList = inputArray.sort(compareNr);
//     let minimalLengthValue = sortedList[0];
//     for (let i = 0; i < sortedList.length; i++) {
//         if (minimalLengthValue.length < sortedList[i].length) {
//             minimalLengthValue = sortedList[i];
//         }
//     }
//     const result = inputArray.filter(element => element.length > (minimalLengthValue.length - 1));
//     // let newArray = []
//     // for (let j = 0; j < sortedList.length; j++) {
//     //     if(minimalLengthValue.length == sortedList[j].length) {
//     //         newArray.push(sortedList[j]);
//     //     }
//     // }
//     // console.log(newArray);
//     console.log(result);
// }
function solution(inputArray) {
    let arr = inputArray;
    let longest = 0;
    let longestArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length === longest) {
            longestArr.push(arr[j]);
        }
    }
    return longestArr;
}
console.log(solution(inputArray));