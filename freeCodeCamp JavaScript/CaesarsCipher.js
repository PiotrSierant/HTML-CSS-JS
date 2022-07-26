function rot13(str) {
    let charCode = 0;
    let strArr = [];
    strArr = str.split(""); // split the string into array
    for (let i = 0; i < strArr.length; i++) {
        charCode = strArr[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            if (charCode > 77) {
                charCode = charCode - 13;
            }
            else {
                charCode = charCode + 13;
            }
            strArr.splice(i,1,String.fromCharCode(charCode));
        }
    }
    return strArr.join('');
}

rot13("SERR PBQR PNZC");