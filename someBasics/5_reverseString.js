// Write a program to reverse a given string.
function revString(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString = reverseString + string[i];
    }
    return (reverseString);
}
let string = 'flower';
console.log(revString(string));