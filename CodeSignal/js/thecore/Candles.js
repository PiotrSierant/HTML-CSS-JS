function solution(candlesNumber, makeNew) {
    let leftover = candlesNumber;
    while(leftover >= makeNew){
        let nc = Math.floor(leftover/makeNew);
        candlesNumber += nc;
        leftover = nc + leftover%makeNew;
    }
    return candlesNumber;
}