// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence
// by removing no more than one element from the array.
//
//     Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
//     Sequence containing only one element is also considered to be strictly increasing.

function solution(sequence){
    let greaterThanTheNext = 0; // licznik liczb które są wieksze od następnej liczby
    for(let i = 1; i < sequence.length; i++) { // zaczynamy od 1 by zacząć sprawdzanie od 1 elementu
        if (sequence[i] <= sequence[i - 1]) { // - szukanie wiekszej liczby
            greaterThanTheNext++;   // licznik zwiekszony gdy warunek zostanie spełniony (znaleziono wiekszą liczbe wczesniej)
            if (greaterThanTheNext > 1) { // jeśli jest więcej takich liczb
                return false; // zwracamy false
            }
            if (sequence[i] <= sequence[i - 2]) { // znaleznienie 1 liczby wiekszej
                if (sequence[i + 1] <= sequence[i - 1]) { // szukanie kolejnej
                    return false; // po znalezieniu false
                }
            }
        }
    }
    return true; // po nie znalezieniu wiecej niż 1 true
}