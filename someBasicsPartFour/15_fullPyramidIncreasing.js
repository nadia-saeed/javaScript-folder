// Write a program to generate a full pyramid of  increasing numbers.
function fullPyramidInc(rows) {
    let num = 1     // (if decreasing order, then let num = (rows*rows))
    for (let i = 0; i < rows; i++) {
        let pyramid = '';
        for (let j = 0; j < 2 * (rows - i - 1); j++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) + 1; k++) {
            pyramid = pyramid + num + ' ';
            num++ // (if decreasing order, then num--)
        }
        console.log(pyramid);
    };
};
let rows = 3;
fullPyramidInc(rows);