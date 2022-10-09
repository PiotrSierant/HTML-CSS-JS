# SeatsInTheater
___
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (`nRows` and `nCols`, respectively), and the `row` and `column` you're sitting in, return the number of people who sit strictly behind you `and` in your column or to the left, assuming all seats are occupied.

Example:
* For `nCols = 16`, `nRows = 11`, `col = 5`, and `row = 3`, the output should be
`solution(nCols, nRows, col, row) = 96`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/SeatsInTheater.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Candies.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/LargestNumber.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AddTwoDigits.js)
```javascript
function solution(n) {
  const arr = Array.from(String(n)).map(element => Number(element))
  return arr.reduce((total, value) => {
    return total + value
  }, 0)
}
```

# sudoku
___
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example:
* For
``` 
grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
```
the output should be
`solution(grid) = true;`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/sudoku.js)
```javascript
function solution(grid) {
  function checkNine(arr) {
    for (let i = 1; i < 10; i++) {
      if (!arr.includes(i)) {
        return false;
      }
    }
    return arr.length === 9;
  }
  for (let i = 0; i < 9; i++){
    const col = grid.map(row => row[i]);
    const box = [];
    for (let j = 0; j < 3; j++){
      for(let k = 0; k < 3; k++){
        box.push(grid[j+i-i%3][k+(i%3)*3]);
      }
    }
    if (!checkNine(grid[i]) || !checkNine(col) || !checkNine(box)){
      return false;
    }
  }
  return true;
}
```

# spiralNumbers
___
Construct a square matrix with a size `N × N `containing integers from `1` to` N * N` in a spiral order, starting from top-left and in clockwise direction.

Example:
* For `n = 3`, the output should be

  ```
  solution(n) = [[1, 2, 3],
                 [8, 9, 4],
                 [7, 6, 5]]
  ```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/spiralNumbers.js)
```javascript
function solution(n) {
  let result = Array(n*n).fill(null).map((el,i)=>i+1);
  let newArr = [];
  let i = 0;
  while(result.length) {
    newArr.reverse();
    newArr = newArr.length
            ? newArr[0].map((col, i) => newArr.map(row => row[i]))
            : newArr;

    newArr.unshift(result.splice(-(Math.floor(i/2)+1)));
    i++;
  }
  return newArr;
}
```

# messageFromBinaryCode
___
You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example:
* For `code = "010010000110010101101100011011000110111100100001"`, the output should be
`solution(code) = "Hello!"`.

  The first `8` characters of the code are `01001000`, which is `72` in the binary numeral system. `72` stands for `H` in the ASCII-table, so the first letter is `H`.
  
  Other letters can be obtained in the same manner.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/messageFromBinaryCode.js)
```javascript
function solution(code) {
  let message = '';
  for (let i = 0; i < code.length; i=i+8){
    message += String.fromCharCode(parseInt(code.slice(i,i+8),2));
  }
  return message;
}

```
# FileNaming
___
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of `(k)`, where `k` is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example:
* For `names = ["doc", "doc", "image", "doc(1)", "doc"]`, the output should be
`solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/FileNaming.js)
```javascript
function solution(names) {
  let newArr = [];
  for (let element in names) {
    let count = 0;
    let tmp = names[element];
    if (newArr.indexOf(names[element]) > -1) {
      while (newArr.indexOf(names[element]) > -1) {
        count++;
        names[element] = tmp + "(" + count + ")";
      }
    }
    newArr.push(names[element]);
  }
  return newArr;
}
```

# digitsProduct
___
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example:
* For `product = 12`, the output should be
`solution(product) = 26`;
* For `product = 19`, the output should be
`solution(product) = -1`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/digitsProduct.js)
```javascript
function solution(product) {
  function p(k) {
    return String(k).split('').map(Number).reduce((a, b) => a * b, 1)
  }
  for (let i = 1; i < 5000; i++) {
    if (p(i) === product) return i;
  }
  return -1;
}
```

# DifferentSquares
___
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example:
* For

  `matrix = [[1, 2, 1],  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1]]`

  the output should be
  `solution(matrix) = 6`.

Here are all `6` different `2 × 2` squares:
```
1 2
2 2

2 1
2 2

2 2
2 2

2 2
1 2

2 2
2 3

