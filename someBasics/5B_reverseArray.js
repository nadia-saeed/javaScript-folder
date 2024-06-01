// Write a program to reverse a given array.
function revArray(arr) {
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray[reverseArray.length] = arr[i];
    }
    return (reverseArray);
}
let arr = [1, 5, 6, 9, 0, 3, 5, 6];
console.log(revArray(arr));
