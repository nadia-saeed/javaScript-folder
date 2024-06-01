// Write a program to count the number of vowels and consonants in a given string.
function vowCons(string) {
    let vowels = '';
    let vowelsCount = 0;
    let consonants = '';
    let consonantsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            vowels = vowels + string[i];
            vowelsCount++
        }
        else {
            consonants = consonants + string[i];
            consonantsCount++;
        }
    }
    return (`The vowels are '${vowels}' with the count of ${vowelsCount}, while the consonants are '${consonants}' with count ${consonantsCount}.`);
}
let string = 'ubodjbcmnzaei';
console.log(vowCons(string));