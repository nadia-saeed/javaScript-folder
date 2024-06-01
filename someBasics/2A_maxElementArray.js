// Write a program to find the maximum element in an array.
function maxElement(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return (`The maximum element is ${max} on index of ${index}.`);
}
let array = [5, 12, 8, 17, 49, 9];
console.log(maxElement(array));