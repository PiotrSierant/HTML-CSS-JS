function solution(score1, score2) {
    const max = Math.max(score1, score2);
    const min = Math.min(score1, score2);
    return max === 6 && min < 5 || max === 7 && min > 4 && min < 7;
}