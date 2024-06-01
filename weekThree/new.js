
let inputArray = [1, 3, 2, 4]
let k = 3
let f = 0
let count = 0
for(let i=0; i<inputArray.length; i++){
    if(f<k){
  if((inputArray[i]+inputArray[i+f]) > count){
  count = (inputArray[i]+inputArray[i+f])
    }
    }
    }
   console.log(count)