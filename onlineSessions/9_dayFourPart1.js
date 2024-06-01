// 5/Apr/24
// Given an array of integers and a target sum n,
// find a pair of numbers in the array that adds up to the target sum.
// Return the indices of the two numbers.

function targetSum(arr, n) {
    let temp1 = 0
    let temp2 = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == n) {
                temp1 = i
                temp2 = j
            }
        }
    }
    return (`indices are ${temp2} and ${temp1}`)
}
let arr = [1, 3, 5, 7, 2]
let n = 10
console.log(targetSum(arr, n))