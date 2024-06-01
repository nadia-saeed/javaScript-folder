// Concatenate several arrays into one.

let ARRAYED = [
    [1, 352],
    [3, 54],
    [5, 466],
    [351, 32],
    [3, 4],
    [6, 50],
    [1, 25],
    [3, 43],
    [1, 235],
    [3, 466],
    [5, 64],
    [1, 22],
    [3, 34],
    [6, 53],
    [1, 32],
    [3, 466],
    [1, 466],
    [3, 354],
    [5, 6, 6],
    [1, 44],
    [3, 44],
    [6, 53],
    [1, 44],
    [3, 44],
    [1, 3],
    [3, 44],
    [5, 66],
    [1, 52],
    [3, 555],
    [6, 555],
    [1, 1],
    [3, 455],
];

let conArray = ARRAYED.reduce((acc, currArray) => acc.concat(currArray), []);
        console.log(conArray);
// acc stands for accumulator.

        // To remove duplicate entries:
let finalArray = [...new Set(conArray)];
console.log(finalArray);
