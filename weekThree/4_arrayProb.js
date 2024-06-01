function solution(size){
let abc = []
for(let i=0; i<=size; i++){
    if(i % 2 == 0){
        abc[i] = 'a'
    }
    else{
        abc[i] = 'b'
    }
}
return (abc)
}
let ab = solution(100);
console.log(ab)

function count(abcde,ch){

let times = 0
for(let j=0; j<abcde.length; j++){
    if(abcde[j]== ch){
        times = times +1
    }
}
return (`The character ${ch} comes ${times} times.`);
}
let abcd = ['a', 'b', 'a', 'a', 'b', 's', 's', 'p', 's']
let cd = count(abcd,'p');
console.log(cd)