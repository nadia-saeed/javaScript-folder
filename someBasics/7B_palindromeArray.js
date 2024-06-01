// Write a program to check if a given array is a palindrome or not.
function palindrome(array) {
    let temp = [];
    for (let i = array.length - 1; i >= 0; i--) {
        temp[temp.length] = array[i];
    }

    // Method 1:
    for (let i = 0; i < array.length; i++) {
        if (array[i] == temp[i]) {
            return true;
        }
        else {
            return false;
        }
    }

    // Method 2:
    // By converting the arrays to a string.
    // let temp1 = temp + '' ;
    // let array1 = array + '' ;
    // if (temp1 == array1) {
    //     return (true);
    // }
    // else {
    //     return (false);
    // }
}
let array = [1, 2, 5, 2, 1];
console.log(palindrome(array));