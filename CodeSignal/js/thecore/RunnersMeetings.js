function solution(startPosition, speed) {
    return Math.max(-1, ...startPosition.map((val, idx) => startPosition.map((v, i) => (val - v) / (speed[idx] - speed[i])))
        .map(val => Math.max(...Object.values(val.reduce((pre, val) => (Number.isFinite(val) && val < 0 && (pre[val] = -~pre[val]), pre), {}))) + 1));
}