function solution(n) {
    const arrayNumber = [...n + ''].map(n=>+n);
    let odd = [];
    for(let element of arrayNumber) {
        console.log(element)
        if(element % 2 === 1) {
            odd.push(element)
        }
    }
    return odd.length > 0 ? false : true;
}
const x = 248622;
const z = 642386;

solution(x) // true
solution(z) // false