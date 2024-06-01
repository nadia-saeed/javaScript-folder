// Function to print the pyramid numbers in reverse order.

function reversePyramid (n){

let str = ''
let c= 1
let number = n
let i = 0

while (i<=n){
for(let j=0; j<c ;j++){
    if(number>0){
    str = str + number + ' '
    number--
}
i++
}
c++
console.log(str)
str = ''
}
}
let n= 15
reversePyramid(n)