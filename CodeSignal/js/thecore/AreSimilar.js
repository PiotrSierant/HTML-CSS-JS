function solution(a, b) {
    const newA = a.filter((element,index) => element !== b[index])
    const newB = b.filter((element,index) => element !== a[index])
    return newA.length === 0 || (newA.length === 2 && newA.join('') === newB.reverse().join(''))
}