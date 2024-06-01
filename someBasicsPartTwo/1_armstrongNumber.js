// Write a program to check if a given number is an Armstrong number or not.
// FYI: Armstrong number is a number that is equal to the sum of cubes of its digits.

function armstrongNumber(number) {
    let cube = 0;
    let n = number + '';
    for (let i = 0; i < n.length; i++) {
        cube = cube + n[i] * n[i] * n[i];
    };
    // SHORT:
    // return (cube == number);

    // LONG:
    if (cube == number) {
        return true;
    }
    else {
        return false;
    };
};
let number = 153;
console.log(armstrongNumber(number));