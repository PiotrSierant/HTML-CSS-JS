function solution(inputString) {
    return inputString.split("").map(x => String.fromCharCode(219-x.charCodeAt(0))).join("")
}
