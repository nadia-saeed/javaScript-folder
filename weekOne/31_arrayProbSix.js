// Count and print the occurrences of a specific element in an array using a while loop.

let myArray = [1, 2, 3, 2, 4, 2, 5, 2, 5, 2];
function countOccurrences(arr, elementToFind) {
// <<<<<<< HEAD
  let count = 0;
  let index = 0;

  while (index < arr.length) {
    if (arr[index] === elementToFind) {
      count++;
    }
    index++;
  }
  console.log(`The element ${elementToFind} occurs ${count} time(s) in the array.`);
  return count;
}
countOccurrences(myArray, 2); // Why is this in the end?


    let count = 0;
    let index = 0;
  
    while (index < arr.length) {
      if (arr[index] === elementToFind) {
        count++;
      }
      index++;
    }
    console.log(`The element ${elementToFind} occurs ${count} time(s) in the array.`);
   // return count;
  
  countOccurrences(myArray, 2); // Why is this in the end?


