function solution(matrix) {
    for (let i = 0; i < matrix.length; i++){
        [matrix[i][i], matrix[i][matrix.length-i-1]] = [matrix[i][matrix.length-i-1], matrix[i][i]];
    }
    return matrix;
}
