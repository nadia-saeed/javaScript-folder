// Given a number n, find out if a square can be created with n being the area of the square.. 
// Example: if the number is 25: a square of length 5 and width 5 can be created.
function square(n){
let temp = 1
while(temp*temp<=n){
    if(temp*temp==n){
        return true
    }
    temp = temp + 1
}
return false
}
let n = 26
console.log(square(n))