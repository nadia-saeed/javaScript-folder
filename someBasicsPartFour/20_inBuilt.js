// Converting all first elements of the strings of array as capital, rest small.

function upperAndLower (arr){
for(let i=0; i<arr.length; i++){
    arr[i] = arr[i].toLowerCase()
    // arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
}
for(let j=0; j<arr.length; j++){
    arr[j] = arr[j].charAt(0).toUpperCase()
}
console.log(arr)
}
let arr = ['aPpLe','bROWn','CanDY'];
upperAndLower(arr)