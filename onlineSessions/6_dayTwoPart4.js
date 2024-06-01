// Array in decending order.
function decend (array){
let temp = 0
for(let i=0; i<array.length-1; i++){
    for(let j=0; j<array.length-1; j++){
        if(array[j]<array[j+1]){
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
}
return array
}
let array = [2,1,3,8,5,4,6,9,1]
console.log(decend(array))