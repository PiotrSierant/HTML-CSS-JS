# Decipher
___
Consider the following ciphering algorithm:

* For each character replace it with its code.
* Concatenate all of the obtained numbers.

Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Example:
* For `cipher = "10197115121"`, the output should be
  `solution(cipher) = "easy"`.

Explanation: `charCode('e') = 101`, `charCode('a') = 97`, `charCode('s') = 115` and `charCode('y') = 121`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Decipher.js)
```javascript
function solution(cipher) {
  return String.fromCharCode(...cipher.match(/1..|../g))
}

```

# HigherVersion
___
Given two version strings composed of several non-negative decimal fields separated by periods (`.`), both strings contain equal number of numeric fields. Return `true` if the first version is higher than the second version and `false` otherwise.

The syntax follows the regular semver ordering rules:

```
1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
< 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
```
There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like `100.020.003` (it would instead be given as `100.20.3`).

Example:
* For `ver1 = "1.2.2"` and `ver2 = "1.2.0"`, the output should be
`solution(ver1, ver2) = true`;
* For `ver1 = "1.0.5"` and `ver2 = "1.1.0"`, the output should be
`solution(ver1, ver2) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/HigherVersion.js)
```javascript
function solution(ver1, ver2) {
  let ver1sp = ver1.split('.').map(Number);
  let ver2sp = ver2.split('.').map(Number);
  for(let i in ver1sp) {
    if (ver2sp[i]<ver1sp[i]) return true;
    if (ver2sp[i]>ver1sp[i]) return false;
  }
  return false;
}
```

# StolenLunch
___
When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

Example:
For `note = "you'll n4v4r 6u4ss 8t: cdja"`, the output should be
`solution(note) = "you'll never guess it: 2390"`.


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/StolenLunch.js)
```javascript
function solution(note) {
  return note.replace(/[0-9a-j]/g, (c)=>'0123456789abcdefghij'['abcdefghij0123456789'.indexOf(c)])
}
```

# Cipher26
___
You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

* Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
* The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.

Now that you know how the message was encrypted, implement the algorithm to decipher it.

Example:
* For `message = "taiaiaertkixquxjnfxxdh"`, the output should be
`solution(message) = "thisisencryptedmessage"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Cipher26.js)
```javascript
function solution(message) {
  let res = "";
  let sum = 0;
  for (let i of message){
    let a = i.charCodeAt(0)-97;
    a -= sum;
    while (a<0)
      a+=26;
    res+=String.fromCharCode(a+97);
    sum+=a;
  }
  return res;
}
```

# NewNumeralSystem
___
Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

Example:
* For `number = 'G'`, the output should be
`solution(number) = ["A + G", "B + F", "C + E", "D + D"]`.

Translating this into the decimal numeral system we get: `number = 6`, so it is `["0 + 6", "1 + 5", "2 + 4", "3 + 3"]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/NewNumeralSystem.js)
```javascript
function solution(number) {
  const x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let id = x.indexOf(number);
  let i = 0;
  const out = [];
  while (i <= id) {
    out.push(`${x[i]} + ${x[id]}`);
    i++;
    id--;
  }
  return out;
}
```

# ReflectString
___
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example:
* For `inputString = "name"`, the output should be
`solution(inputString) = "mznv"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ReflectString.js)
```javascript
function solution(inputString) {
  return inputString.split("").map(x => String.fromCharCode(219-x.charCodeAt(0))).join("")
}
```

# CharacterParity
___
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example:
* For `symbol = '5'`, the output should be
`solution(symbol) = "odd"`;
* For `symbol = '8'`, the output should be
`solution(symbol) = "even"`;
* For `symbol = 'q'`, the output should be
`solution(symbol) = "not a digit"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CharacterParity.js)
```javascript
function solution(symbol) {
  return isNaN(symbol) && 'not a digit' || symbol % 2 && 'odd' || 'even';
}
```

# ThreeSplit
___
You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

It is guaranteed that the sum of all elements in the array is divisible by 3.

Example:
* For `a = [0, -1, 0, -1, 0, -1]`, the output should be
`solution(a) = 4`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ThreeSplit.js)
```javascript
function solution(a) {
  const third = a.reduce((pre, val) => pre + val, 0) / 3;
  let cur = 0, part = 0, res = 0;
  for (let el of a.slice(0, -1)) {
    cur += el;
    if (cur === 2 * third) res += part;
    if (cur === third) part++;
  }
  return res;
}
```

# AdaNumber
___
Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.

Example:
* For `line = "123_456_789"`, the output should be
`solution(line) = true`;
* For `line = "16#123abc#"`, the output should be
`solution(line) = true`;
* For `line = "10#123abc#"`, the output should be
`solution(line) = false`;
* For `line = "10#10#123ABC#"`, the output should be
`solution(line) = false`;
* For `line = "10#0#"`, the output should be
`solution(line) = true`;
* For `line = "10##"`, the output should be
`solution(line) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AdaNumber.js)
```javascript
function solution(line) {
  let w = '0123456789abcdef'
  let a = line.replace(/_/g, '').split('#')
  let l = a.length

  if (l === 1) return /^\d+$/.test(a[0])

  if (a[0] < 2 || a[0] > 16) return false

  if (l === 3) return RegExp('^[' + w.slice(0, a[0]) + ']+$', 'gi').test(a[1])

  return false
}
```

# AreSimilar
___
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays `a` and `b`, check whether they are similar.

Example:
* For `a = [1, 2, 3]` and `b = [1, 2, 3]`, the output should be
`solution(a, b) = true`.

The arrays are equal, no need to swap any elements.

* For `a = [1, 2, 3]` and `b = [2, 1, 3]`, the output should be
`solution(a, b) = true`.

We can obtain b from a by swapping 2 and 1 in b.

* For `a = [1, 2, 2]` and `b = [2, 1, 1]`, the output should be
`solution(a, b) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AreSimilar.js)
```javascript
function solution(a, b) {
  const newA = a.filter((element,index) => element !== b[index])
  const newB = b.filter((element,index) => element !== a[index])
  return newA.length === 0 || (newA.length === 2 && newA.join('') === newB.reverse().join(''))
}
```

# IntegerToStringOfFixedWidth
___
Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

Example:
* For `number = 1234` and `width = 2`, the output should be
`solution(number, width) = "34"`;
* For `number = 1234` and `width = 4`, the output should be
`solution(number, width) = "1234"`;
* For `number = 1234` and `width = 5`, the output should be
`solution(number, width) = "01234"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IntegerToStringOfFixedWidth.js)
```javascript
function solution(number, width) {
  return `${number}`.padStart(width, '0').slice(-width)
}
```

# ElectionsWinners
___
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer `k` equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

