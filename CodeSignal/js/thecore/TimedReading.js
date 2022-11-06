function solution(maxLength, text) {
    return text.split(/[^a-z]+/i).filter(x => x.length > 0 && x.length <= maxLength).length
}