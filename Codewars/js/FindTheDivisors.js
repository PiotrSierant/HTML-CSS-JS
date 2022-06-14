function divisors(number){
    let result = [];
    for (let i = 2; i < number; i++) { // zaczynamy szukanie od 2 (odrzucamy rozwiązanie gdzie i = 1)
        if (number % i === 0) { // number jest podzielna przez i
            result.push(i);  // dodajemy rozwiązanie do wyników
        }
    }
    if (result.length === 0) { // jeśli nie ma wyników wypisz liczbę + stringa
        return number + " is prime";
    }
    return result; // zwróć result
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));


// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"