Example:
* For `votes = [2, 3, 5, 2]` and `k = 3`, the output should be
  `solution(votes, k) = 2`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ElectionsWinners.js)
```javascript
function solution(votes, k) {
  const votesMax = Math.max(...votes);
  const indexes = [];

  for (let index = 0; index < votes.length; index++) {
    if (votes[index] === votesMax) {
      indexes.push(index);
    }
  }

  if(k === 0 && indexes.length === 1) {
    return 1
  }

  const raisedVotes = votes.map(element => {
    return element + k;
  })
  const allTheVotesTheyCanWin = raisedVotes.filter(element => {
    return element > votesMax;
  })

  return allTheVotesTheyCanWin.length;
}
```

# TimedReading
___
Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than `maxLength`, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the `text` he has read, no longer than `maxLength`.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

Example:
* For `maxLength = 4` and
  `text = "The Fox asked the stork, 'How is the soup?'"`,
  the output should be
  `solution(maxLength, text) = 7`.

The boy has read the following words: `"The", "Fox", "the", "How", "is", "the", "soup"`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/TimedReading.js)
```javascript
function solution(maxLength, text) {
  return text.split(/[^a-z]+/i).filter(x => x.length > 0 && x.length <= maxLength).length
}
```

# SwitchLights
___
`N` candles are placed in a row, some of them are initially lit. For each candle from the `1st` to the `Nth` the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

Example:
* For `a = [1, 1, 1, 1, 1]`, the output should be
  `solution(a) = [0, 1, 0, 1, 0]`.
* For `a = [0, 0]`, the output should be
  `solution(a) = [0, 0]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/SwitchLights.js)
```javascript
function solution(a) {
  let num = a.reduce((a,b)=> a+b,0)
  return a.map(elm => {
    if(elm === 1) num -=1
    return num%2
  })
}
```

# AddBorder
___
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:
* For

```
picture = ["abc",
          "ded"]
```
the output should be

```
solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AddBorder.js)
```javascript
function solution(picture) {
    const newArray = picture.map(element => '*' + element + '*')
    const startAndEnd = '*'.repeat(picture[0].length + 2)
    return [startAndEnd, ...newArray, startAndEnd] 
}
```

# MinimalNumberOfCoins
___
You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

The coin values available in Bananaland are stored in a sorted array `coins`. `coins[0] = 1`, and for each `i (0 < i < coins.length) coins[i]` is divisible by `coins[i - 1]`. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's `price`.

Example:
* For `coins = [1, 2, 10]` and `price = 28`, the output should be
  `solution(coins, price) = 6`.

You have to use `10` twice, and `2` four times.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MinimalNumberOfCoins.js)
```javascript
function solution(coins, price) {
  let coinCount = 0;

  for (let i = coins.length - 1; i >=0; i--) {
    while (price >= coins[i]) {
      price -= coins[i];
      coinCount++;
    }
  }
  return coinCount;
}
```

# AlphabetSubsequence
___
Check whether the given string is a subsequence of the plaintext alphabet.

Example:
* For `s = "effg"`, the output should be `solution(s) = false`;
* For `s = "cdce"`, the output should be `solution(s) = false`;
* For `s = "ace"`, the output should be `solution(s) = true`;
* For `s = "bxz"`, the output should be `solution(s) = true`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AlphabetSubsequence.js)
```javascript
function solution(s) {
  const array = s.split('').map(element => element.charCodeAt());
  for(let i = 0; i < array.length; i++) {
    if(array[i] >= array[i+1]) {
      return false;
    }
  }
  return true;
}
```

# HouseOfCats
___
There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has `2` legs and each cat has `4` legs.

Example:
* For `legs = 6`, the output should be `solution(legs) = [1, 3]`.

There could be either `1` cat and `1` person `(4 + 2 = 6)` or `3` people `(2 * 3 = 6)`.

* For `legs = 2`, the output should be `solution(legs) = [1]`.

There can be only `1` person.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/HouseOfCats.js)
```javascript
function solution(legs) {
  let result = [];
  for (let i = Math.floor((legs % 4) / 2); i <= Math.floor(legs / 2); i += 2) {
    result.push(i);
  }
  return result;
}
```

# AllLongestStrings
___
Given an array of strings, return another array containing all of its longest strings.

