function solution(s1, s2) {
    x1 = s1.replace(/\d+/g, a => a.padStart(20, 0))
    x2 = s2.replace(/\d+/g, a => a.padStart(20, 0))
    if (x1 < x2) return true
    if (x1 > x2) return false
    return s1.padEnd(20, "Z") < s2.padEnd(20, "Z")
}