2 3
2 1
```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/DifferentSquares.js)
```javascript
function solution(matrix) {
    let result = new Set()
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[i].length-1; j++) {
            result.add([matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]].toString())}}
    return result.size
}
```

# sumUpNumbers
___
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given `inputString`.

Example:
* For `inputString = "2 apples, 12 oranges"`, the output should be
`solution(inputString) = 14`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/sumUpNumbers.js)
```javascript
function solution(inputString) {
  const pattern = /[^0-9]/g
  const arr = inputString.split(pattern);
  const numbers = arr.filter(element => Number(element))
  console.log(numbers)
  return numbers.reduce((total, value) => {
    return Number(total) + Number(value)
  }, 0)
}
```

# ValidTime
___
Check if the given string is a correct time representation of the 24-hour clock.

Example:
* For `time = "13:58"`, the output should be
`  solution(time) = true`;
* For `time = "25:51"`, the output should be
  `solution(time) = false`;
* For `time = "02:76"`, the output should be
  `solution(time) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ValidTime.js)
```javascript
function solution(time) {
  const arr = time.split(":");
  if(arr[0] === '24' && arr[1] === '00') {
    return false
  }
  return !(arr[0] >= '24' || arr[1] >= '60');
}
```

# longestWord
___
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example:
* For `text = "Ready, steady, go!"`, the output should be
`solution(text) = "steady"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/longestWord.js)
```javascript
function solution(text) {
  const pattern = /[^a-z^A-Z]/
  const arr = text.split(pattern);
  const len = arr.map(element => {
    return element.length
  })
  const maxValue = Math.max(...len)
  const indexMaxValue = len.indexOf(maxValue);
  return arr[indexMaxValue]
}
```

# deleteDigit
___
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example:
* For `n = 152`, the output should be
`solution(n) = 52`;
* For `n = 1001`, the output should be
`solution(n) = 101`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/deleteDigit.js)
```javascript
function solution(n) {
  n = n.toString();
  let largestNum = 0;

  for(let i = 0; i < n.length; i++){
    let string;
    if (i !== 0) {
      string = n.substring(0, i) + n.substring(i + 1);
    } else {
      string = n.substring(1, n.length);
    }
    if(parseInt(string)>largestNum){
      largestNum = parseInt(string);
    }
  }
  return largestNum;
}
```

# chessKnight
___
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

Example:
* For `cell = "a1"`, the output should be
`solution(cell) = 2`.
* For `cell = "c2"`, the output should be
  `solution(cell) = 6`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/chessKnight.js)
```javascript
function solution(cell) {
  cell = cell.split('');
  cell[0] = cell[0].charCodeAt(0) - 'a'.charCodeAt(0) +1;
  cell[1] = Number(cell[1]);
  const aux = [[1,1], [1,1],[1,1],[1,1]]
  let ret = 8;
  if(cell[0] < 3){
    ret -= aux[0][0];
    ret -= aux[0][1];
    aux[0][0] = 0;
    aux[0][1] = 0;
  }
  if(cell[0] < 2) {
    ret -= aux[1][0];
    ret -= aux[1][1];
    aux[1][0] = 0;
    aux[1][1] = 0;
  }
  if(cell[0] > 6){
    ret -= aux[3][0];
    ret -= aux[3][1];
    aux[3][0] = 0;
    aux[3][1] = 0;
  }
  if(cell[0] > 7){
    ret -= aux[2][0];
    ret -= aux[2][1];
    aux[2][0] = 0;
    aux[2][1] = 0;
  }
  if(cell[1] < 3){
    ret -= aux[1][1];
    ret -= aux[2][1];
    aux[1][1] = 0;
    aux[2][1] = 0;
  }
  if(cell[1] < 2){
    ret -= aux[0][1];
    ret -= aux[3][1];
    aux[0][1] = 0;
    aux[3][1] = 0;
  }
  if(cell[1] > 6){
    ret -= aux[1][0];
    ret -= aux[2][0];
    aux[1][0] = 0;
    aux[2][0] = 0;
  }
  if(cell[1] > 7){
    ret -= aux[0][0];
    ret -= aux[3][0];
    aux[0][0] = 0;
    aux[3][0] = 0;
  }
  return ret;
}
```

# lineEncoding
___
Given a string, return its encoding defined as follows:

* First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
  * for example, `aabbbc` is divided into `["aa", "bbb", "c"]`
* Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character 
  * for example, substring `bbb` is replaced by `3b`
* Finally, all the new strings are concatenated together in the same order and a new string is returned.

Example:
* For `s = "aabbbc"`, the output should be
`solution(s) = "2a3bc"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/lineEncoding.js)
```javascript
function solution(s) {
  let count = 1;
  let result = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i+1]) {
      count += 1;
    } else {
      if(count === 1) {
        result += s[i]
      } else {
        result += count + s[i];
        count = 1;
      }
    }
  }
  return result.replace(/'1'/g, '')
}
```

