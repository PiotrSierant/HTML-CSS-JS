function solution(inputString) {
    const alphabet = [];

    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    const letters = Array(alphabet.length).fill(0);

    for (let letter of inputString) {
        letters[alphabet.indexOf(letter)]++;
    }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i + 1] > letters[i]) {
            return false;
        }
    }

    return true;
}