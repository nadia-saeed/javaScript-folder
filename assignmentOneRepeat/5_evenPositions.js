// Create an array with all the characters at even positions. E.g. [b,d,f…]

function evenAlpha(alphas){
let newAlpha =[]
for(let i=1; i<alphas.length; i++){
    if(i % 2==0){
        newAlpha[newAlpha.length] = alphas[i]
    } 
}
    return(newAlpha)
}
let alphabets = ['A','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(evenAlpha(alphabets))
