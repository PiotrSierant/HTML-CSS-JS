function solution(a) {
    const third = a.reduce((pre, val) => pre + val, 0) / 3;
    let cur = 0, part = 0, res = 0;
    for (let el of a.slice(0, -1)) {
        cur += el;
        if (cur === 2 * third) res += part;
        if (cur === third) part++;
    }
    return res;
}