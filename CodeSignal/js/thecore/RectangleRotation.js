function solution(a, b) {
    let A = Math.floor(Math.sqrt(a * a / 2));
    let B = Math.floor(Math.sqrt(b * b / 2));
    return (A * B + Math.floor((A + B) / 2)) * 2 + 1;
}