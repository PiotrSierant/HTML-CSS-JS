function solution(k) {
    let yellow = 0;
    let red = 0;
    while(k) {
        (k && 1) ? (yellow += k * k) : (red += k * k);
        k--;
    }
    return red-yellow;
}