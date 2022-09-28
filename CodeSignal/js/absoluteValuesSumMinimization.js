function solution(array) {
    const result = [];
    for(let number of array) {
        const sum = array.reduce((total, next) => {
            return total + Math.abs(next - number);
        }, 0);
        result.push(sum);
    }
    return array[result.indexOf(Math.min(...result))];
}

console.log(solution([2,3]));
console.log(solution([2,4,7]));
