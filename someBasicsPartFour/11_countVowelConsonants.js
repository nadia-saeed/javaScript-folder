// Create a function which returns frequency of vowels and consonants in a string.

function countVowelConsonants(str) {
    str = str.toLowerCase();
    let vowels = 0;
    let consonants = 0;
    const vowelString = 'aeiou';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            if (vowelString.includes(char)) {
                vowels++
            }
            else {
                consonants++
            };
        };
    };
    return { vowels, consonants };
}
let str = 'jAvascriPt';
console.log(countVowelConsonants(str));