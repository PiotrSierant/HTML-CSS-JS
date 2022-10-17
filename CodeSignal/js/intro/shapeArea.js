//shapeArea
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//     A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the
// n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and
// -interesting polygons in the picture below.
//     n = 1 - 1
//     n = 2 - 5   - 4
//     n = 3 - 13  - 8
//     n = 4 - 25  - 12
//     n = 5 - 41  - 16
//     n = 10
//     2*n*(n-1) +1;

function solution(n) {
    return 2*n*(n-1) +1;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));