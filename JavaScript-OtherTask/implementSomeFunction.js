function some(array, fn) {
    return array.reduce(function (previousValue, element) {
        if (fn(element)) {
            return true;
        } else {
            return previousValue;
        }
    }, false);
}
const array1 = [3, 3, 3];
console.log(some(array1, function (element) { return element % 2 === 0; })); // false
const array2 = [2, 2, 2];
console.log(some(array2, function (element) { return element % 2 === 0; })); // true
const array3 = [1, 2, 3, 4, 5, 5, 5];
console.log(some(array3, function (element) { return element % 2 === 0; })); // true
const array4 = [1, 3, 5, 5, 5, 5, 5];
console.log(some(array4, function (element) { return element % 2 === 0; })); // false
const array5 = [1, 3, 5, 5, 5, 5, 2];
console.log(some(array5, function (element) { return element % 2 === 0; })); // true
const array6 = [];
console.log(some(array6, function (element) { return element % 2 === 0; })); // true

/* without reduce function.
for (let i = 0; i < array.length; i++) {
    const element = array[i]; // element z tablicy
    if (fn(element)) { // jeśli funkcja zwróci mi true wykonaj if'a
        return true;
    }
}
return false;
---------------------------
let countTrue = 0;
// countTrue++;
if (countTrue > 0) {
    return true;
} */