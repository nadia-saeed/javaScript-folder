// Write a program to check if a given number is prime or not.
function primeNo(n) {
    let count = 0;
    for (num = 2; num < n; num++) {
        if (n % num == 0) {
            count++;
        }

    }
    if (count > 0) {
        return (`not prime`);
    }
    else {
        return (`prime`);
    }
}
let n = 666;
console.log(primeNo(n));