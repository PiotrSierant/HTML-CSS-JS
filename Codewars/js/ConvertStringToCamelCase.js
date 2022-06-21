function toCamelCase(str){
    let newStr = str.split(/[^A-Z\d]/ig);
    let CamelCase = [];
    for (let i = 0; i < newStr.length; i++) {
        if (typeof newStr[i][0] === "string") {
            if ( i === 0 ) {
                CamelCase.push(newStr[i][0] + newStr[i].substring(1));
            } else {
                CamelCase.push(newStr[i][0].toUpperCase() + newStr[i].substring(1));
            }
        }
    }
    return CamelCase.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"