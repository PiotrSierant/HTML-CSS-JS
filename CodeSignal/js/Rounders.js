function solution(n) {
    let count = 0;
    let result = '';
    while(n > 9) {
        count = ((n % 10) + count >= 5) ? 1 : 0;
        n = Math.floor(n/10);
        result = 0 + result;
    }
    return Number((count + n) + result);
}