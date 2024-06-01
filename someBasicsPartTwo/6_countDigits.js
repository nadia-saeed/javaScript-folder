// Write a program to count the number of digits in a given number.
function countDigits(num) {
    let count = 0;
    let n = (Math.abs(num) + ''); // as negative sign won't be while converting into a string.
    for (let i = 0; i < n.length; i++) {
        count++;
    };
    return count;
};
let num = -98;
console.log(countDigits(num));