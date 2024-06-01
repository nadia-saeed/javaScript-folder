// Develop a function that counts the frequency of each character in a string.
function frequency(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        };
    };
    return count;
};
let str = ['a','b','r','a','c','a','d','a','b','r','a'];
console.log(frequency(str));