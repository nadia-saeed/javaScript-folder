// Write a program which returns the index of the first occurrence of a
// specified element in an array, or -1 if it is not present.

function indexOf(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return (i);
        };
    };
    return (-1);
};
let array = [5, 9, 7, 9];
let element = 9;
console.log(indexOf(array, element));