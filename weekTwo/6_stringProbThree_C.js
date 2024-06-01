
function reverseString(string) {
    let subString= '';
    let finalString= '';

for(let i = string.length-1; i>=0; i--){
    if(string[i] == ' '|| i == 0){
        if(i==0){
     subString= subString + string[i];
    }
finalString = finalString + (finalString.length > 0 ? ' ' : '') + subString;
subString = '';
} else{
    subString = string[i] + subString
}
}
return finalString;
}
let string = 'I am a fruit';
console.log(reverseString(string));

   