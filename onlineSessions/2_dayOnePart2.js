// 28-March-2024

function primeNumber (n){
// let div = 1
// let count = 0
// while(div<=n){
//     if(n%div==0){
//     count++
//     }
//     div++
// }
//     if(count>2){
//         return(`The given number ${n} is not a prime number.`)
//     }
//     else{
//         return(`The given number ${n} is a prime number.`)
//     }
let count = 0
for(let i=2; i<n; i++){
    if(n%i==0){
        count++
    }
if(count>0){
    return(`The given number ${n} is not a prime number.`)
}
else{
    return (`The given number ${n} is a prime number.`)
}
}
}
let n= 8
console.log(primeNumber(n));