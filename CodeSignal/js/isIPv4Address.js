function solution(inputString) {
    const arr = inputString.split('.').filter(element =>  element !== '01' && element !== '00')
    if (arr.length === 4) {
        return arr.every( number => {
            return number >= 0 && number <= 255 && number !== '';

        })
    }
    return false
}
