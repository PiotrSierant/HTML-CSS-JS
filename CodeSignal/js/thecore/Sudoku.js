const solution = grid =>
    (fn => fn(grid) &&
        fn(grid.map((val, idx) => val.map((_, i) => grid[i][idx]))) &&
        fn(grid.map((val, idx) => val.map((_, i) => grid[(idx / 3 ^ 0) * 3 + i / 3 ^ 0][idx % 3 * 3 + i % 3]))))
        (arr => arr.every(val => new Set(val).size === 9 && val.every(v => [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(v))));
