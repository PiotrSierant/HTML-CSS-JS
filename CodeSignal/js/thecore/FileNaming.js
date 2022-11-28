function solution(names) {
    let givenNames = new Set()
    return names.map(name => {
        let newName = name
        let i=1
        while(givenNames.has(newName)) {
            newName = name +"("+ i++ +")"
        }
        givenNames.add(newName)
        return newName
    })
}