function solution(experience, threshold, reward) {
    return experience + reward >= threshold;
}

let experience = 10;
let threshold = 15;
let reward = 5;
console.log(solution(experience, threshold, reward));
experience = 10;
threshold = 15;
reward = 4;
console.log(solution(experience, threshold, reward));