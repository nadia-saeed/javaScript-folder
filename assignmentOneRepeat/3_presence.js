// Given an array of strings, write a function that returns
// true if a string is present in the array, and false if it is not present.

function present(objects, item){
    for(let i=0; i<objects.length; i++){
        if(item==objects[i]){
            return (true)
        }
        else{
            return false
        }
    }
}

let fruits = ['Apple', 'Banana', 'Strawberry', 'Guava', 'Dates']
let item = 'Apple'
console.log(present(fruits, item))