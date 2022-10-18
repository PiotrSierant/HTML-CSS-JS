function solution(n) {
    function divisors(x) {
        let ret = 0;
        for (let i = 1; i <= x; i++) {
            if (x % i === 0)
                ret++;
        }
        return ret;
    }
    let d = Array(n).fill(0);
    let w = 0;
    let wc = 0;
    let t = 0;
    for (let i = 1; i <= n; i++) {
        t = 0;
        d[i - 1] = divisors(i);
        for (let j = 1; j < i; j++) {
            if (d[j - 1] > d[i - 1])
                t++;
        }
        if (t === w) {
            wc++;
        } else if (t > w) {
            w = t;
            wc = 1;
        }
    }
    return [w, wc];
}