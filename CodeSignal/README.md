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