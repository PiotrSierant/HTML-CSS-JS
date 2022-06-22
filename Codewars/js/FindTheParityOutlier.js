function findOutlier(integers){
    let oddNumbers = [];
    let evenNumbers = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) { oddNumbers.push(integers[i]); } else { evenNumbers.push(integers[i]); }
    }
    if (oddNumbers.length > evenNumbers.length) { return evenNumbers[0] } else { return oddNumbers[0] }
}
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]));
console.log(findOutlier([1,1,0,1,1]));