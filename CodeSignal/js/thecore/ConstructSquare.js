const solution = s => {
    const fn = val =>
        Object.values([...val].reduce((pre, val) => (pre[val] = -~pre[val], pre), {})).sort().join(``);
    for (let i = (10 ** s.length) ** 0.5 ^ 0; i > 2; i--) {
        if (`${i ** 2}`.length === s.length && fn(`${i ** 2}`) === fn(s)) return i ** 2;
    }
    return -1;
};
