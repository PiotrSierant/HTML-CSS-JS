function solution(st) {
    let i = 0;
    let aux;
    while(st !== st.split('').reverse().join('')){
        aux = st.split('')
        aux.splice(st.length-i, 0 ,st[i])
        st = aux.join('');
        i++;
    }
    return st;
}

console.log(solution("abcdc")) // abcdcba