Example:
* For `inputArray = ["aba", "aa", "ad", "vcd", "aba"]`, the output should be `solution(inputArray) = ["aba", "vcd", "aba"]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AllLongestStrings.js)
```javascript
function solution(inputArray) {
  const arrayOfLength = inputArray.map(element => element.length);
  const theBiggestLength = Math.max(...arrayOfLength);
  return inputArray.filter(element => element.length === theBiggestLength)
}
```

# HouseNumbersSum
___
A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number `0` written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one `0` house on the path.

Example:
* For `inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2]`, the output should be
  `solution(inputArray) = 11.`

The answer was obtained as `5 + 1 + 2 + 3 = 11.`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/HouseNumbersSum.js)
```javascript
function solution(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((total, value) => {
        return total + value;
    }, 0);
}
```

# NumberOfClans
___
Let's call two integers `A` and `B` friends if each integer from the array `divisors` is either a divisor of both `A` and `B` or neither `A` nor `B`. If two integers are friends, they are said to be in the same clan. How many clans are the integers from `1` to `k`, inclusive, broken into?

Example:
* For `divisors = [2, 3]` and `k = 6`, the output should be
  `solution(divisors, k) = 4`.


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/NumberOfClans.js)
```javascript
function solution(d, k) {
  let mySet = new Set();
  for(let i=1; i<=k; i+=1) {
    mySet.add((d.map(elm=> (i%elm) === 0 ? 0 : 1)).toString())
  }
  return mySet.size
}
```

# MostFrequentDigitSum
___
A `step(x)` operation works like this: it changes a number `x` into `x - s(x)`, where `s(x)` is the sum of `x`'s digits. You like applying functions to numbers, so given the number `n`, you decide to build a decreasing sequence of numbers: `n`, `step(n)`, `step(step(n))`, etc., with `0` as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits `(s(x))`. Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

Example:
* For `n = 88`, the output should be `solution(n) = 9`.
* For `n = 8`, the output should be `solution(n) = 8`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MostFrequentDigitSum.js)
```javascript
function solution(n) {
  return n>=999?18:n>=9?9:n
}
```

# DifferentSquares
___
Given a rectangular matrix containing only digits, calculate the number of different `2 × 2` squares in it.

Example:
* For
```
matrix =  [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
```
the output should be `solution(matrix) = 6`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/DifferentSquares.js)
```javascript
function solution(matrix) {
  s = new Set();
  for (i = 0; i < matrix.length - 1; i++) {
    for (j = 0; j < matrix[i].length - 1; j++) {
      s.add("" + matrix[i][j] + matrix[i][j + 1] + matrix[i + 1][j] + matrix[i + 1][j + 1])
    }
  }
  return s.size
}
```

# NumbersGrouping
___
You are given an array of integers that you want distribute between several groups. The first group should contain numbers from `1` to `104`, the second should contain those from `104 + 1` to `2 * 104`, ..., the `100th` one should contain numbers from `99 * 104 + 1` to `106` and so on.

All the numbers will then be written down in groups to the text file in such a way that:

* the groups go one after another;
* each non-empty group has a header which occupies one line;
* each number in a group occupies one line.
Calculate how many lines the resulting text file will have.

Example:
* For `a = [20000, 239, 10001, 999999, 10000, 20566, 29999]`, the output should be `solution(a) = 11`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/NumbersGrouping.js)
```javascript
function solution(a) {
  return a.length + new Set(a.map(x=>Math.ceil(x/10000))).size
}
```

# ConstructSquare
___
Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.

Example:
* For `s = "ab"`, the output should be
`solution(s) = 81`.

The largest 2-digit square number with different digits is 81.
* For `s = "zzz"`, the output should be
`solution(s) = -1`.

There are no 3-digit square numbers with identical digits.
* For `s = "aba"`, the output should be
`solution(s) = 900`.

It can be obtained after reordering the initial string into `baa` and replacing "a" with `0` and "b" with `9`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ConstructSquare.js)
```javascript
const solution = s => {
  const fn = val =>
          Object.values([...val].reduce((pre, val) => (pre[val] = -~pre[val], pre), {})).sort().join(``);
  for (let i = (10 ** s.length) ** 0.5 ^ 0; i > 2; i--) {
    if (`${i ** 2}`.length === s.length && fn(`${i ** 2}`) === fn(s)) return i ** 2;
  }
  return -1;
};
```

# CreateAnagram
___
You are given two strings `s` and `t` of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string `t` from the string `s`. A replacement operation is performed by picking exactly one character from the string `s` and replacing it by some other character.

Example:
* For `s = "AABAA"` and `t = "BBAAA"`, the output should be
`solution(s, t) = 1`;
* For `s = "OVGHK"` and `t = "RPGUC"`, the output should be
`solution(s, t) = 4`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CreateAnagram.js)
```javascript
function solution(s, t) {
  for(let x of s){
    t = t.replace(x,"");
  }
  return t.length;
}
```

# IsSubstitutionCipher
___
A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example `bacdef...xyz` will be a simple ciphertext alphabet where `a` and `b` are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

Example:
* For `string1 = "aacb"` and `string2 = "aabc"`, the output should be
`solution(string1, string2) = true`.

* For `string1 = "aa"` and `string2 = "bc"`, the output should be
`solution(string1, string2) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsSubstitutionCipher.js)
```javascript
const solution = (string1, string2) => [...string1].every((v,i) => string1.indexOf(v) === string2.indexOf(string2[i]));
```

# StringsConstruction
___
Given two strings `a` and `b`, both consisting only of lowercase English letters, your task is to calculate how many strings equal to `a` can be constructed using only letters from the string `b`? Each letter can be used only once and in one string only.

Example:
* For `a = "abc"` and `b = "abccba"`, the output should be `solution(a, b) = 2`.
* For `a = "ab"` and `b = "abcbcb"`, the output should be `solution(a, b) = 1`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/StringsConstruction.js)
```javascript
function solution(a, b) {
  const fa = freq(a);
  const fb = freq(b);
  console.log( fa, fb);
  return Object.keys(fa).reduce((result, key) => (
          Math.min( result, Math.floor( (fb[key]? fb[key] : 0 ) / fa[key] ) )
  ), 10000);
}

function freq(s) {
  return s.split('').reduce((result, l) => {
    result[l] = result[l]? result[l] + 1 : 1;
    return result;
  }, {})
}
```

# IsUnstablePair
___
Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames an unstable pair if their ordering depends on the case.

To compare two filenames `a` and `b`, find the first position `i` at which `a[i] ≠ b[i]`. If `a[i] < b[i]`, then `a < b`. Otherwise` a > b`. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

Example:
* For `filename1 = "aa"` and `filename2 = "AAB"`, the output should be
`solution(filename1, filename2) = true`.

Because `"AAB" < "aa"`, but `"AAB" > "AA".`

* For `filename1 = "A"` and `filename2 = "z"`, the output should be
`solution(filename1, filename2) = false`.

Both `"A" < "z"` and `"a" < "z".`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsUnstablePair.js)
```javascript
function solution(filename1, filename2) {
  return (filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase())
}
```

# IsTandemRepeat
___
Determine whether the given string can be obtained by one concatenation of some string to itself.

Example:
* For `inputString = "tandemtandem"`, the output should be `solution(inputString) = true`;
* For `inputString = "qqq"`, the output should be `solution(inputString) = false`;
* For `inputString = "2w2ww"`, the output should be `solution(inputString) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsTandemRepeat.js)
```javascript
function solution(inputString) {
  if(inputString.length % 2 === 1) {
    return false
  }
  const middle = inputString.length / 2
  const firstPart = inputString.slice(0, middle)
  const lastPart = inputString.slice(middle)
  return firstPart === lastPart
}
```

# ProperNounCorrection
___
Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example:
* For `noun = "pARiS"`, the output should be `solution(noun) = "Paris"`;
* For `noun = "John"`, the output should be `solution(noun) = "John"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ProperNounCorrection.js)
```javascript
function solution(noun) {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}
```

# EncloseInBrackets
___
Given a string, enclose it in round brackets.

