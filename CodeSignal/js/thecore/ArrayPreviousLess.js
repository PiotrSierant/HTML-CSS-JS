function solution(items) {
    return items.map((e, i) =>
        items.slice(0, i).reverse().find(v => v < e) || -1)
}