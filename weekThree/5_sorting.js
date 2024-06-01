function solution (arr){
let temp = 0
    for(let i=0; i<array.length; i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return arr
}
let array= [8,1,0,4,7];
let yoyo = solution(array)
console.log(yoyo)
