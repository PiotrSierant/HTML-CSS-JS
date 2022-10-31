function solution(s, t) {
    for(let x of s){
        t = t.replace(x,"");
    }
    return t.length;
}
