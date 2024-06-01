// Concatenate three arrays into one.

// Supposed three arrays
let alpha = ["Rose", "Jasmine"];
let beta = ["Lilly", "Rose"];
let gamma = ["Rose" , "Tulip"];

// Concatenate:
let aBG = alpha.concat(beta, gamma);
    console.log(aBG);
// Also: let alphaBeta = [...alpha, ...beta, ...gamma];

// To remove duplicate entries:
let finalArray = [...new Set(aBG)];
    console.log(finalArray);