# isDigit
___
Determine if the given character is a digit or not.

Example:
* For `symbol = '0'`, the output should be
`solution(symbol) = true`;
* For `symbol = '-'`, the output should be
`solution(symbol) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/isDigit.js)
```javascript
function solution(symbol) {
  if(symbol === '0') {
    return true
  }
  return !!Number(symbol);
}
```

# IsMAC48Address
___
A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (`0` to `9` or `A` to `F`), separated by hyphens (e.g. `01-23-45-67-89-AB`).

Your task is to check by given string `inputString` whether it corresponds to MAC-48 address or not.

Example:
* For `inputString = "00-1B-63-84-45-E6"`, the output should be
`solution(inputString) = true`;
* For `inputString = Z1-1B-63-84-45-E6`, the output should be
`solution(inputString) = false`;
* For `inputString = "not a MAC-48 address"`, the output should be
`solution(inputString) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/IsMAC48Address.js)
```javascript
function solution(inputString) {
  const arr = inputString.split('-');
  return arr.length === 6 && arr.every((el)=>/^[A-F\d]{2}$/.test(el));
}
```

# ElectionsWinners
___
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

Example:

* For `votes = [2, 3, 5, 2]` and `k = 3`, the output should be
`solution(votes, k) = 2`. 
  * The first candidate got `2` votes. Even if all of the remaining `3` candidates vote for him, he will still have only `5` votes, i.e. the same number as the third candidate, so there will be no winner.
  * The second candidate can win if all the remaining candidates vote for him (`3 + 3 = 6 > 5`).
  * The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the 1 array will thus be `[3, 4, 5, 3]`).
  * The last candidate can't win no matter what (for the same reason as the first candidate).
  
Thus, only `2` candidates can win (the second and the third), which is the answer.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ElectionsWinners.js)
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

# buildPalindrome
___
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example:

* For `st = "abcdc"`, the output should be
  `solution(st) = "abcdcba"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/buildPalindrome.js)
```javascript
function solution(st) {
  let i = 0;
  let aux;
  while(st !== st.split('').reverse().join('')){
    aux = st.split('')
    aux.splice(st.length-i, 0 ,st[i])
    st = aux.join('');
    i++;
  }
  return st;
}
```

# FindEmailDomain
___
An email address such as `John.Smith@example.com` is made up of a local part (`John.Smith`), an `"@"` symbol, then a domain part (`example.com`).

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

Example:

* For `address = "prettyandsimple@example.com"`, the output should be
  `solution(address) = "example.com"`;
* For `address = "fully-qualified-domain@codesignal.com"`, the output should be
  `solution(address) = "codesignal.com"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/FindEmailDomain.js)
```javascript
function solution(address) {
  return address.split('@').at(-1);
}
```

# isBeautifulString
___
A string is said to be beautiful if each letter in the **string** appears at most as many times as **the previous letter in the alphabet within the string**; ie: `b` occurs no more times than `a`; `c` occurs no more times than `b`; etc. Note that letter a has no previous letter.

Given a string, check whether it is _beautiful_.

Example:
* For `inputString = "bbbaacdafe"`, the output should be `solution(inputString) = true`.

  This string contains 3 `a`s, 3 `b`s, 1 `c`, 1 `d`, 1 `e`, and 1 `f` (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/isBeautifulString.js)
```javascript
function solution(inputString) {
  const alphabet = [];

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    alphabet.push(String.fromCharCode(i));
  }
  const letters = Array(alphabet.length).fill(0);

  for (let letter of inputString) {
    letters[alphabet.indexOf(letter)]++;
  }

  for (let i = 0; i < letters.length; i++) {
    if (letters[i + 1] > letters[i]) {
      return false;
    }
  }

  return true;
}
```

# BishopAndPawn
___
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

Example:
* For `bishop = "a1"` and `pawn = "c3"`, the output should be
  `solution(bishop, pawn) = true`.
