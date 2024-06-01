// Given an array containing n distinct numbers taken from 0,1,2,...,n, find the one that is missing from the array.

function missing(arr){
    let temp = []
for(let i=0; i<arr.length-1; i++){
    if((arr[i+1]-arr[i])!==1){
        temp[temp.length] = ((arr[i]+arr[i+1])/2) 
    }
    
}
console.log(temp)
return(`The missing number from the array is: [${temp}].`)
}
let arr= [0,1,2,3,4,6,7,8]
console.log(missing(arr))