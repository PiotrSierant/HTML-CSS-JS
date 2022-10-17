function solution(min1, min2_10, min11, s) {
    let time = 0;
    if (s >= min1) {
        s -= min1;
        time += 1;
    }
    if (s >= min2_10) {
        let m = Math.min(9, s / min2_10);
        time += m;
        s -= min2_10 * m;
    }
    if (s >= min11) {
        time += s / min11;
    }
    return Math.floor(time);
}
