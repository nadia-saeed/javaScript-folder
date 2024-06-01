// Write function which sorts the array elements in ascending order.
function sortedArray(array) {
let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) { // (write < if want to sort in desc. order)
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let array = [1, 5, 2, 4, 8, 30, 9, 3, 0, 100];
console.log(sortedArray(array));