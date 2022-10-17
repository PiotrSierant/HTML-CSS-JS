//PALINDROMY - to słowo, fraza, liczba lub inna sekwencja znaków, która czyta to samo do tyłu lub do przodu.

// 1. przerobienie stringa -> albo wszystkie litery małe albo duże
// 2. usunięcie niepotrzebnych znaków lub zamienienie ich na puste
// 3. podzielenie stringa na pojedyńcze znaki
// 4. odwrócenie tablicy znaków
// 5. połączenie elementów
// 6. porównanie ich

//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// /[^A-Za-z0-9]/g -> Znajduje jakikolwiek znak alfanumeryczny i znak podkreślenia _ (*, %, itp)
// + flaga g
function palindrom(inputString) {
    let newString = inputString.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    console.log(newString)
    let reverseString = newString.split('').reverse().join('');
    console.log(reverseString)
    return newString === reverseString;
}

// const word = "K.0aja0.k";
// const tab = [...word];
// console.log(tab.reverse().join("") == tab.join(""));

function palindrom2(inputString) {
    const newStr = [...inputString];
    return newStr.reverse().join("") === newStr.join("")
}
