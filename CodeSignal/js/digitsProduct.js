function solution(product) {
    function p(k) {
        return String(k).split('').map(Number).reduce((a, b) => a * b, 1)
    }
    for (let i = 1; i < 5000; i++) {
        if (p(i) === product) return i;
    }
    return -1;
}