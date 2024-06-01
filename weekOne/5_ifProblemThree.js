// Take three numbers as input and print the largest one.

let x = 1
let y = 12
let z = 1

if (x > y && x > z){
    console.log('x');
}
else if (y > x && y > z){
    console.log('y');
}
else if (z > x && z > y){
    console.log('z')
}
else {
    console.log('equal');
}