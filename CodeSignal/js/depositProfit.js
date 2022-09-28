function solution(deposit, rate, threshold) {
    const currentRate = 1 + (rate / 100);
    let currentDeposit = deposit;
    let howManyYears = 1;
    for(howManyYears; currentDeposit < threshold; howManyYears++) {
        currentDeposit = currentDeposit * currentRate;
    }
    return howManyYears - 1
}

console.log(solution(100, 20, 170))