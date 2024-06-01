// Write a program to check if a given number is even or odd.

function evenOdd(num) {
    if (num % 2 == 0) {
        return ('even')
    }
    else {
        return ('odd')
    };
};
let num1 = 8; let num2 = 3; let num3 = 0; let num4 = -5;
console.log(evenOdd(num1)); console.log(evenOdd(num2));
console.log(evenOdd(num3)); console.log(evenOdd(num4));