const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
];

function solution(matrix) {

    return matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => {
        return count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])
    }, 0)));

}