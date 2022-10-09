function solution(divisor, bound) {
    let divisible = [];
    for(let i = 0; i <= bound; i++) {
        if(i % divisor === 0) {
            divisible.push(i);
        }
    }
    return Math.max(...divisible);
}