Example:
* For `inputString = "abacaba"`, the output should be `solution(inputString) = "(abacaba)"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/EncloseInBrackets.js)
```javascript
function solution(inputString) {
    return "(" + inputString + ")"
}
```

# CrosswordFormation
___
You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

* the crossword must contain exactly four words;
* these four words should form four pairwise intersections;
* all words must be written either left-to-right or top-to-bottom;
* the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.

Given `4` words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

Example:
* For `words = ["crossword", "square", "formation", "something"]`, the output should be `solution(words) = 6`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CrosswordFormation.js)
```javascript
function getCombos(w1, w2, w3, w4) {
  let count = 0;
  for (let i = 0; i < w1.length - 1; i ++) {
    for (let j = 0; j < w2.length - 1; j ++) {
      if (w1[i] !== w2[j]) continue;
      for (let k = i + 2; k < w1.length; k++) {
        for (let l = 0; l < w3.length - 1; l++) {
          if (w1[k] !== w3[l]) continue;
          const height = k - i;
          for (let x = j + 2; x< w2.length; x++) {
            for (let y = 0; y < w4.length - 1; y++) {
              if (w2[x] !== w4[y]) continue;
              const width = l + x - j;
              if (y + height < w4.length && w4[y + height] === w3[l + x - j] && width > 1 && height > 1) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  return count;
}

function solution(words) {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue;
      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) continue;
        for (let l = 0; l < 4; l++) {
          if (l === i || l === j || l === k) continue;
          count += getCombos(words[i], words[j], words[k], words[l]);
        }
      }

    }
  }
  return count;
}
```

# RectangleRotation
___
A rectangle with sides equal to even integers `a` and `b` is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point `(0, 0)`, but the sides of the rectangle are not parallel to the axes; instead, they are forming `45` degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example:
* For `a = 6` and `b = 4`, the output should be `solution(a, b) = 23`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/RectangleRotation.js)
```javascript
function solution(a, b) {
  let A = Math.floor(Math.sqrt(a * a / 2));
  let B = Math.floor(Math.sqrt(b * b / 2));
  return (A * B + Math.floor((A + B) / 2)) * 2 + 1;
}
```

# WeakNumbers
___
We define the _weakness_ of number `x` as the number of positive integers smaller than `x` that have more divisors than `x`.

It follows that the _weaker_ the number, the greater overall _weakness_ it has. For the given integer `n`, you need to answer two questions:

* what is the _weakness_ of the _weakest_ numbers in the range `[1, n]`?
* how many numbers in the range `[1, n]` have this _weakness_?
* 
Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

Example:
* For `n = 9`, the output should be `solution(n) = [2, 2]`.

Here are the number of divisors and the specific weakness of each number in range `[1, 9]`:

* __1__: d(1) = 1, weakness(1) = 0;
* __2__: d(2) = 2, weakness(2) = 0;
* __3__: d(3) = 2, weakness(3) = 0;
* __4__: d(4) = 3, weakness(4) = 0;
* __5__: d(5) = 2, weakness(5) = 1;
* __6__: d(6) = 4, weakness(6) = 0;
* __7__: d(7) = 2, weakness(7) = 2;
* __8__: d(8) = 4, weakness(8) = 0;
* __9__: d(9) = 3, weakness(9) = 2.

As you can see, the maximal weakness is `2`, and there are `2` numbers with that _weakness_ level.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/WeakNumbers.js)
```javascript
function solution(n) {
  function divisors(x) {
    let ret = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0)
        ret++;
    }
    return ret;
  }
  let d = Array(n).fill(0);
  let w = 0;
  let wc = 0;
  let t = 0;
  for (let i = 1; i <= n; i++) {
    t = 0;
    d[i - 1] = divisors(i);
    for (let j = 1; j < i; j++) {
      if (d[j - 1] > d[i - 1])
        t++;
    }
    if (t === w) {
      wc++;
    } else if (t > w) {
      w = t;
      wc = 1;
    }
  }
  return [w, wc];
}
```

# ComfortableNumbers
___
Let's say that number `a` feels comfortable with number `b` if `a ≠ b` and `b` lies in the segment `[a - s(a), a + s(a)]`, where `s(x)` is the sum of `x`'s digits.

How many pairs `(a, b)` are there, such that `a < b`, both `a` and `b` lie on the segment `[l, r]`, and each number feels comfortable with the other (so `a` feels comfortable with `b` and `b` feels comfortable with `a`)?

Example:
* For `l = 10` and `r = 12`, the output should be `solution(l, r) = 2`.

Here are all values of s(x) to consider:
* 
  * `s(10) = 1`, so `10` is comfortable with `9` and `11`;
  * `s(11) = 2`, so `11` is comfortable with `9`, `10`, `12` and `13`;
  * `s(12) = 3`, so `12` is comfortable with `9`, `10`, `11`, `13`, `14` and `15`.
  
Thus, there are `2` pairs of numbers comfortable with each other within the segment `[10; 12]`: `(10, 11)` and `(11, 12)`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ComfortableNumbers.js)
```javascript
function solution(l, r) {
  function s(x) {
    return String(x).split('').map(Number).reduce((a, b) => a + b);
  }
  let result = [];
  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= Math.min(r, i + s(i)); j++) {
      if (i === j)
        continue;
      if (i >= j - s(j) && i <= j + s(j)) {
        result.push([i, j]);
      }
    }
  }
  return result.filter((element, id, arr) => id === arr.findIndex(function (fl) {
    return element[0] === fl[0] && element[1] === fl[1];
  })).length;
}
```

# SquareDigitsSequence
___
Consider a sequence of numbers `a0, a1, ..., an`, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element `a0`, find the length of the sequence.
Example:
* For `a0 = 16`, the output should be `solution(a0) = 9`.
* For `a0 = 103`, the output should be `solution(a0) = 4`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/SquareDigitsSequence.js)
```javascript
function solution(a0) {
  let h = [a0];
  let n = String(a0).split('').map(Number).map(el => el * el).reduce((a, b) => a + b);
  while (h.indexOf(n) < 0) {
    h.push(n);
    n = String(n).split('').map(Number).map(el => el * el).reduce((a, b) => a + b);
  }
  return h.length + 1;
}
```

# PagesNumberingWithInk
___
You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the `current` page and `numberOfDigits` left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page `102` but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the `current` page, and that you can't number the last one in the book.

Example:
* For `current = 1` and `numberOfDigits = 5`, the output should be `solution(current, numberOfDigits) = 5`.
  * The following numbers will be printed: `1, 2, 3, 4, 5.`

* For `current = 21` and `numberOfDigits = 5`, the output should be `solution(current, numberOfDigits) = 22`.
  * The following numbers will be printed: `21, 22.`

* For `current = 8` and `numberOfDigits = 4`, the output should be `solution(current, numberOfDigits) = 10`.

  * The following numbers will be printed: `8, 9, 10.`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/PagesNumberingWithInk.js)
```javascript
function solution(current, numberOfDigits) {
  while (numberOfDigits > 0) {
    let n;
    if (current >= 1000) {
      n = Math.floor(numberOfDigits / 4);
      numberOfDigits = 0;
      current += n;
    } else if (current >= 100) {
      n = Math.min(1000 - current, Math.floor(numberOfDigits / 3))
      current += n;
      numberOfDigits -= n * 3;
      if (numberOfDigits < 4)
        numberOfDigits = 0
    } else if (current >= 10) {
      n = Math.min(100 - current, Math.floor(numberOfDigits / 2))
      current += n;
      numberOfDigits -= n * 2;
      if (numberOfDigits < 3)
        numberOfDigits = 0;
    } else {
      n = Math.min(10 - current, numberOfDigits)
      current += n;
      numberOfDigits -= n;
    }
  }
  return current - 1;
}
```

# IsPower
___
Determine if the given number is a power of some non-negative integer.

Example:
* For `n = 125`, the output should be
`solution(n) = true`;
* For `n = 72`, the output should be
`solution(n) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsPower.js)
```javascript
function solution(n) {
  if (n == 1) {
    return true;
  }
  for (let i = 2; i <= n; ++i) {
    let b = i * i;
    while (b <= n) {
      if (b == n) {
        return true;
      }
      b *= i;
    }
  }
  return false;
}
```

