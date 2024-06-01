// To check if he is improving, the number of times he breaks his record
//  for the most points should be greater than the number of times he breaks his record for the least points.
//  The first score in the season will be considered the season's record.

// Input: scores = [10, 20, 11, 5, 22, 9] 
// Output: “Omar has improved, as he broke his record for most points 2 time(s) and broke his record for least points 1 time(s).”

function trackScore (scores){
let temp= scores[0]
let count = 0
for(let i=1; i<scores.length; i++){
    if(scores[i]>temp){
        temp = scores[i]
        count++
    }
}
if(count>=2){
    return(`Player has improved, as he broke his record for more than 2 time(s), in total he broke his record for ${count} times.`)
}
}

let scores =  [40, 23, 33, 11, 30, 20, 55, 60, 43, 22, 80]
console.log(trackScore (scores))