// Write a program to generate a full pyramid of numbers (without any spaces).

function fullPyramidNo(rows) {
    for (let i = 0; i < rows; i++) {
        let pyramid = '';
        for (let j = 0; j < (rows - i - 1); j++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) + 1; k++) {
            pyramid = pyramid + k;
        }
        console.log(pyramid);
    }
}
let rows = 5;
fullPyramidNo(rows);
