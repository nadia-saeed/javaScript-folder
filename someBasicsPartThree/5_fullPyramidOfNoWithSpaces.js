// Write a program to generate a full pyramid of numbers (with spaces).

function fullPyramidNoSpaces(rows) {
    for (let i = 0; i < rows; i++) {
        let pyramid = '';
        for (let j = 0; j < 2 * (rows - i - 1); j++) { // difference is here.
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) + 1; k++) {
            pyramid = pyramid + k + ' ';
        };
        console.log(pyramid);
    };
};
let rows = 5;
fullPyramidNoSpaces(rows);