// Print the elements after the mid of the given array.
function splitArrFromMiddle(arr) {
    let ar = [];
    let middleIndex = Math.round(arr.length / 2);
    for (let i = middleIndex; i < arr.length; i++) {
        ar[ar.length] = arr[i];
    };
    console.log(ar);
};
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
splitArrFromMiddle(arr1);
splitArrFromMiddle(arr2);
