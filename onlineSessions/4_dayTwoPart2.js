// 29-March-2024
// Reverse the string elements inside an array.
function reverse (array){
    let temp = ''
    let final = []
for(let i=0; i<array.length; i++){
    for(let j=array[i].length-1; j>=0; j--){
        temp = temp + array[i][j]
    }
    final[final.length] = temp
    temp = ''
}
return final
}
let array2 = ['book', 'rest', 'air', 'happy']
console.log(reverse(array2))