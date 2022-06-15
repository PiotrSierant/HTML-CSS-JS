// Given two strings, find the number of common characters between them.
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
    let string1 = [...s1].sort();
    let string2 = [...s2].sort();
    let total = 0;
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                total += 1;
                i++;
            }
        }
    }
    return total
}

const s1 = "abca" ;
const s2 = "xyzbac";

console.log(solution(s1, s2));