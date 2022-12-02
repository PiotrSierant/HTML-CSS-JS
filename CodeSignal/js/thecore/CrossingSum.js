function solution(matrix, a, b) {
    return matrix[a].reduce((x, y) => x + y) + matrix.reduce((x, y) => x + y[b], 0) - matrix[a][b]
}