function solution(a, b) {
    const fa = freq(a);
    const fb = freq(b);
    console.log( fa, fb);
    return Object.keys(fa).reduce((result, key) => (
        Math.min( result, Math.floor( (fb[key]? fb[key] : 0 ) / fa[key] ) )
    ), 10000);
}

function freq(s) {
    return s.split('').reduce((result, l) => {
        result[l] = result[l]? result[l] + 1 : 1;
        return result;
    }, {})
}