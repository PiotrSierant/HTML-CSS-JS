String.prototype.toJadenCase = function () {
    let CamelCase = [];
    let words = this.toLowerCase().split(' ');
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        CamelCase.push(word[0].toUpperCase() + word.slice(1));
    }
    return CamelCase.join(" ");
}