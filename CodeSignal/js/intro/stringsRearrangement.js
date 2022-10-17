function solution(inputArray) {
    let res1 = 0;
    let res2 = 0;
    let count = 0;
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++){
        sum = 0;
        for(let j = 0; j < inputArray.length; j++){
            count = 0;
            for(let a = 0; a < inputArray[i].length; a++){
                if(inputArray[i][a] !== inputArray[j][a]) count++;
            }
            if(count === 1) sum++;
        }
        if(sum === 1) res1 ++;
        else if(sum > 1) res2++;
    }
    if(res1 + res2 === inputArray.length){
        return !(res1 % 2 !== 0 && inputArray.length % 2 === 0 || res1 === inputArray.length);
    }
    else return false;
}