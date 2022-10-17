function solution(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;

    let outArray = Array.from(Array(height), () => new Array(width));
    let mines = 0;
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {

            mines = 0;
            if(i > 0) {
                if(matrix[i-1][j-1]) mines += 1;
                if(matrix[i-1][j]) mines += 1;
                if(matrix[i-1][j+1]) mines += 1;
            }

            if(i < height - 1) {
                if(matrix[i+1][j-1]) mines += 1;
                if(matrix[i+1][j]) mines += 1;
                if(matrix[i+1][j+1]) mines += 1;
            }

            if(matrix[i][j-1]) mines += 1;
            if(matrix[i][j+1]) mines += 1;
            outArray[i][j] = mines;
        }
    }
    return outArray;
}
