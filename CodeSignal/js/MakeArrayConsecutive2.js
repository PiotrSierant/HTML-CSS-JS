// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
// each statue having an non-negative integer size. Since he likes to make things perfect,
// he wants to arrange them from smallest to largest so that each statue will be bigger than
// the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
// Help him figure out the minimum number of additional statues needed.

// Example
//
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

// Rozwiązanie: Najwieksza wartość z tablicy - Najmniejsza wartość z tablicy
// następnie róznica długości liczb i wartości wyżej obliczonych
// dodać jeden żeby się zgadzało :)s

function solution(statues) {
    let maxValue = Math.max.apply(null, statues);
    let minValue = Math.min.apply(null, statues);

    let result = maxValue - minValue;
    return result - statues.length + 1;
}