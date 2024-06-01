// Write a program to find the Greatest Common Divisor (GCD) of two given numbers.
      // GCD is the greatest common factor number that divides two numbers (here), exactly.
      // It is also called the highest common factor (HCF)

function gcd(number1, number2) {
    let gcd = 0;
    for (let num = 0; num <= number2 + number1; num++) {
        if (number1 % num == 0 && number2 % num == 0) {
            gcd = num;
        };
    };
    return gcd;
};
let number1 = 10;
let number2 = 5;
console.log(gcd(number1, number2));