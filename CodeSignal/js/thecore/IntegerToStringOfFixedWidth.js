function solution(number, width) {
    return `${number}`.padStart(width, '0').slice(-width)
}