* For `bishop = "h1"` and `pawn = "h3"`, the output should be
  `solution(bishop, pawn) = false`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/BishopAndPawn.js)
```javascript
function solution(bishop, pawn) {
  const bishopCoords = bishop.split("");
  const pawnCoords = pawn.split("");
  bishopCoords[0] = 1 + bishopCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords[1] = Number(bishopCoords[1]);
  pawnCoords[0] = 1 + pawnCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  pawnCoords[1] = Number(pawnCoords[1]);
  return (
      bishopCoords[0] - bishopCoords[1] === pawnCoords[0] - pawnCoords[1] ||
      bishopCoords[0] + bishopCoords[1] === pawnCoords[0] + pawnCoords[1]
  );
}
```

# digitDegree
___
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example:
* For `n = 5`, the output should be
`solution(n) = 0`;
* For `n = 100`, the output should be
`solution(n) = 1`.
`1 + 0 + 0 = 1`.
* For `n = 91`, the output should be
`solution(n) = 2`.
`9 + 1 = 10 -> 1 + 0 = 1`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/digitDegree.js)
```javascript
function solution(n) {
  if (n<10)
    return 0;
  return 1 + solution(Number(String(n).split('').map(Number).reduce((a,b)=>a+b)));
}
```

# longestDigitsPrefix
___
Given a string, output its longest prefix which contains only digits.

Example:
* For `inputString = "123aa1"`, the output should be
  `solution(inputString) = "123"`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/longestDigitsPrefix.js)
```javascript
function solution(inputString) {
  let count = 0;
  for(let i = 0;  i < inputString.length; i++) {
    if(!/\d/.test(inputString[i])) {
      break
    }
    count++;
  }
  return inputString.substring(0,count);
}
```

# KnapsackLight
___
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Example:
* For `value1 = 10`, `weight1 = 5`, `value2 = 6`, `weight2 = 4`, and `maxW = 8`, the output should be
`solution(value1, weight1, value2, weight2, maxW) = 10`.

You can only carry the first item.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/KnapsackLight.js)
```javascript
function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2
  }
  if (weight1 <= maxW && weight2 <= maxW) {
    return Math.max(value1, value2)
  }
  if (weight1 <= maxW) {
    return value1
  }
  if (weight2 <= maxW) {
    return value2
  }
  return 0
}
```

# growingPlant
___
Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer `upSpeed`. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by `downSpeed`.

Since you grew the plant from a seed, it started at height `0` initially. Given an integer `desiredHeight`, your task is to find how many days it'll take for the plant to reach this height.

Example:
* For `upSpeed = 100`,` downSpeed = 10`, and `desiredHeight = 910`, the output should be
`solution(upSpeed, downSpeed, desiredHeight) = 10`.

The plant first reaches a height of `910` on day `10`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/growingPlant.js)
```javascript
function solution(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let count_day = 0;
  while (true) {
    currentHeight += upSpeed;
    count_day += 1;
    if(currentHeight >= desiredHeight) {
      break
    }
    currentHeight -= downSpeed;
  }
  return count_day;
}
```

# arrayMaxConsecutiveSum
___
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example:
* For `inputArray = [2, 3, 5, 1, 6]` and `k = 2`, the output should be
`solution(inputArray, k) = 8`.
All possible sums of `2` consecutive elements are:

* `2 + 3 = 5`;
* `3 + 5 = 8`;
* `5 + 1 = 6`;
* `1 + 6 = 7`.

  Thus, the answer is `8`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/arrayMaxConsecutiveSum.js)
```javascript
function solution(inputArray, k) {
    let rollingSum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let max = rollingSum;
    for(let i = 0; i < inputArray.length - k; i++){
        rollingSum += inputArray[i + k] - inputArray[i];
        max = Math.max(max, rollingSum);
    }
    return max;
}
```

# differentSymbolsNaive
___
Given a string, find the number of different characters in it.

Example:
* For `s = "cabca"`, the output `should be
solution(s) = 3`.

There are `3` different characters `a`, `b` and `c`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/differentSymbolsNaive.js)
```javascript
function solution(s) {
  const set = new Set();
  s.split('').forEach(element => set.add(element))
  return set.size
}
```

# firstDigit
___
Find the leftmost digit that occurs in a given string.

