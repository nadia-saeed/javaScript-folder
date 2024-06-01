// Create a function which returns an inverted pyramid of numbers (with spaces).
function invertedPyramidNoSpaces(rows) {
    for (let i = rows; i > 0; i--) {
        let pyramid = '';
        for (let j = 0; j < 2 * (rows - i); j++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) - 1; k++) {
            pyramid = pyramid + k + ' ';
        };
        console.log(pyramid);
    };
};
invertedPyramidNoSpaces(5);
