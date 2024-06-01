// Write a program to concatenate two strings.

function concatd(str1, str2){
    let result= str1+str2;

// Considering the first string.
// for (let i=0; i<str1.length; i++){
//     result = result + stringOne[i];
// }

// // Considering the second string.
// for(let i=0; i<str2.length; i++){
//     result = result + stringTwo[i];
// }
return result;
}

// Operation.
let stringOne = "My name is";
let stringTwo = " Candle Light";
let concatdString = concatd(stringOne,  stringTwo);
console.log(concatdString);