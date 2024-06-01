// Write a program to calculate the factorial of a given number.
function factorial(n) {
    let number = 1;
    let k = 1;
    while (k <= n) {
        number = number * k
        k++
    }
    return number
}
let n = 4;
console.log(factorial(n));