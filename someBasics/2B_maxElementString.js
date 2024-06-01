// Write a program to find the maximum element in a string.
function maxElement(string) {
    let max = string[0];
    let index = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] > max) {
            max = string[i];
            index = i;
        }
    }
    return (`The maximum element is ${max} on index of ${index}.`);
}
let string = '5128174';
console.log(maxElement(string));