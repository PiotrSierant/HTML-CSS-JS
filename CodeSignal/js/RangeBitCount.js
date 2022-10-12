function solution(a, b) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += [0, 1, 2, 3].reduce((element, d) => element + ((i & 1 << d) >> d), 0);
    }
    return result;
}
