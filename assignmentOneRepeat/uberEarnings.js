// Function 1
function calculateTotalEarnings (arrayOne, percentEarn){
let sum = 0
for(let i=0; i<arrayOne.length; i++){
sum = sum + arrayOne[i]
}
earning = (percentEarn * sum)
return earning
}
// Function 2
function calculateFuelCost (arrayTwo,fuelRate){
let sum = 0
for(let i=0; i<arrayTwo.length; i++){
    sum = sum + arrayTwo[i]
}
cost = (fuelRate * sum)
return cost
}
// Function 3
function calculateNetEarnings (arrayThree, percentEarn, fuelRate){
    let newRate = percentEarn - fuelRate
    let sum = 0
for(let i=0; i<arrayThree.length; i++){
    sum = sum + arrayThree[i]
}
    earnings = (newRate * sum)
return earnings
}
// Function 4
function calculateAverage (arrayFour){
    let av = 0
    for(let i=0; i<arrayFour.length; i++){
        av = av + arrayFour[i]
    }
    av = (av / arrayFour.length)
    return av
}
//Function 5
function calculateHighestFare (arrayFive){
    let temp = 0
    for(let i=0; i<arrayFive.length; i++){
        if (arrayFive[i]>temp){
        temp = arrayFive[i]}
    }
    return temp
}
// Function 6: ascending order and display the sorted array.
function sortedArray (arraySix){
let newArray = []
for (let i = 0; i<arraySix.length; i++) {
        newArray[i] = arraySix[i]
}
for (let i=0; i<newArray.length; i++) {
    for (let j=0; j<newArray.length; j++) {
        if (newArray[j] > newArray[j+1]) {
            let temp = newArray[j];
            newArray[j] = newArray[j+ 1];
            newArray[j+1] = temp;
}}}
    return(newArray);
}
// Function 7:  total number of miles that driver drove in a day
function calculateTotalMiles (arraySeven){
    let sum = 0
    for (let i=0; i<arraySeven.length; i++){
        sum = sum + arraySeven[i]
    }
    sum = sum / costPerMile
return sum
}
// Function 8: display fares above a certain threshold 
function filteredArray(arrayEight){
    let solution = []
    let noValue = []
        for(let i=0; i<arrayEight.length; i++){
            if(arrayEight[i]>thresHold){
                solution[solution.length] = arrayEight[i]
    }
        else{
            noValue[noValue.length] = arrayEight[i]
    }
}
return(solution)
}
// Function 9
function duplicateRemoved (arrayNine){

}

// Function 10
function reverseArray (arrayTen){
let reverseArray = []
    for(let i=arrayTen.length-1; i>=0; i--){
        reverseArray[reverseArray.length] = arrayTen[i]
    }
return(reverseArray)
}

// Function 11
function faresDifference (arrayEleven){
let newA = []
for(let i=0; i<arrayEleven.length-1; i++){
   newA[newA.length] = arrayEleven[i+1]-arrayEleven[i]
}
return(newA)
}

let RidesFaresEarned = [20, 50, 30, 34, 12, 12, 34, 8]
let percentEarn = 0.5
let fuelRate = 0.2
let costPerMile = 2
let thresHold = 21
// console.log (calculateTotalEarnings (RidesFaresEarned, percentEarn))
// console.log (calculateFuelCost(RidesFaresEarned, fuelRate))
// console.log(calculateNetEarnings(RidesFaresEarned, percentEarn, fuelRate))
// console.log(calculateAverage(RidesFaresEarned))
// console.log(calculateHighestFare(RidesFaresEarned))
console.log(sortedArray (RidesFaresEarned))
// console.log(calculateTotalMiles (RidesFaresEarned))
// console.log(filteredArray(RidesFaresEarned, thresHold))
// console.log(reverseArray(RidesFaresEarned))
console.log(faresDifference(RidesFaresEarned))