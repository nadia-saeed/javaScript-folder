// Write a program to calculate the power of a number raised to an exponent.
function power(base, exponent) {
    let number = 1;
    for (let i = 1; i <= exponent; i++) {
        number = number * base;
    };
    return number;
};
let base = 2;
let exponent = 3;
console.log(power(base, exponent));