function highAndLow(string){
    const array = string.split(" ").map(function (element){
        return Number(element);
    });
    //(...tablica) pass all elements of iterableObj as arguments to function
    //(...tablica) przekaż wszystkie elementy jako argumenty do funkcji
    return Math.max(...array) + " " + Math.min(...array)
}// (... - Spread_syntax) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function highAndLow1(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}// Metoda apply() wywołuje daną funkcję podstawiając daną wartość this i argumenty przedstawione w postaci tablicy
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow1("1 2 3 4 5");  // return "5 1"
highAndLow1("1 2 -3 4 5"); // return "5 -3"
highAndLow1("1 9 3 4 -5"); // return "9 -5"