# IsSumofConsecutive2
___
Find the number of ways to express `n` as sum of some (at least two) consecutive positive integers.

Example:
* For `n = 9`, the output should be `solution(n) = 2`.

There are two ways to represent `n = 9: 2 + 3 + 4 = 9` and `4 + 5 = 9`.

* For `n = 8`, the output should be `solution(n) = 0`.

There are no ways to represent `n = 8`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsSumofConsecutive2.js)
```javascript
function solution(n) {
  let result = 0;
  for (let i = 2; i < n / 2; i++) {
    i % 2
            ? Math.round(n / i) * i === n && n / i > i / 2 && result++
            : Math.floor(n / i) * i !== n && (Math.floor(n / i) + Math.ceil(n / i)) === (n * 2 / i) && (n / i > i / 2) && result++
  }
  return result;
}
```

# MakeArrayConsecutive2(1)
___
Ratiorg got `statues` of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by `1`. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example:
* For `statues = [6, 2, 3, 8]`, the output should be `solution(statues) = 3`.

Ratiorg needs statues of sizes `4`, `5` and `7`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MakeArrayConsecutive2(1).js)
```javascript
function solution(statues) {
  let min = Math.min(...statues);
  let max = Math.max(...statues);
  let len = statues.length;
  return max - min - len + 1
}
```

# ReplaceMiddle
___
We define the middle of the array `arr` as follows:

* if `arr` contains an odd number of elements, its _middle_ is the element whose index number is the same when counting from the beginning of the array and from its end;
* if `arr` contains an even number of elements, its _middle_ is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

Given array `arr`, your task is to find its _middle_, and, if it consists of two elements, replace those elements with the value of _middle_. Return the resulting array as the answer.

Example:
* For `arr = [7, 2, 2, 5, 10, 7]`, the output should be `solution(arr) = [7, 2, 7, 10, 7]`.

* For `arr = [-5, -5, 10]`, the output should be `solution(arr) = [-5, -5, 10]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ReplaceMiddle.js)
```javascript
function solution(arr) {
    if (arr.length % 2 === 0) {
        let middlePosition = Math.floor(arr.length / 2);
        let middle = arr[middlePosition] + arr[middlePosition - 1];
        arr.splice(middlePosition - 1, 2, middle);
    }
    return arr;
}
```

# IsSmooth
___
We define the middle of the array `arr` as follows:

* if `arr` contains an odd number of elements, its _middle_ is the element whose index number is the same when counting from the beginning of the array and from its end;
* if `arr` contains an even number of elements, its _middle_ is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

An array is called _smooth_ if its first and its last elements are equal to one another and to the _middle_. Given an array `arr`, determine if it is _smooth_ or not.

Example:
* For `arr = [7, 2, 2, 5, 10, 7]`, the output should be s`olution(arr) = true`.

The first and the last elements of arr are equal to `7`, and its middle also equals` 2 + 5 = 7`. Thus, the array is smooth and the output is true.

* For `arr = [-5, -5, 10]`, the output should be `solution(arr) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsSmooth.js)
```javascript
function solution(arr) {
    let middle = Math.floor(arr.length / 2);
    let middleTwoElement = arr[middle] + (arr.length % 2 ? 0 : arr[middle - 1]);
    return arr[0] === middleTwoElement && middleTwoElement === arr[arr.length - 1];
}
```

# RemoveArrayPart
___
Remove a part of a given array between given 0-based indexes `l` and `r` (inclusive).

Example:
* For `inputArray = [2, 3, 2, 3, 4, 5]`, `l = 2`, and `r = 4`, the output should be `solution(inputArray, l, r) = [2, 3, 5]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/RemoveArrayPart.js)
```javascript
function solution(inputArray, l, r) {
  inputArray.splice(l, r - l + 1)
  return inputArray
}
```

# ConcatenateArrays
___
Given two arrays of integers `a` and `b`, obtain the array formed by the elements of `a` followed by the elements of `b`.

Example:
* For `a = [2, 2, 1]` and `b = [10, 11]`, the output should be `solution(a, b) = [2, 2, 1, 10, 11]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ConcatenateArrays.js)
```javascript
function solution(a, b) {
  return a.concat(b)
}
```

# FirstReverseTry
___
Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array `arr`, swap its first and last elements and return the resulting array.

Example:
* For `arr = [1, 2, 3, 4, 5]`, the output should be `solution(arr) = [5, 2, 3, 4, 1]`.


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/FirstReverseTry.js)
```javascript
function solution(arr) {
  if (arr.length < 2) return arr;

  let first = arr.shift();
  let last = arr.pop();
  return [last, ...arr, first];
}
```

# ArrayReplace2
___
Given an array of integers, replace all the occurrences of `elemToReplace` with `substitutionElem`.

Example:

* For `inputArray = [1, 2, 1]`, `elemToReplace = 1`, and `substitutionElem = 3`, the output should be
  `solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ArrayReplace2.js)
```javascript
function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(element => element === elemToReplace ? substitutionElem : element);
}
```

# CreateArray
___
Given an integer `size`, return array of length `size` filled with `1s`.

Example:

* For `size = 4`, the output should be `solution(size) = [1, 1, 1, 1]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CreateArray.js)
```javascript
function solution(size) {
  return Array(size).fill(1);
}
```

# CountBlackCells
___
Imagine a white rectangular grid of `n` rows and `m` columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

* A cell is painted black if it has at least one point in common with the diagonal;
* Otherwise, a cell is painted white.
  Count the number of cells painted black.

Example:
* For `n = 3` and `m = 4`, the output should be `solution(n, m) = 6`.

There are `6` cells that have at least one common point with the diagonal and therefore are painted black.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CountBlackCells.js)
```javascript
function solution(n, m) {
  function gcd(a, b) {
    if(b === 0){
      return a;
    }
    else {
      return gcd(b, a % b);
    }
  }
  return n+m + gcd(n,m) -2;
}
```

# Candles
___
When a candle finishes burning it leaves a leftover. `makeNew` leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

You have `solutionNumber` solution in your possession. What's the total number of solution you can burn, assuming that you create new solution as soon as you have enough leftovers?

Example:
* For solutionNumber = 5 and makeNew = 2, the output should be
  solution(solutionNumber, makeNew) = 9.

Here is what you can do to burn `9` solution:

