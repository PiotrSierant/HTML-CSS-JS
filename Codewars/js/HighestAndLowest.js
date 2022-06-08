function highAndLow(string){
    const array = string.split(" ").map(function (element){
        return Number(element);
    });
    console.log(Math.max(...array) + " " + Math.min(...array));
    //(...tablica) pass all elements of iterableObj as arguments to function
    //(...tablica) przekaż wszystkie elementy jako argumenty do funkcji
}
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"