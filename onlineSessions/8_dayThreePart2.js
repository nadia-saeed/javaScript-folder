// To check if he is improving, the number of times he breaks his record
//  for the most points should be greater than the number of times he breaks his record for the least points.
//  The first score in the season will be considered the season's record.

// Input: scores = [10, 20, 11, 5, 22, 9] 
// Output: “Omar has improved, as he broke his record for most points 2 time(s) and broke his record for least points 1 time(s).”

function trackScore (scores){
    let temp1= scores[0]
    let temp2= scores[0]
    let countMax = 0
    let countMin = 0
    for(let i=1; i<scores.length; i++){
        if(scores[i]>temp1){
            temp1 = scores[i]
            countMax++
        }
        if(scores[i]<temp2){
            temp2 = scores[i]
            countMin++

        }
    }
        if((countMax-countMin)>=0){
    return (`Omar has improved, as he broke his record for most points ${countMax} time(s) and broke his record for least points ${countMin} time(s).`)
        }
   else{
    return(`Omar has not improved, as he broke his record for most points ${countMax} time(s) and broke his record for least points ${countMin} time(s).`)
   }  
}
    let scores =  [10, 20, 11, 5, 22, 9]
    console.log(trackScore (scores))