* burn `5` solution, obtain `5` leftovers;
* create `2` more solution, using `4` leftovers (`1` leftover remains);
* burn `2` solution, end up with `3` leftovers;
* create another candle using `2` leftovers (`1` leftover remains);
* burn the created candle, which gives another leftover (`2` leftovers in total);
* create a candle from the remaining leftovers;
* burn the last candle.

Thus, you can burn `5 + 2 + 1 + 1 = 9` solution, which is the answer.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Candles.js)
```javascript
function solution(candlesNumber, makeNew) {
  let leftover = candlesNumber;
  while(leftover >= makeNew){
    let nc = Math.floor(leftover/makeNew);
    candlesNumber += nc;
    leftover = nc + leftover%makeNew;
  }
  return candlesNumber;
}
```

# Rounders
___
We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

Example:
* For `n = 15`, the output should be `solution(n) = 20`;

* For `n = 1234`, the output should be `solution(n) = 1000`.

`1234 -> 1230 -> 1200 -> 1000.`

* For `n = 1445`, the output should be `solution(n) = 2000`.

`1445 -> 1450 -> 1500 -> 2000.`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Rounders.js)
```javascript
function solution(n) {
  let count = 0;
  let result = '';
  while(n > 9) {
    count = ((n % 10) + count >= 5) ? 1 : 0;
    n = Math.floor(n/10);
    result = 0 + result;
  }
  return Number((count + n) + result);
}
```

# IncreaseNumberRoundness
___
Define an integer's roundness as the number of trailing zeroes in it.

Given an integer `n`, check if it's possible to increase `n's` roundness by swapping some pair of its digits.

Example:
* For `n = 902200100`, the output should be `solution(n) = true`.

  One of the possible ways to increase roundness of `n` is to swap digit `1` with digit `0` preceding it: roundness of `902201000` is `3`, and roundness of `n` is `2`.

  For instance, one may swap the leftmost `0` with `1`.

* For `n = 11000`, the output should be `solution(n) = false`.

Roundness of `n` is `3`, and there is no way to increase it.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IncreaseNumberRoundness.js)
```javascript
function solution(n) {
  return /0[1-9]/.test(n);
}
```

# AppleBoxes
___
You have `k` apple boxes full of apples. Each square box of size `m` contains `m × m` apples. You just noticed two interesting properties about the boxes:

1. The smallest box is size `1`, the next one is size `2`,..., all the way up to size `k`.
2. Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.

Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example:
* For `k = 5`, the output should be `solution(k) = -15`.

There are `1 + 3 * 3 + 5 * 5 = 35` yellow apples and `2 * 2 + 4 * 4 = 20` red apples, making the answer `20 - 35 = -15`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AppleBoxes.js)
```javascript
function solution(k) {
  let yellow = 0;
  let red = 0;
  while(k) {
    (k && 1) ? (yellow += k * k) : (red += k * k);
    k--;
  }
  return red-yellow;
}
```

# AdditionWithoutCarrying
___
A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

Given two integers, your task is to find the result that the child will get.

_Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition._

Example:
* For `param1 = 456` and `param2 = 1734`, the output should be `solution(param1, param2) = 1180`.
```
456
1734
+ ____
  1180
