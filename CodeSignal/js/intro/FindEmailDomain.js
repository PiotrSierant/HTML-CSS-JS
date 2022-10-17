function solution(address) {
    return address.split('@').at(-1);
}

console.log(solution('prettyandsimple@example.com')); // example.com
console.log(solution('fully-qualified-domain@codesignal.com')); // codesignal.com