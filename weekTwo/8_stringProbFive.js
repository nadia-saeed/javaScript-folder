let n = 1230
let tempOne = 0;
    let tempTwo = 0;
   // n=String(n)
    
    for(let i=0; i<n.length; i++){
        if(n.length/2 > i){
            tempOne = tempOne + i;
        }
        else{
            tempTwo = tempTwo +i;
        }
    }
    console.log (tempOne);
   console.log (tempTwo);
