function solution(n) {
    let result = 0;
    for (let i = 2; i < n / 2; i++) {
        i % 2
            ? Math.round(n / i) * i === n && n / i > i / 2 && result++
            : Math.floor(n / i) * i !== n && (Math.floor(n / i) + Math.ceil(n / i)) === (n * 2 / i) && (n / i > i / 2) && result++
    }
    return result;
}