function solution(n) {
    let result = 1;
    let i = 1;
    while (result < n) {
        result *= ++i;
    }
    return result;
}