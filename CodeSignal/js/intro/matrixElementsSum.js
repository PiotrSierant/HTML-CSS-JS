function matrixElementsSum(matrix) {
    let sum = 0; // licznik sumy
    for (let row = 0; row < matrix.length; row++) { // przejscie po tablicy
        const currRow = matrix[row]; // skrócenie zapisu
        for (let col = 0; col < currRow.length; col++) { //przejscie po elementach
            if (currRow[col] === 0) { // jesli element jest równy 0
                if (row + 1 < matrix.length) { // jesli jest następna tablica
                    matrix[row + 1][col] = 0; // ustaw jej element na 0
                }
            } else {
                sum += currRow[col]; // w przeciwnym wypadku dodaj do sumy element
            }
        }
    }
    return sum; // zwroc wynik
}

matrix = [
    [1, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
];

console.log(matrixElementsSum(matrix));