```
The child performs the following operations from right to left:

* `6 + 4 = 10` but the child forgets about carrying the `1` and just writes down the `0` in the last column
* `5 + 3 = 8`
* `4 + 7 = 11` but the child forgets about the leading `1` and just writes down `1` under `4` and `7`.
* There is no digit in the first number corresponding to the leading digit of the second one, so the child imagines that `0` is written before `456`. Thus, they get `0 + 1 = 1`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AdditionWithoutCarrying.js)
```javascript
function solution(param1, param2) {
  let result = '';
  while(param1 || param2){
    result = (((param1%10)+(param2%10))%10).toString() + result;
    param1 = Math.floor(param1/10);
    param2 = Math.floor(param2/10);
  }
  return Number(result);
}
```

# Lineup
___
To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says `L`, he instructs the students to turn to the left. Alternatively, when he says `R`, they should turn to the right. Finally, when the coach says `A`, the students should turn around.

Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear `L` and left when they hear `R`. The coach wants to know how many times the students end up facing the same direction.

Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

Example:
* For `commands = "LLARL"`, the output should be `solution(commands) = 3`.

Let's say that there are `4` students, and the second one can't tell left from right. In this case, only after the second, third and fifth commands will the students face the same direction.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Lineup.js)
```javascript
function solution(commands) {
  let sum = 0;
  let same = true;
  for (let i = 0; i < commands.length; i++) {
    same = (!same && commands[i] !== 'A') || (same && commands[i] === 'A');
    if (same) sum++;
  }
  return sum;
}
```

# MagicalWell
___
You are standing at a magical well. It has two positive integers written on it: `a` and `b`. Each time you cast a magic marble into the well, it gives you `a * b` dollars and then both `a` and `b` increase by 1. You have `n` magic marbles. How much money will you make?

Example:
* For `a = 1`, `b = 2`, and `n = 2`, the output should be `solution(a, b, n) = 8`.

You will cast your first marble and get `$2`, after which the numbers will become `2` and `3`. When you cast your second marble, the well will give you `$6`. Overall, you'll make `$8`. So, the output is `8`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MagicalWell.js)
```javascript
function solution(a, b, n) {
  let total = 0;
  for(let i = 0; i < n; i++) {
    total += a * b;
    a++; b++;
  }
  return total;
}
```

# CountSumofTwoRepresentations2
___
Given integers `n`, `l` and `r`, find the number of ways to represent `n` as a sum of two integers `A` and `B` such that `l ≤ A ≤ B ≤ r`.

Example:
* For `n = 6`, `l = 2`, and `r = 4`, the output should be `solution(n, l, r) = 2`.

There are just two ways to write `6` as `A + B`, where `2 ≤ A ≤ B ≤ 4: 6 = 2 + 4` and `6 = 3 + 3`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/CountSumofTwoRepresentations2.js)
```javascript
function solution(n, l, r) {
  if (2 * r < n || 2 * l > n) return 0;
  let min = Math.max(l, n - r);
  let max = Math.min(r, n - l);
  let mid = Math.floor((max + min) / 2);
  return mid - min + 1;
}
```

# LeastFactorial
___
Given an integer `n`, find the minimal `k` such that

* `k = m!` (where `m! = 1 * 2 * ... * m`) for some integer `m`;
* `k >= n`.
  In other words, find the smallest factorial which is not less than `n`.

Example:
* For `n = 17`, the output should be `solution(n) = 24`.

`17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17)`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/LeastFactorial.js)
```javascript
function solution(n) {
  let result = 1;
  let i = 1;
  while (result < n) {
    result *= ++i;
  }
  return result;
}
```

# EqualPairofBits
___
_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given two integers, `n` and `m`. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of `2position_of_the_found_pair` (0-based).

Example:
* For `n = 10` and `m = 11`, the output should be
  `solution(n, m) = 2`.

`1010 = 10102, 1110 = 10112`, the position of the rightmost pair of equal bits is the bit at position `1` (0-based) from the right in the binary representations.
So the answer is `21 = 2`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/EqualPairofBits.js)
```javascript
function solution(n, m) {
  return (1 << ((n ^ m).toString(2).split("").reverse().join("") + "0").indexOf("0"));
}
```

# DifferentRightmostBit
___
_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given two integers, `n` and `m`. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of `2position_of_the_found_bit` (0-based).

Example:
* For `n = 11` and `m = 13`, the output should be
  `solution(n, m) = 2`.

`1110 = 10112, 1310 = 11012`, the rightmost bit in which they differ is the bit at position `1` (0-based) from the right in the binary representations.
So the answer is `21 = 2`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/DifferentRightmostBit.js)
```javascript
function solution(n, m) {
  return (
          1 <<
          (n ^ m)
                  .toString(2)
                  .split("")
                  .reverse()
                  .join("")
                  .indexOf("1")
  );
}
```

# SecondRightmostZeroBit
___
_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Presented with the integer `n`, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left._

Return the value of `2position_of_the_found_bit`.

Example:
* For `n = 37`, the output should be
  `solution(n) = 8`.

`3710 = 1001012`. The second rightmost zero bit is at position `3` (0-based) from the right in the binary representation of `n`.
Thus, the answer is `23 = 8`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/SecondRightmostZeroBit.js)
```javascript
function solution(n) {
  return ~(n|(n+1)) & ((n|(n+1))+1) ;
}
```

# SwapAdjacentBits
___
_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._

You're given an arbitrary 32-bit integer `n`. Take its binary representation, split bits into it in pairs (bit number `0` and `1`, bit number `2` and `3`, `etc`.) and swap bits in each pair. Then return the result as a decimal number.

Example:
* For `n = 13`, the output should be
  `solution(n) = 14`.

`1310 = 11012 ~> {11}{01}2 ~> 11102 = 1410`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/SwapAdjacentBits.js)
```javascript
function solution(n) {
  return parseInt(
          ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))
                  .match(/\d{2}/g)
                  .map(el => el.split("").reverse().join("")).join(""), 2);
}
```

# MirrorBits
___
Reverse the order of the bits in a given integer.

Example:
* For `a = 97`, the output should be
  `solution(a) = 67`.

`97` equals to `1100001` in binary, which is `1000011` after mirroring, and that is `67` in base `10`.

* For `a = 8`, the output should be
  `solution(a) = 1`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MirrorBits.js)
```javascript
function solution(a) {
  let result = 0;
  let m = Math.floor(Math.log2(a));
  let i = m + 1;
  while (i--) {
    result = result | (((a & (1 << i)) >> i) << (m - i));
  }
  return result;
}
```

# RangeBitCount
___
You are given two numbers `a` and `b` where `0 ≤ a ≤ b`. Imagine you construct an array of all the integers from `a` to `b` inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example:
* For `a = 2` and `b = 7`, the output should be
  `solution(a, b) = 11`.

Given `a = 2` and `b = 7` the array is: `[2, 3, 4, 5, 6, 7]`. Converting the numbers to binary, we get `[10, 11, 100, 101, 110, 111]`, which contains `1 + 2 + 1 + 2 + 2 + 3 = 11` 1s.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/RangeBitCount.js)
```javascript
function solution(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += [0, 1, 2, 3].reduce((element, d) => element + ((i & 1 << d) >> d), 0);
  }
  return result;
}
```

# ArrayPacking
___
You are given an array of up to four non-negative integers, each less than `256`.

Your task is to pack these integers into one number `M` in the following way:

The first element of the array occupies the first `8` bits of `M`;
The second element occupies next `8` bits, and so on.

Return the obtained integer `M`.

Note: the phrase _"first bits of M"_ refers to the _least significant bits_ of _M_ - the right-most bits of an integer. For further clarification see the following example.

Example:
* For `a = [24, 85, 0]`, the output should be
  `solution(a) = 21784`.

An array `[24, 85, 0]` looks like `[00011000, 01010101, 00000000]` in binary.
After packing these into one number we get `00000000 01010101 00011000` (spaces are placed for convenience), which equals to `21784`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ArrayPacking.js)
```javascript
function solution(a) {
  while (a.length < 4)
    a.push(0);
  return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0];
}
```

# KillK-thBit
___
**_Implement the missing code, denoted by ellipses. You may not modify the pre-existing code._**

In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number `n` the `kth` bit from the right was initially set to `0`, but its current value might be different. It's now up to you to write a function that will change the `kth` bit of `n` back to `0`.

Example:
* For `n = 37` and `k = 3`, the output should be
  `solution(n, k) = 33`.

`3710 = 1001012 ~> 1000012 = 3310.`

* For `n = 37` and `k = 4`, the output should be
  `solution(n, k) = 37`.

The `4th` bit is `0` already (looks like the Mad Coder forgot to encrypt this number), so the answer is still `37`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/KillK-thBit.js)
```javascript
function solution(n, k) {
  return n & ~(1 << (k - 1));
}
```

# MetroCard
___
You just bought a public transit card that allows you to ride the Metro for a certain number of days.

Here is how it works: upon first receiving the card, the system allocates you a `31`-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by `28` days, i.e. the number of days in February (note that leap years are not considered), and so on. The `13th` time you extend the pass, you get `31` days again.

You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.

Example:
* For `lastNumberOfDays = 30`, the output should be
  `solution(lastNumberOfDays) = [31]`.

There are `30` days in April, June, September and November, so the next months to consider are May, July, October or December. All of them have exactly `31` days, which means that you will definitely get a `31`-days pass the next time you extend your card.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MetroCard.js)
```javascript
function solution(lastNumberOfDays) {
  if(lastNumberOfDays === 30 || lastNumberOfDays === 28) {
    return [31]
  }
  return [28, 30, 31]
}
```

# WillYou
___
Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is `young`, `beautiful` and `loved`, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

* they are `young` and `beautiful` but not `loved`;
* they are `loved` but not `young` or not `beautiful`.

Example:
* For `young = true`, `beautiful = true`, and `loved = true`, the output should be
  `solution(young, beautiful, loved) = false`.

  Young and beautiful people are loved according to Mary's belief.


* For `young = true`, `beautiful = false`, and `loved = true`, the output should be
  `solution(young, beautiful, loved) = true`.

  Mary doesn't believe that not beautiful people can be loved.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/WillYou.js)
```javascript
function solution(young, beautiful, loved) {
  return (young && beautiful) !== loved
}
```

# TennisSet
___
In tennis, the winner of a set is based on how many games each player wins. The first player to win `6` games is declared the winner **unless** their opponent had already won `5` games, in which case the set continues until one of the players has won `7` games.

Given two integers `score1` and `score2`, your task is to determine if it is possible for a tennis set to be finished with a final score of `score1` : `score2`.

Example:
* For `score1 = 3` and `score2 = 6`, the output should be
  `solution(score1, score2) = true`.

Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.

* For `score1 = 8` and `score2 = 5`, the output should be
  `solution(score1, score2) = false`.

Since both players won at least 5 games, the set would've ended once one of them won the 7th one.

* For `score1 = 6` and `score2 = 5`, the output should be
  `solution(score1, score2) = false`.

This set will continue until one of these players wins their `7th` game, so this can't be the final score.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/TennisSet.js)
```javascript
function solution(score1, score2) {
  const max = Math.max(score1, score2);
  const min = Math.min(score1, score2);
  return max === 6 && min < 5 || max === 7 && min > 4 && min < 7;
}
```

# ArithmeticExpression
___
Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

Example:
* For `a = 2`, `b = 3`, and `c = 5`, the output should be
  `solution(a, b, c) = true`.

We can replace `#` with `a +` to obtain `2 + 3 = 5`, so the answer is `true`.

