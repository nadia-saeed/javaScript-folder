// Write a function that takes a number n as input and prints prime numbers till n
function primeNo(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        let count = 0;
        for (num = 2; num < i; num++) {
            if (i % num == 0) {
                count++;
            };
        };
        if (count < 1) {
            arr[arr.length] = i

        };
    };
    return (arr);
};
let n = 20;
console.log(primeNo(n));