// Write a program to count the number of vowels and consonants in a given array.
function vowCons(array) {
    let vowels = [];
    let vowelsCount = 0;
    let consonants = [];
    let consonantsCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
            vowels[vowels.length] = array[i];
            vowelsCount++
        }
        else {
            consonants[consonants.length] = array[i];
            consonantsCount++;
        }
    }
    return (`The vowels are [${vowels}] with the count of ${vowelsCount}, while the consonants are [${consonants}] with count ${consonantsCount}.`);
}
let array = ['a', 'e', 'f', 'o', 'u'];
console.log(vowCons(array));