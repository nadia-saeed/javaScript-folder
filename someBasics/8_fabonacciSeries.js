// Write a program to generate the Fibonacci series up to a given number of terms.

function fibanocciArray(n) {
    let fib = [];
    fib.length = n;
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 0; i<fib.length-2; i++) {
        fib[i+2] = fib[i] + fib[i+1];
    }
    return fib;
}
let n = 10;
console.log(fibanocciArray(n));