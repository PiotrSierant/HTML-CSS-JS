function solution(a) {
    let num = a.reduce((a,b)=> a+b,0)
    return a.map(elm => {
        if(elm === 1) num -=1
        return num%2
    })
}
