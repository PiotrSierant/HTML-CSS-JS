function solution(a) {
    let sorted = a.filter(x => {
        if(x !== -1) {
            return x;
        }
    }).sort((a, b) => (a-b)); // --> [150, 160, 170, 180, 190];
    let sortedCount = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = sorted[sortedCount];
            sortedCount = sortedCount + 1;
        }
    }
    return a;
}
const a = [-1, -1, -1, -1, -1];
const ab = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(solution(a)); // [-1, -1, -1, -1, -1];
console.log(solution(ab)); // [-1, 150, 160, 170, -1, -1, 180, 190];