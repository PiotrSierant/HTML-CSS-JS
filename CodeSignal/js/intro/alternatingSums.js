const solution = (a) => {
    if(a.length === 1) {
        a.push(0);
        return a
    }
    let firstArray = [];
    let secondArray = [];
    a.forEach((element, index) => {
        if(index % 2 === 0) {
            firstArray.push(element);
        } else {
            secondArray.push(element);
        }
    })
    if(firstArray.length > 0 && secondArray.length > 0) {
        const resultFirstArray = firstArray.reduce((total, element) => total + element);
        const secondArrayArray = secondArray.reduce((total, element) => total + element);
        return [resultFirstArray, secondArrayArray];
    }

}
const a = [50, 60, 60, 45, 70];
console.log(solution(a))//  [180, 105]