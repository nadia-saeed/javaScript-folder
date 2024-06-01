// Check if a specific element is present in an array using a for loop. Print "Element found" or "Element not found" accordingly.

let numbers = [5, 7, 0, 56, 74, 5, 53, 5, 5];
let reqNum = 50000;
let found = false;

for(let i=0; i<numbers.length; i++){
    if(numbers[i]== reqNum){
        console.log("Element Found");
        found = true;
        break;
   }
}

if (!found) {
    console.log("Element not Found");
}
