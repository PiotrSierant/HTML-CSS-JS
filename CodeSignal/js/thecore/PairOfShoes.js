function solution(shoes) {
    let pairs = {};
    for (let e of shoes) {
        if (pairs[e[1]] == undefined)
            pairs[e[1]] = 0;
        if (e[0]) {
            pairs[e[1]]++;
        } else {
            pairs[e[1]]--;
        }
    }
    return Object.values(pairs).every(e => e == 0);
}