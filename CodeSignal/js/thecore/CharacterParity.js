function solution(symbol) {
    return isNaN(symbol) && 'not a digit' || symbol % 2 && 'odd' || 'even';
}