Example:
* For `inputString = "var_1__Int"`, the output should be
`solution(inputString) = '1'`;
* For `inputString = "q2q-q"`, the output should be
`solution(inputString) = '2'`;
* For `inputString = "0ss"`, the output should be
`solution(inputString) = '0'`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/firstDigit.js)
```javascript
function solution(inputString) {
  const array_string = inputString.split('');
  let result;
  for(let element of array_string) {
    if(!isNaN(Number(element)) && element !== ' ') {
      return result = element
    }
  }
  return result;
}
```

# extractEachKth
___
Given array of integers, remove each kth element from it.

Example:
* For `inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` and k = 3, the output should be
`solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].`

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/extractEachKth.js)
```javascript
function solution(inputArray, k) {
  const indexPopElement = [];
  const initK = k;
  for(let i = 0; i < inputArray.length; i++) {
    if(i !== k - 1) {
      indexPopElement.push(inputArray[i]);
    }
    if(i === k - 1) {
      k = k + initK;
    }
  }

  return indexPopElement
}
```

# stringsRearrangement
___
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

```Note: You're only rearranging the order of the strings, not the order of the letters within the strings!```

Example:
* For ```inputArray = ["aba", "bbb", "bab"]```, the output should be
```solution(inputArray) = false```.

There are 6 possible arrangements for these strings:

```
["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
```

None of these satisfy the condition of consecutive strings differing by `1` character, so the answer is ```false```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/stringsRearrangement.js)
```javascript
function solution(inputArray) {
  let res1 = 0;
  let res2 = 0;
  let count = 0;
  let sum = 0;
  for(let i = 0; i < inputArray.length; i++){
    sum = 0;
    for(let j = 0; j < inputArray.length; j++){
      count = 0;
      for(let a = 0; a < inputArray[i].length; a++){
        if(inputArray[i][a] !== inputArray[j][a]) count++;
      }
      if(count === 1) sum++;
    }
    if(sum === 1) res1 ++;
    else if(sum > 1) res2++;
  }
  if(res1 + res2 === inputArray.length){
    return !(res1 % 2 !== 0 && inputArray.length % 2 === 0 || res1 === inputArray.length);
  }
  else return false;
}
```

# absoluteValuesSumMinimization
___
Given a sorted array of integers ```a```, your task is to determine which element of ```a``` is _closest_ to all other values of ```a```. In other words, find the element ```x``` in ```a```, which minimizes the following sum:

```abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)```

(where ```abs``` denotes the absolute value)

If there are several possible answers, output the smallest one.

Example:

* For ```a = [2, 4, 7]```, the output should be ```solution(a) = 4```.
  * for ```x = 2```, the value will be ```abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7```.
  * for ```x = 4```, the value will be ```abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5```.
  * for ```x = 7```, the value will be ```abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8```.

  The lowest possible value is when ```x = 4```, so the answer is ```4```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/absoluteValuesSumMinimization.js)
```javascript
function solution(array) {
  const result = [];
  for(let number of array) {
    const sum = array.reduce((total, next) => {
      return total + Math.abs(next - number);
    }, 0);
    result.push(sum);
  }
  return array[result.indexOf(Math.min(...result))];
}
```

# depositProfit
___
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example:
* For ```deposit = 100```, ```rate = 20```, and ```threshold = 170```, the output should be
```solution(deposit, rate, threshold) = 3.```

Each year the amount of money in your account increases by ```20%```. So throughout the years, your balance would be:

* year 0: ```100```;
* year 1: ```120```;
* year 2: ```144```;
* year 3: ```172.8```.

Thus, it will take ```3``` years for your balance to pass the ```threshold```, so the answer is ```3```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/depositProfit.js)
```javascript
function solution(deposit, rate, threshold) {
  const currentRate = 1 + (rate / 100);
  let currentDeposit = deposit;
  let howManyYears = 1;
  for(howManyYears; currentDeposit < threshold; howManyYears++) {
    currentDeposit = currentDeposit * currentRate;
  }
  return howManyYears - 1
}
```

# Circle of Numbers
___
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example:
* For ```n = 10``` and ```firstNumber = 2```, the output should be
  ```solution(n, firstNumber) = 7```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/CircleofNumbers.js)
```javascript
function solution(n, firstNumber) {
  return (n / 2 + firstNumber) % n;
}
```

# Chess Board Cell Color
___
Given two cells on the standard chess board, determine whether they have the same color or not.

Example:
* For ```cell1 = "A1"``` and ```cell2 = "C3"```, the output should be
  ```solution(cell1, cell2) = true```.
