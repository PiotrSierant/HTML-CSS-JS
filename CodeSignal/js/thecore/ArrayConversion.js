function solution(inputArray) {
    let result = [...inputArray];

    const add = (a,b) => a+b;
    const mul = (a,b) => a*b;

    for(let flip = true; result.length > 1; flip=!flip) {
        let next = [];
        let op = flip ? add : mul;
        for(let i = 0; i < result.length-1; i+=2) {
            next.push(op(result[i],result[i+1]));
        }
        result=[...next];
    }
    return result[0];
}