// Write a program to check if a given number is a perfect number or not.
// It is a positive integer that is equal to the sum of its proper divisors. 

function perfectNumber(n) {
    let sum = 0;
    for (let num = 0; num < n; num++) {
        if (n % num == 0) {
            sum = sum + num;
        };
    };
    return (sum == n);
};
let n = 496;
console.log(perfectNumber(n));