function solution(picture) {
    const newArray = picture.map(element => '*' + element + '*')
    const startAndEnd = '*'.repeat(picture[0].length + 2)
    return [startAndEnd, ...newArray, startAndEnd]
}
