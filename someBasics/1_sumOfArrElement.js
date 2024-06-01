// Write a program to calculate the sum of elements in an array.

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return (sum)
}
let numbers = [5, 8, 12, 3, 7];
console.log(sumOfElements(numbers));