function solution(picture) {
    picture = picture.map(f=>'*'.concat(f,'*'))
    let lengthRowArray = picture[0].length; // 5
    picture.unshift(Array(lengthRowArray).fill('*').join('')); // dodaj na początek
    picture.push(Array(lengthRowArray).fill('*').join(''))
    return picture;
}

picture = ["abc",
    "ded"];
console.log(solution(picture))