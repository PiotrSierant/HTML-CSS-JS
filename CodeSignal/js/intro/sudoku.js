function solution(grid) {
    function checkNine(arr) {
        for (let i = 1; i < 10; i++) {
            if (!arr.includes(i)) {
                return false;
            }
        }
        return arr.length === 9;
    }
    for (let i = 0; i < 9; i++){
        const col = grid.map(row => row[i]);
        const box = [];
        for (let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                box.push(grid[j+i-i%3][k+(i%3)*3]);
            }
        }
        if (!checkNine(grid[i]) || !checkNine(col) || !checkNine(box)){
            return false;
        }
    }
    return true;
}

