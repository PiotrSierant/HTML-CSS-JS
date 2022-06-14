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

