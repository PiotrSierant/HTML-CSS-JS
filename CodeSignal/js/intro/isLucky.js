function solution(n) {
    let lengthNumber = n.toString().length;
    let numberToString = n.toString();
    let result = 0;
    let result2 = 0;
    if (lengthNumber % 2 === 0) {
        let firstPart = numberToString.substring(0, lengthNumber / 2).split('');
        let secondPart = numberToString.substring(lengthNumber / 2).split('');
        for (let i = 0; i < firstPart.length; i++) {
            result = result + +firstPart[i];
            result2 = result2 + +secondPart[i];
        }
        return result === result2;
    } else {
        return false;
    }
}
solution(9912);
solution(9999);