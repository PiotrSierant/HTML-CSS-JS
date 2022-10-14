function solution(arr) {
    let middle = Math.floor(arr.length / 2);
    let middleTwoElement = arr[middle] + (arr.length % 2 ? 0 : arr[middle - 1]);
    return arr[0] === middleTwoElement && middleTwoElement === arr[arr.length - 1];
}