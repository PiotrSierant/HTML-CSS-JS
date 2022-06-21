# Split Strings
___
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


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

