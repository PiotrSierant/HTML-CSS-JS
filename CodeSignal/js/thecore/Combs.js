function solution(comb1, comb2) {
    let a = parseInt(comb1.replace(/./g, a => a == "*" ? 1 : 0), 2),
        b = parseInt(comb2.replace(/./g, a => a == "*" ? 1 : 0), 2),
        i = 0,
        j = 0;
    while (a << i & b) i++;
    while (b << j & a) j++;
    return Math.min(
        Math.max(comb1.length + i, comb2.length),
        Math.max(comb2.length + j, comb1.length)
    );
}