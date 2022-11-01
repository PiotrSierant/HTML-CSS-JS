function solution(a) {
    return a.length + new Set(a.map(x=>Math.ceil(x/10000))).size
}