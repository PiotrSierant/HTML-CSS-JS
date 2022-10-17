function solution(s) {
    const set = new Set();
    s.split('').forEach(element => set.add(element))
    return set.size
}

console.log(solution('aabbccseas'))