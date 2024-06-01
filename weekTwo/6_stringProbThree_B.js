// Write a program that reverse the string( Do this with strings with spaces).

function reverse(stringBanana){
    let banana = '';

for(let i=stringBanana.length-1; i>=0; i--){
    banana = banana + stringBanana[i];
}
return (banana);
}

// Operation:
let stringBanana = "I am a fruit and people make my milkshake.";
let sBanana = reverse(stringBanana);
console.log(sBanana);