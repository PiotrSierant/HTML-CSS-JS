function solution(a, b, n) {
    let total = 0;
    for(let i = 0; i < n; i++) {
        total += a * b;
        a++; b++;
    }
    return total;
}
