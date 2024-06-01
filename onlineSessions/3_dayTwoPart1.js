// 29-March-2024
// Sorted array with increasing strings' lengths.

function sort(arr){
let temp= ''
for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1; j++){
        if(arr[j].length>arr[j+1].length){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
    }
}
}
return arr
}
let arr = ['book', 'air', 'class', 'consequence', 'mynameisapple', 'ant', 'ok', 'e']
console.log(sort(arr))