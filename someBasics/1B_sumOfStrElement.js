// Write a program to calculate the sum of elements in a string.
function sumOfElements(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum = sum + parseInt(string[i]);
    }
    return sum;
}
let string = '125291552';
console.log(sumOfElements(string));