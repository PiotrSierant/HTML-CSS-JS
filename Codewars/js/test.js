const validatePhone = (phoneNumber) => {
    let phoneNumberLength = 9;
    let toNumber = Number(phoneNumber);
    return !(phoneNumber.length !== phoneNumberLength || isNaN(toNumber))
}

console.log(validatePhone("123123"))
console.log(validatePhone("asdda"))
console.log(validatePhone("1233a111"))
console.log(validatePhone("12312"))
console.log(validatePhone("1231a"))
console.log(validatePhone("123112345"))
