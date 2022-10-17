function solution(inputString) {
    let count = 0;
    for(let i = 0;  i < inputString.length; i++) {
        if(!/\d/.test(inputString[i])) {
            break
        }
        count++;
    }
    return inputString.substring(0,count);
}