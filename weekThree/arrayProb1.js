function solution(arr, num){
let anyNumber = [];
for(let i=0; i<arr.length-1; i++){
if (i>=num){
   anyNumber[i] = arr[i+1]
    // anyNumber = anyNumber + arr
   // console.log(anyNumber)
}
else{
    anyNumber[i]=arr[i]
}
}
return anyNumber
}
let abc = [1,2,3,4,5,6,7];
let bb = solution(abc, 2)
console.log(bb)