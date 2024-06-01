// Write a program to generate a full pyramid of stars (with spaces).

function fullPyramidStarsSpaces(rows) {
    for (let i = 0; i < rows; i++) {
        let pyramid = '';
        for (let j = 0; j < 2 * (rows - i - 1); j++) { // difference is here.
            pyramid = pyramid + ' '
        };
        for (let k = 0; k < (2 * i) + 1; k++) {
            pyramid = pyramid + '*' + ' '
        };
        console.log(pyramid)
    };
};
let rows = 5;
fullPyramidStarsSpaces(rows);