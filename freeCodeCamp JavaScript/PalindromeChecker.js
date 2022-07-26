function palindrome(str) {
    let newString = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    let reverseString = newString.split('').reverse().join('');
    return newString === reverseString;
}
palindrome("eye");