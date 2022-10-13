function solution(n, m) {
    function gcd(a, b) {
        if(b === 0){
            return a;
        }
        else {
            return gcd(b, a % b);
        }
    }
    return n+m + gcd(n,m) -2;
}