* For ```cell1 = "A1"``` and ```cell2 = "H3"```, the output should be
  ```solution(cell1, cell2) = false```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/chessBoardCellColor.js)
```javascript
function solution(cell1, cell2) {
  const letters = 'ABCDEFGH';
  cell1 = letters.indexOf(cell1[0]) + Number(cell1[1]);
  cell2 = letters.indexOf(cell2[0]) + Number(cell2[1]);
  return cell1 % 2 === cell2 % 2
}
```

# Alphabetic Shift
___
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example:
* For ```inputString = "crazy"```, the output should be ```solution(inputString) = "dsbaz"```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/alphabeticShift.js)
```javascript
function solution(inputString) {
  return inputString.split('').map(char => {
    return char.charCodeAt(0) === 122
            ? 'a'
            : String.fromCharCode(char.charCodeAt(0)+1)
  }).join('');
}
```

# Variable Name
___
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example:
* For name = ```"var_1__Int"```, the output should be
```solution(name) = true```;
* For ```name = "qq-q"```, the output should be
```solution(name) = false```;
* For ```name = "2w2"```, the output should be
```solution(name) = false```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/variableName.js)
```javascript
function solution(name) {
  return /^[a-zA-Z_]+\w*$/.test(name)
}
```

# Even Digits Only
___
Check if all digits of the given integer are even.

Example:
* For ```n = 248622```, the output should be
  ```solution(n) = true```;
* For ```n = 642386```, the output should be
  ```solution(n) = false```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/EvenDigitsOnly.js)
```javascript
function solution(n) {
  const arrayNumber = [...n + ''].map(n=>+n);
  let odd = [];
  for(let element of arrayNumber) {
    console.log(element)
    if(element % 2 === 1) {
      odd.push(element)
    }
  }
  return odd.length > 0 ? false : true;
}
```

# Array Replace
___
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example:
* For ```inputArray = [1, 2, 1]```, ```elemToReplace = 1```, and ```substitutionElem = 3```, the output should be
  ```solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ArrayReplace.js)
```javascript
function solution(inputArray, elemToReplace, substitutionElem) {
  let indexes = []
  if(inputArray.includes(elemToReplace)) {
    for(let i = 0; i < inputArray.length; i++) {
      if(inputArray[i] === elemToReplace) {
        indexes.push(i);
      }
    }
  }
  for(let i = 0; i < indexes.length; i++) {
    inputArray[indexes[i]] = substitutionElem;
  }
  return inputArray
}
```

# Minesweeper
___
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example:
* For

```text
matrix = [[true, false, false],
[false, true, false],
[false, false, false]]
```
the output should be

```text
solution(matrix) = [[1, 2, 1],
[2, 1, 1],
[1, 1, 1]]
```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Minesweeper.js)
```javascript
function solution(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;

    let outArray = Array.from(Array(height), () => new Array(width));
    let mines = 0;
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {

            mines = 0;
            if(i > 0) {
                if(matrix[i-1][j-1]) mines += 1;
                if(matrix[i-1][j]) mines += 1;
                if(matrix[i-1][j+1]) mines += 1;
            }

            if(i < height - 1) {
                if(matrix[i+1][j-1]) mines += 1;
                if(matrix[i+1][j]) mines += 1;
                if(matrix[i+1][j+1]) mines += 1;
            }

            if(matrix[i][j-1]) mines += 1;
            if(matrix[i][j+1]) mines += 1;
            outArray[i][j] = mines;
        }
    }
    return outArray;
}
```

# Box Blur
___
Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example:
```
  image = [[1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]]
