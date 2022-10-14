function solution(arr) {
    if (arr.length < 2) return arr;

    let first = arr.shift();
    let last = arr.pop();
    return [last, ...arr, first];
}