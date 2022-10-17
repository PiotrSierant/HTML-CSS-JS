// function solution(cell1, cell2) {
//     const height = [1,2,3,4,5,6,7,8];
//     const width = ['A','B','C','D','E','F','G','H']
//     const chessboardBrown = [];
//     const chessboardLightBrown = [];
//     for(let i = 0; i < width.length; i++) {
//         for( let j = 0; j < height.length; j++) {
//             if ((i + j) % 2 === 0) {
//                 chessboardBrown.push(width[i]+height[j])
//             } else {
//                 chessboardLightBrown.push(width[i]+height[j])
//             }
//         }
//     }
//     return chessboardBrown.includes(cell1) && chessboardBrown.includes(cell2);
// }
// Pass 18/20 tests

function solution(cell1, cell2) {
    const letters = 'ABCDEFGH';

    cell1 = letters.indexOf(cell1[0]) + Number(cell1[1]);
    cell2 = letters.indexOf(cell2[0]) + Number(cell2[1]);
    return cell1 % 2 === cell2 % 2
}
console.log(solution('A1', 'C2'));
console.log(solution('A1', 'C3'));
console.log(solution('A1', 'C4'));