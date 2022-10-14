# ConcatenateArrays
___
Given two arrays of integers `a` and `b`, obtain the array formed by the elements of `a` followed by the elements of `b`.

Example:
* For `a = [2, 2, 1]` and `b = [10, 11]`, the output should be `solution(a, b) = [2, 2, 1, 10, 11]`.

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ConcatenateArrays.js)
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


[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/FirstReverseTry.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ArrayReplace2.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/CreateArray.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/CountBlackCells.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Candles.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Rounders.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/IncreaseNumberRoundness.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AppleBoxes.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/AdditionWithoutCarrying.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/Lineup.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MagicalWell.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/CountSumofTwoRepresentations2.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/LeastFactorial.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/EqualPairofBits.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/DifferentRightmostBit.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/SecondRightmostZeroBit.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/SwapAdjacentBits.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MirrorBits.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/RangeBitCount.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ArrayPacking.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/KillK-thBit.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MetroCard.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/WillYou.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/TennisSet.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ArithmeticExpression.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/IsInfiniteProcess.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ExtraNumber.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/ReachNextLevel.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/PhoneCall.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/LateRide.js)
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

[My solution - Click me and check the whole solution + comments ](https://github.com/PiotrSierant/HTML-CSS-JS/blob/main/CodeSignal/js/MaxMultiple.js)
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