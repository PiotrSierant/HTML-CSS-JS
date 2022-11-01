function solution(matrix) {
    s = new Set();
    for(i=0; i<matrix.length-1; i++) {
        for(j=0; j<matrix[i].length-1; j++) {
            s.add(""+matrix[i][j] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1])
        }
    }
    return s.size
}