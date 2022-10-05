function solution(s) {
    let count = 1;
    let result = '';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i+1]) {
            count += 1;
        } else {
            if(count === 1) {
                result += s[i]
            } else {
                result += count + s[i];
                count = 1;
            }
        }
    }
    return result.replace(/'1'/g, '')
}

