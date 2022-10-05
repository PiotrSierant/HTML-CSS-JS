function solution(n) {
    n = n.toString();
    let largestNum = 0;

    for(let i = 0; i < n.length; i++){
        let string;
        if (i !== 0) {
            string = n.substring(0, i) + n.substring(i + 1);
        } else {
            string = n.substring(1, n.length);
        }
        if(parseInt(string)>largestNum){
            largestNum = parseInt(string);
        }
    }
    return largestNum;
}
const n = 152;
console.log(solution(n));
const b = 1001;
console.log(solution(b));

