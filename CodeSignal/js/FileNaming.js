function solution(names) {
    let newArr = [];
    for (let element in names) {
        let count = 0;
        let tmp = names[element];
        if (newArr.indexOf(names[element]) > -1) {
            while (newArr.indexOf(names[element]) > -1) {
                count++;
                names[element] = tmp + "(" + count + ")";
            }
        }
        newArr.push(names[element]);
    }
    return newArr;
}

const names = ["doc", "doc", "image", "doc(1)", "doc"]
console.log(solution(names)) // ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].