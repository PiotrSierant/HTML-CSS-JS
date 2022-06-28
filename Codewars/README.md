# Jaden Casing Strings
___
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

* Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
* Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/JadenCasingStrings.js)

```javascript
String.prototype.toJadenCase = function () {
    let CamelCase = [];
    let words = this.toLowerCase().split(' ');
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        CamelCase.push(word[0].toUpperCase() + word.slice(1));
    }
    return CamelCase.join(" ");
}
```
# Convert string to camel case
___
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples:

* **_[2, 4, 0, 100, 4, 11, 2602, 36]_**
Should return: **11 (the only odd number)**

* **_[160, 3, 1719, 19, 11, 13, -21]_**
Should return: **160 (the only even number)**


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/FindTheParityOutlier.js)

```javascript
function findOutlier(integers){
    let oddNumbers = [];
    let evenNumbers = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) { oddNumbers.push(integers[i]); } else { evenNumbers.push(integers[i]); }
    }
    if (oddNumbers.length > evenNumbers.length) { return evenNumbers[0] } else { return oddNumbers[0] }
}
```
# Find The Parity Outlier
___
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* **'abc'** =>  **_['ab', 'c_']_**
* **'abcdef'** => **_['ab', 'cd', 'ef']_**

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/SplitStrings.js)

```javascript
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
```

# Disemvowel Trolls
___
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: 
* For this kata y isn't considered a vowel.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/DisemvowelTrolls.js)

```javascript
function disemvowel(str) {
    return str.replace(/[aoieu]/gi,"");
}
const sentence =  "This website is for losers LOL!";
console.log(disemvowel(sentence));
```

# Highest and Lowest
___
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Notes:
* All numbers are valid Int32, no need to validate them.
* There will always be at least one number in the input string.
* Output string must be two numbers separated by a single space, and highest number is first.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/HighestAndLowest.js)

```javascript
function highAndLow(string){
    const array = string.split(" ").map(function (element){
        return Number(element);
    });
    return Math.max(...array) + " " + Math.min(...array)
}
function highAndLow1(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}
```

# Find the divisors
___
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Notes:
* All numbers are valid Int32, no need to validate them.
* There will always be at least one number in the input string.
* Output string must be two numbers separated by a single space, and highest number is first.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/Codewars/js/FindTheDivisors.js)

```javascript
function divisors(number){
    let result = [];
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        return number + " is prime";
    }
    return result;
}
```

