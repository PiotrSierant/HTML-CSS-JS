function solution(inputArray, result) {
    let res = result.split("")
    return inputArray.reduce((ti, ai, i) =>
        ti + inputArray.slice(i + 1).reduce((tj, aj, j) =>
            res.every((l, k) => l == ai[k] || l == aj[k]) ? tj + 1 : tj
            , 0)
        , 0)
}