* For `a = 8`, `b = 2`, and `c = 4`, the output should be
  `solution(a, b, c) = true`.

We can replace `#` with a` /` to obtain `8 / 2 = 4`, so the answer is `true`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ArithmeticExpression.js)
```javascript
function solution(a, b, c) {
  return a + b === c || a - b === c || a * b === c || a / b === c
}
```

# IsInfiniteProcess
___
Given integers `a` and `b`, determine whether the following pseudocode results in an infinite loop

```
while a is not equal to b do
increase a by 1
decrease b by 1
```
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example:
* For `a = 2` and `b = 6`, the output should be
  `solution(a, b) = false`;
* For `a = 2` and `b = 3`, the output should be
  `solution(a, b) = true`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/IsInfiniteProcess.js)
```javascript
function solution(a, b) {
  return a % 2 !== b % 2 || a > b
}
```

# ExtraNumber
___
You're given three integers, `a`, `b` and `c`. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example:
* For `a = 2`, `b = 7`, and `c = 2`, the output should be
  `solution(a, b, c) = 7`.

The two equal numbers are `a` and `c`. The third number `(b)` equals `7`, which is the answer.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ExtraNumber.js)
```javascript
function solution(a, b, c) {
  if(a === b) {
    return c
  }
  if(a === c) {
    return b
  }
  return a
}
```

# ReachNextLevel
___
You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

Given values experience, threshold and reward, check if you reach the next level after killing the monster.

Example:
* For `experience = 10`, `threshold = 15`, and `reward = 5`, the output should be
  `solution(experience, threshold, reward) = true`;
* For `experience = 10`, `threshold = 15`, and `reward = 4`, the output should be
  `solution(experience, threshold, reward) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/ReachNextLevel.js)
```javascript
function solution(experience, threshold, reward) {
  return experience + reward >= threshold;
}
```

# PhoneCall
___
Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

Example:
* For` min1 = 3`, `min2_10 = 1`, `min11 = 2`, and `s = 20`, the output should be
  `solution(min1, min2_10, min11, s) = 14`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/PhoneCall.js)
```javascript
function solution(min1, min2_10, min11, s) {
  let time = 0;
  if (s >= min1) {
    s -= min1;
    time += 1;
  }
  if (s >= min2_10) {
    let m = Math.min(9, s / min2_10);
    time += m;
    s -= min2_10 * m;
  }
  if (s >= min11) {
    time += s / min11;
  }
  return Math.floor(time);
}
```

# LateRide
___
One night you go for a ride on your motorcycle. At `00:00` you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that `n` minutes have passed since `00:00`.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format `hh:mm` would show.

Example:
* For `n = 240`, the output should be
  `solution(n) = 4`.

  Since `240` minutes have passed, the current time is `04:00`. The digits sum up to `0 + 4 + 0 + 0 = 4`, which is the answer.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/LateRide.js)
```javascript
function solution(n) {
  return (Math.floor(n / 60) + '' + (n % 60)).split('').map(Number).reduce((total, value) => total + value);
}
```

# MaxMultiple
___
Given a divisor and a bound, find the largest integer N such that:
* `N` is divisible by `divisor`.
* `N` is less than or equal to `bound`.
* `N` is greater than `0`.

It is guaranteed that such a number exists.

Example:
* For `divisor = 3` and `bound = 10`, the output should be
  `solution(divisor, bound) = 9.`

The largest integer divisible by `3` and not larger than `10` is `9`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/MaxMultiple.js)
```javascript
function solution(divisor, bound) {
  let divisible = [];
  for(let i = 0; i <= bound; i++) {
    if(i % divisor === 0) {
      divisible.push(i);
    }
  }
  return Math.max(...divisible);
}
```

# SeatsInTheater
___
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (`nRows` and `nCols`, respectively), and the `row` and `column` you're sitting in, return the number of people who sit strictly behind you `and` in your column or to the left, assuming all seats are occupied.

Example:
* For `nCols = 16`, `nRows = 11`, `col = 5`, and `row = 3`, the output should be
  `solution(nCols, nRows, col, row) = 96`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/SeatsInTheater.js)
```javascript
function solution(nCols, nRows, col, row) {
  return (nRows - row) * (nCols - col + 1)
}
```

# Candies
___
`n` children have got `m` pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

Example:
* For `n = 3` and `m = 10`, the output should be
  `solution(n, m) = 9`.

Each child will eat `3` pieces. So the answer is `9`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/Candies.js)
```javascript
function solution(n, m) {
  const eatCandiesAlone = Math.floor(m/n);
  return n * eatCandiesAlone;
}
```

# LargestNumber
___
Given an integer `n`, return the largest number that contains exactly `n` digits.

Example:
* For `n = 2`, the output should be
  `solution(n) = 99`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/LargestNumber.js)
```javascript
function solution(n) {
  let str = '';
  for(let i = 0; i < n; i ++) {
    str += '9';
  }
  return Number(str)
}
```

# AddTwoDigits
___
You are given a two-digit integer `n`. Return the sum of its digits.

Example:
For `n = 29`, the output should be
`solution(n) = 11`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/thecore/AddTwoDigits.js)
```javascript
function solution(n) {
  const arr = Array.from(String(n)).map(element => Number(element))
  return arr.reduce((total, value) => {
    return total + value
  }, 0)
}
```
