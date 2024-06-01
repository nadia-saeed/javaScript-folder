// Write a program that checks if string is palindrome.

let str = '123456787654321';
let revResult=''
let odd = '';
let even = '';
let newOdd ='';


for(let i=str.length-1; i>=0; i--){
        revResult = revResult + str[i];
    }
    if(revResult==str){
        console.log("It is a palindrome.")
    }
    else
    {console.log("It isn\'t a palindrome.")}
// for (let i=0; i<str.length; i++){




    // if(str.length % 2 == 0){
    //     even = even + str[i]
    //     even = (i+1)/2
    // for(i=0; i<str.length; i++){
    //     if(i=even){
    //         newEven = newEven 

    //     }
    // }
    // }
    // else{
    //     odd = odd + str[i];
    //     odd = Math.floor((i+1)/2);
    // }
// }
console.log(even);
console.log(odd);