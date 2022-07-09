# Reverse in parentheses 
___
Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.

Example:

* For **_inputString = "(bar)"_**, the output should be
**_solution(inputString) = "rab"_**;
* For **_inputString = "foo(bar)baz"_**, the output should be
**_solution(inputString) = "foorabbaz"_**;
* For **_inputString = "foo(bar)baz(blim)"_**, the output should be
**_solution(inputString) = "foorabbazmilb"_**;
* For **_inputString = "foo(bar(baz))blim"_**, the output should be
**_solution(inputString) = "foobazrabblim"_**.
Because **_"foo(bar(baz))blim"_** becomes _**"foo(barzab)blim"**_ and then **_"foobazrabblim"_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/reverseInParentheses.js)
```javascript
function solution(inputString) {
    while(inputString.includes("(")) {
        const findEnd = inputString.indexOf(")");
        const findStart = inputString.lastIndexOf("(", findEnd);
        const reverse = inputString.slice(findStart + 1, findEnd).split('').reverse().join('');
        inputString = inputString.slice(0, findStart) + reverse + inputString.slice(findEnd + 1);
    }
    return inputString;
}
```

# Sort by height
___
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example:
* For **_a = [-1, 150, 190, 170, -1, -1, 160, 180]_**, the output should be
**_solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/SortByHeight.js)

```javascript
function solution(a) {
  let sorted = a.filter(x => {
    if(x !== -1) {
      return x;
    }
  }).sort((a, b) => (a-b));
  let sortedCount = 0;
  for(let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sorted[sortedCount];
      sortedCount = sortedCount + 1;
    }
  }
  return a;
}
```
# Almost Increasing Sequence
___
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: 
_sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing._

* For sequence = **[1, 3, 2, 1]**, the output should be
**solution(sequence) = false.**
There is no one element in this array that can be removed in order to get a strictly increasing sequence.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/almostIncreasingSequence.js)

```javascript
function solution(sequence){
    let greaterThanTheNext = 0;
    for(let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) { 
            greaterThanTheNext++;
            if (greaterThanTheNext > 1) {
                return false;
            }
            if (sequence[i] <= sequence[i - 2]) {
                if (sequence[i + 1] <= sequence[i - 1]) { 
                    return false;
                }
            }
        }
    }
    return true;
}
```

# Make Array Consecutive 2
___
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

* For statues = **[6, 2, 3, 8]**, the output should be
  **solution(statues) = 3**.

Ratiorg needs statues of sizes _**4**_, **_5_** and **_7_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MakeArrayConsecutive2.js)

```javascript
function solution(statues) {
    let maxValue = Math.max.apply(null, statues);
    let minValue = Math.min.apply(null, statues);

    let result = maxValue - minValue;
    return result - statues.length + 1;
}
```

# Check Palindrom
___
Given the string, check if it is a palindrome.

* For **_inputString = "aabaa"_**, the output should be
  **_solution(inputString) = true;_**
* For **_inputString = "abac"_**, the output should be
  **_solution(inputString) = false;_**
* **_For inputString = "a"_**, the output should be
  **_solution(inputString) = true._**

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Palindrom.js)

```javascript
function palindrom(inputString) {
    let newString = inputString.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    console.log(newString)
    let reverseString = newString.split('').reverse().join('');
    console.log(reverseString)
    return newString === reverseString;
}

function palindrom2(inputString) {
    const newStr = [...inputString];
    return newStr.reverse().join("") == newStr.join("")
}
```

# Adjacent Elements Product
___
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

* For **_inputArray = [3, 6, -2, -5, 7, 3]_**, the output should be
**_solution(inputArray) = 21_**.

**7** and **3** produce the largest product.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AdjacentElements.js)

```javascript
function solution(inputArray) {
    let result = -999999999;
    for (let i = 0; i < inputArray.length; i++){
        newresult = inputArray[i] * inputArray[i+1]
        if ( newresult > result) {
            result = newresult;
        }
    }
    return result;
}
```

# All Longest Strings
___
Given an array of strings, return another array containing all of its longest strings.

* For **_inputArray = ["aba", "aa", "ad", "vcd", "aba"]_**, the output should be
**_solution(inputArray) = ["aba", "vcd", "aba"]_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AllLongestStrings.js)

```javascript
function solution(inputArray) {
  let arr = inputArray;
  let longest = 0;
  let longestArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= longest) {
      longest = arr[i].length;
    }
  }
  for(let j = 0; j < arr.length; j++) {
    if(arr[j].length === longest) {
      longestArr.push(arr[j]);
    }
  }
  return longestArr;
}
```

# Common Character Count
___
Given two strings, find the number of common characters between them.

For _**s1 = "aabcc"**_ and _**s2 = "adcaa"**_, the output should be
**_solution(s1, s2) = 3._**

Strings have _**3**_ common characters - _**2 "a"s**_  and _**1 "c"**_.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/commonCharacterCount.js)

```javascript
function solution(s1, s2) {
  let string1 = [...s1].sort();
  let string2 = [...s2].sort();
  let total = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        total += 1;
        i++;
      }
    }
  }
  return total
}
```

# Shape Area
___
Below we will define an **n**-interesting polygon. Your task is to find the area of a polygon for a given **n.**

A **1**-interesting polygon is just a square with a side of length **1**. An n-interesting polygon is obtained by taking the **n - 1**-interesting polygon and appending **1**-interesting polygons to its rim, side by side. You can see the **1-, 2-, 3-** and **4**-interesting polygons in the picture below.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/shapeArea.js)

```javascript
function solution(n) {
  return 2*n*(n-1) +1;
}
```

# Matrix Elements Sum
___
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, **or any of the rooms below any of the free rooms.**

Given **matrix**, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a **0**).

* For
```javascript
matrix = 
[[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]]
```
the output should be **_solution(matrix) = 9_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/matrixElementsSum.js)

```javascript
function matrixElementsSum(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    const currRow = matrix[row];
    for (let col = 0; col < currRow.length; col++) {
      if (currRow[col] === 0) {
        if (row + 1 < matrix.length) {
          matrix[row + 1][col] = 0;
        }
      } else {
        sum += currRow[col];
      }
    }
  }
  return sum;
}
```

# isLucky
___
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number **_n_**, determine if it's **_lucky_** or not.

Example:
* For **_n = 1230_**, the output should be
_**solution(n) = true**_;
* For **_n = 239017_**, the output should be
**_solution(n) = false_**.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/isLucky.js)

```javascript
function solution(n) {
  let lengthNumber = n.toString().length;
  let numberToString = n.toString();
  let result = 0;
  let result2 = 0;
  if (lengthNumber % 2 === 0) {
    let firstPart = numberToString.substring(0, lengthNumber / 2).split('');
    let secondPart = numberToString.substring(lengthNumber / 2).split('');
    for (let i = 0; i < firstPart.length; i++) {
      result = result + +firstPart[i];
      result2 = result2 + +secondPart[i];
    }
    return result === result2;
  } else {
    return false;
  }
}
```