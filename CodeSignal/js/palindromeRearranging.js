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
            licznik += 1;
        }
    }
    return licznik <= 1
}

/*
wszystkie litery parzyste = true
wszystkie litery parzyste i jedna nieparzysta = true
wszystkie litery wieksze od jeden nieparzyste = false
 */