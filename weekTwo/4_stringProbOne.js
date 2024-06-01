// Convert a string to array using built in and self written method both. Split based on space between the words.

function createArray(string) {
    let finalArray= [];
    let subString= '';

for(let i = 0; i<=string.length; i++){
    if(string[i] == ' '|| i == string.length){
        if(subString.length > 0){
     finalArray.push(subString);
     subString = '';
    }
} else{
    subString = subString + string[i];
}
}
return finalArray;
}
let string = 'I am getting polo';
console.log(createArray(string));