function solution(param1, param2) {
    let result = '';
    while(param1 || param2){
        result = (((param1%10)+(param2%10))%10).toString() + result;
        param1 = Math.floor(param1/10);
        param2 = Math.floor(param2/10);
    }
    return Number(result);
}