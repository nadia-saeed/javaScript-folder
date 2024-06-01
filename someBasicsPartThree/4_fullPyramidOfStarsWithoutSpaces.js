// Write a program to generate a full pyramid of stars (without any spaces).

function fullPyramidStars(rows) {
    for (let i = 0; i < rows; i++) {
        let pyramid = '';
        for (let space = 0; space < (rows - i - 1); space++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 0; k < (2 * i) + 1; k++) {
            pyramid = pyramid + '*';
        };
        console.log(pyramid);
    };
};
let rows = 6;
fullPyramidStars(rows);