// 28-March-2024

function commonElem (arrayOne, arrayTwo){
let temp = []
let temp1 = 0
for(let i=0; i<arrayOne.length; i++){
    for(let j=0; j<arrayTwo.length; j++){
        if(arrayOne[i]==arrayTwo[j]){
           temp[temp.length]= arrayOne[i]
        }
    }
}
return temp
}
let arrayOne = [1,2,3,4,7]
let arrayTwo = [2,4,6,7]
console.log(commonElem(arrayOne, arrayTwo))