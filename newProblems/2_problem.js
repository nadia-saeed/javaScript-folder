// Write a function to find the product of adjacent elements of an array.

function product (arrayTwo){
let prod = []
    for(let i=0; i<arrayTwo.length-1; i++){
        prod[prod.length] = (arrayTwo[i]*arrayTwo[i+1])
    }
    return prod
}
let arrayTwo = [5, 8, 7, 10, 0, 7, 6, 1]
console.log(product (arrayTwo))
