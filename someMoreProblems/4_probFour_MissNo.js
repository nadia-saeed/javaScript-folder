// // Given an array containing n distinct numbers taken,
// find the one that is missing from the array.

function miss(arr){
let temp = 0
let temp2 = []
// First sorting the array in ascending order:
for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
// Then finding out the missing number in the sorted array:
    for(let k=0; k<arr.length-1; k++){
        if((arr[k+1]-arr[k])!==1){
        temp2[temp2.length] = (arr[k+1]+arr[k])/2
    }
}
return (temp2)
}
let arr = [5,4,8,2,3,1,6]
console.log(miss(arr))
