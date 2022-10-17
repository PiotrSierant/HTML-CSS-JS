function solution(n) {
    let result = Array(n*n).fill(null).map((el,i)=>i+1);
    let newArr = [];
    let i = 0;
    while(result.length) {
        newArr.reverse();
        newArr = newArr.length
            ? newArr[0].map((col, i) => newArr.map(row => row[i]))
            : newArr;

        newArr.unshift(result.splice(-(Math.floor(i/2)+1)));
        i++;
    }
    return newArr;
}
console.log(solution(3))
console.log(solution(5))
// For n = 3, the output should be
//
// solution(n) = [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]