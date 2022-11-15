function solution(message) {
    let res = "";
    let sum = 0;
    for (let i of message){
        let a = i.charCodeAt(0)-97;
        a -= sum;
        while (a<0)
            a+=26;
        res+=String.fromCharCode(a+97);
        sum+=a;
    }
    return res;
}