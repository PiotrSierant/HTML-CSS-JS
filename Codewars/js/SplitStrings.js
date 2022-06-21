function solution(str){
    const array_str = [];
    for (let i = 0; i < str.length; i++) {
        console.log(i, i+2);
        let new_str = str.substring(i, i+2);
        if (new_str.length === 1) {
            array_str.push(new_str + "_");
        } else {
            array_str.push(new_str);
        }
        i++
    }
    return array_str
}
console.log(solution("aabbcc"));
console.log(solution("aabbc"));

//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']