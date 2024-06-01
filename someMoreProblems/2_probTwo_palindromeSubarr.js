// Given an array of arrays e.g [ [1,2,1],[2,3,9]] find out the subarray which is a palindrome.
function palindrome(arr){
let rev=[]
let rev2 = []
let pal = []
for(let i=0; i<arr.length; i++){
    for(let j=arr[i].length-1; j>=0; j--){
        rev[rev.length] = arr[i][j]
    }
        rev2[rev2.length] = rev
        rev = []
}
// console.log(arr)
for(let k=0; k<arr.length; k++){
    for(let l=0; l<rev2.length; l++){
        if(arr[k]==rev2[l]){
            pal[pal.length] = arr[k]
           // console.log(pal) 
        }
        // console.log(pal)
    }
}
return(pal)
}
let arr= [[1,2,1],[2,3,9]]
console.log(palindrome(arr))
//palindrome(arr)