```
the output should be ```solution(image) = [[1]]```.

To get the value of the middle pixel in the input ```3 × 3``` square: ```(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1```. The border pixels are cropped from the final result.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/BoxBlur.js)
```javascript
function solution(image) {
  let blurImage = Array.from(Array(image.length-2), () => new Array(image[0].length-2));
  for(let i = 1; i < image.length-1; i++) {
    for(let j = 1; j < image[i].length-1; j++){
      blurImage[i-1][j-1] = Math.floor((
              image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
              image[i][j-1]   + image[i][j]   + image[i][j+1]   +
              image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]
      )/9);
    }
  }
  return blurImage;
}
```

# Avoid Obstacles
___
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example:
* For ```inputArray = [5, 3, 6, 7, 9]```, the output should be
  ```solution(inputArray) = 4```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/avoidObstacles.js)
```javascript
function solution(inputArray) {
  for(let i=0; ; i++) {
    if(inputArray.every(element => element % i))
      return i
  }
}
```

# isIPv4Address
___
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example:
* For ```inputString = "172.16.254.1"```, the output should be
  ```solution(inputString) = true```;

* For ```inputString = "172.316.254.1"```, the output should be
```solution(inputString) = false```. ```316``` is not in ```range [0, 255]```.

* For ```inputString = ".254.255.0"```, the output should be
```solution(inputString) = false```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/isIPv4Address.js)
```javascript
function solution(inputString) {
  const arr = inputString.split('.').filter(element =>  element !== '01' && element !== '00')
  if (arr.length === 4) {
    return arr.every( number => {
      return number >= 0 && number <= 255 && number !== '';

    })
  }
  return false
}
```

# Array Maximal Adjacent Difference
___
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example:
* For ```inputArray = [2, 4, 1, 0]```, the output should be
  ```solution(inputArray) = 3```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/arrayMaximalAdjacentDifference.js)
```javascript
function solution(inputArray) {
  let result = [];
  inputArray.reduce((a,b) => {
    result.push(Math.abs(a-b));
    return b
  })
  return Math.max(...result);
}
```

# Are Equally Strong
___
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example:
* For ```yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10```, the output should be
  ```solution(yourLeft, yourRight, friendsLeft, friendsRight) = true```;
* For ```yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10```, the output should be
  ```solution(yourLeft, yourRight, friendsLeft, friendsRight) = true```;
* For ```yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9```, the output should be
  ```solution(yourLeft, yourRight, friendsLeft, friendsRight) = false```.


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/areEquallyStrong.js)
```javascript
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsRight && yourRight === friendsLeft) {
    return true;
  }
  return yourLeft === friendsLeft && yourRight === friendsRight;
}
```

# Palindrome Rearranging
___
Given a string, find out if its characters can be rearranged to form a palindrome.

Example:
* For ```inputString = "aabb"```, the output should be
  ```solution(inputString) = true```.

* We can rearrange ```"aabb"``` to make ```"abba"```, which is a palindrome.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/palindromeRearranging.js)
```javascript
function palindromeRearranging(inputString) {
  const array = inputString.split('');
  const litery = [];
  array.map( element => {
    if(litery[element]) {
      litery[element]++;
    } else {
      litery[element] = 1;
    }
  })
  let licznik = 0;
  for(let litera in litery) {
    let value = litery[litera];
    if(licznik > 1) break;
    if(value%2===1) {
      licznik =+ 1;
    }
  }
  return licznik <= 1
}
```

# Array Change
___
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example:
* For ```inputArray = [1, 1, 1]```, the output should be
  ```solution(inputArray) = 3```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/arrayChange.js)
```javascript
function solution(inputArray) {
  let max = inputArray[0];
  let moves = 0;
  for(let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= max) {
      moves += max - inputArray[i] + 1;
      inputArray[i] = max + 1;
    }
    max = inputArray[i]
  }
  return moves
}
```

# Are similar
___
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example:
* For ```a = [1, 2, 3]``` and ```b = [1, 2, 3]```, the output should be
```solution(a, b) = true```
* For ```a = [1, 2, 2]``` and ```b = [2, 1, 1]```, the output should be
  ```solution(a, b) = false```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AreSimilar.js)
```javascript
function solution(a, b) {
    const newA = a.filter((element,index) => element !== b[index])
    const newB = b.filter((element,index) => element !== a[index])
    return newA.length === 0 || (newA.length === 2 && newA.join('') === newB.reverse().join(''))
  }
