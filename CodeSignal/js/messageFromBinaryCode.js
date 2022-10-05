function solution(code) {
    let message = '';
    for (let i = 0; i < code.length; i=i+8){
        message += String.fromCharCode(parseInt(code.slice(i,i+8),2));
    }
    return message;
}
