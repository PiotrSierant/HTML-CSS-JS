function solution(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let len = statues.length;
    return max - min - len + 1
}