a = [1, 2, 3] ;
b = [1, 2, 3];
console.log(solution(a, b));
```

# Add border
___
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:
* For ```picture = ["abc","ded"]```

The output should be solution(picture) = ```["*****",
"*abc*",
"*ded*",
"*****"]```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/addBorder.js)
```javascript
function solution(picture) {
    picture = picture.map(f=>'*'.concat(f,'*'))
    let lengthRowArray = picture[0].length; // 5
    picture.unshift(Array(lengthRowArray).fill('*').join('')); // dodaj na początek
    picture.push(Array(lengthRowArray).fill('*').join(''))
    return picture;
}
```

# Alternating sums
___
Several people are standing in a row and need to be divided into two teams. The first person goes into _team 1_, the second goes into _team 2_, the third goes into _team 1_ again, the fourth into _team 2_, and so on.

Example:
* For ```a = [50, 60, 60, 45, 70]```, the output should be
```solution(a) = [180, 105]```

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/alternatingSums.js)
```javascript
const solution = (a) => {
    if(a.length === 1) {
      a.push(0);
      return a
    }
    let firstArray = [];
    let secondArray = [];
    a.forEach((element, index) => {
      if(index % 2 === 0) {
        firstArray.push(element);
      } else {
        secondArray.push(element);
      }
    })
    if(firstArray.length > 0 && secondArray.length > 0) {
      const resultFirstArray = firstArray.reduce((total, element) => total + element);
      const secondArrayArray = secondArray.reduce((total, element) => total + element);
      return [resultFirstArray, secondArrayArray];
    }
}
```

# Reverse in parentheses
___
Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.

Example:

* For ```inputString = "(bar)"```, the output should be
```solution(inputString) = "rab"```;
* For ```inputString = "foo(bar)baz"```, the output should be
```solution(inputString) = "foorabbaz"```;
* For ```inputString = "foo(bar)baz(blim)"```, the output should be
```solution(inputString) = "foorabbazmilb"```;
* For ```inputString = "foo(bar(baz))blim"```, the output should be
```solution(inputString) = "foobazrabblim"```.
Because ```"foo(bar(baz))blim"``` becomes ```"foo(barzab)blim"``` and then ```"foobazrabblim"```.

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
* For ```a = [-1, 150, 190, 170, -1, -1, 160, 180]```, the output should be
```solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]```.

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
# Almost increasing sequence
___
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: 
_sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

* For sequence = ```[1, 3, 2, 1]```, the output should be
```solution(sequence) = false.```
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

# Make array consecutive 2
___
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

* For statues = ```[6, 2, 3, 8]```, the output should be
  ```solution(statues) = 3```.

Ratiorg needs statues of sizes ```4```, ```5``` and ```7```.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MakeArrayConsecutive2.js)

```javascript
function solution(statues) {
    let maxValue = Math.max.apply(null, statues);
    let minValue = Math.min.apply(null, statues);

    let result = maxValue - minValue;
    return result - statues.length + 1;
}
```

# Check palindrom
___
Given the string, check if it is a palindrome.

* For ```inputString = "aabaa"```, the output should be
  ```solution(inputString) = true;```
* For ```inputString = "abac"```, the output should be
  ```solution(inputString) = false;```
* ```For inputString = "a"```, the output should be
  ```solution(inputString) = true.```

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

# Adjacent elements product
___
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

* For ```_inputArray = [3, 6, -2, -5, 7, 3]```, the output should be
```solution(inputArray) = 21```.

```7``` and ```3``` produce the largest product.

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

# All longest strings
___
Given an array of strings, return another array containing all of its longest strings.

* For ```inputArray = ["aba", "aa", "ad", "vcd", "aba"]```, the output should be
```solution(inputArray) = ["aba", "vcd", "aba"]```.

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

# Common character count
___
Given two strings, find the number of common characters between them.

For ```s1 = "aabcc"``` and ```s2 = "adcaa"```, the output should be
```solution(s1, s2) = 3.```

Strings have ```3``` common characters - ```2 "a"s```  and ```1 "c"```.

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

# Shape area
___
Below we will define an ```n```-interesting polygon. Your task is to find the area of a polygon for a given ```n.```

A ```1```-interesting polygon is just a square with a side of length ```1```. An n-interesting polygon is obtained by taking the ```n - 1```-interesting polygon and appending ```1```-interesting polygons to its rim, side by side. You can see the ```1-, 2-, 3-``` and ```4```-interesting polygons in the picture below.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/shapeArea.js)

```javascript
function solution(n) {
    return 2*n*(n-1) +1;
}
```

# Matrix elements sum
___
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, ```or any of the rooms below any of the free rooms.```

Given ```matrix```, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a ```0```).

* For
```javascript
matrix = 
[[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]]
```
the output should be ```solution(matrix) = 9```.

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

# is lucky
___
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number ```n```, determine if it's ```lucky``` or not.

Example:
* For ```n = 1230```, the output should be
```solution(n) = true```;
* For ```n = 239017```, the output should be
```solution(n) = false```.

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