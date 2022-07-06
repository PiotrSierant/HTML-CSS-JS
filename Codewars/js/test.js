function oodCount(n) {
    const even = [];
    for (let i = 0; i < n.length; i++) {
        if (i < n && i % 2 !== 0) {
            even.push(i);
        }
    }
    return even.length;
}

const numerki = [1,2,3,4,5,6,7,8,9,10];
console.log(oodCount(numerki));