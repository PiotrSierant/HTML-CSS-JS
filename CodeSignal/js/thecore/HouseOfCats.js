function solution(legs) {
    let result = [];
    for (let i = Math.floor((legs % 4) / 2); i <= Math.floor(legs / 2); i += 2) {
        result.push(i);
    }
    return result;
}