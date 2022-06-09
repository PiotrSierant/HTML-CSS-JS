// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// Trolle atakują sekcję komentarzy!
// Częstym sposobem radzenia sobie z tą sytuacją jest usunięcie wszystkich samogłosek z komentarzy trolli, neutralizując zagrożenie.
// Twoim zadaniem jest napisanie funkcji, która pobiera ciąg i zwraca nowy ciąg z usuniętymi wszystkimi samogłoskami.
// Na przykład ciąg "Ta strona jest dla przegranych LOL!" zmieniłoby się w „Ths wbst s fr lsrs LL!”.
// Uwaga: dla tego kata y nie jest uważane za samogłoskę.
function disemvowel(str) {
    return str.replace(/[aoieu]/gi,"");//without y (line 5)
}//  /a|o|i|e|u/gi === /[aoieu]/gi

const sentence =  "This website is for losers LOL!"; // would become "Ths wbst s fr lsrs LL!"
console.log(disemvowel(sentence));