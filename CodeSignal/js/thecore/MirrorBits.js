function solution(a) {
    let result = 0;
    let m = Math.floor(Math.log2(a));
    let i = m + 1;
    while (i--) {
        result = result | (((a & (1 << i)) >> i) << (m - i));
    }
    return result;
}