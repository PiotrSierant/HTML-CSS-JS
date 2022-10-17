function solution(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    let count_day = 0;
    while (true) {
        currentHeight += upSpeed;
        count_day += 1;
        if(currentHeight >= desiredHeight) {
            break
        }
        currentHeight -= downSpeed;
    }
    return count_day;
}

const upSpeed = 100;
const downSpeed = 10;
const desiredHeight = 910;

console.log(solution(upSpeed, downSpeed, desiredHeight));