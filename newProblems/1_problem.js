// Write a function to find highest and lowest number in an array.

function highLow(arrayOne){
let high = arrayOne[0]
let low = arrayOne[0]

for(let i=0; i<arrayOne.length; i++){
    if(arrayOne[i]>high){
        high = arrayOne[i]
    }
    if(arrayOne[i]<low){
        low = arrayOne[i]
    }
}
return (`The highest number in the array is ${high} while the lowest number is ${low}.`)
}
let arrayOne = [55, 96, -5, -2, 1001, -55, 7]
console.log(highLow(arrayOne))