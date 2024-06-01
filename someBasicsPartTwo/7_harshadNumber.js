// Write a program to check if a given number is a Harshad number or not.
    // It is a no. divisible by the sum of its digits without any remainder.

function harshadNumber(num) {
    sum = 0;
    let n = num + '';
    for (let i = 0; i < n.length; i++) {
        sum = sum + parseInt(n[i]);
    };
    return ((num % sum) == 0);
};
let num = 153;
console.log(harshadNumber(num));