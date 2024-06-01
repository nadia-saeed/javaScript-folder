// Find and print the highest number in an array using a for loop and the index at which it is present.

let Array = [5, 1, 9, 7, 15, 2];
let highNumber = Array[2];
let highIndex = 0;

for(let i=0; i<Array.length; i++) {
    if(Array[i] > highNumber) {
        highNumber = Array[i];
        highIndex = i;
    }
    console.log(`The highest number is ${highNumber} at index ${highIndex}.`);
}
console.log(`The highest number is ${highNumber} at index ${highIndex}.`);

  