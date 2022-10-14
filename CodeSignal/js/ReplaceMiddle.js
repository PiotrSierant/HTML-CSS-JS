function solution(arr) {
    if (arr.length % 2 === 0) {
        let middlePosition = Math.floor(arr.length / 2);
        let middle = arr[middlePosition] + arr[middlePosition - 1];
        arr.splice(middlePosition - 1, 2, middle);
    }
    return arr;
}