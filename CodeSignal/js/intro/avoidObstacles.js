function solution(inputArray) {
    for(let i=0; ; i++) {
        if(inputArray.every(element => element % i))
            return i
    }
}