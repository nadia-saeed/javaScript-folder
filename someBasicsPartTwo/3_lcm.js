// Write a program to find the Least Common Multiple (LCM) of two given numbers.
// LCM of two or more integers is the smallest positive integer that is divisible
// by each of the given integers without leaving a remainder.

function lcm(number1, number2) {
    let gcd = 0;
    for (let num = 0; num <= number1 + number2; num++) {
        if (number1 % num == 0 & number2 % num == 0) {
            gcd = num;
        };
    };
    let lcm = (number1 * number2) / gcd;
    return lcm;
};
let number1 = 10;
let number2 = 17;
console.log(lcm(number1, number2));