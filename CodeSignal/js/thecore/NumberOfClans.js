function solution(d, k) {
    let mySet = new Set();
    for(let i=1; i<=k; i+=1) {
        mySet.add((d.map(elm=> (i%elm) === 0 ? 0 : 1)).toString())
    }
    return mySet.size
}