// Create a function which returns an inverted pyramid of increasing numbers.
function invertedPyramidNo(rows) {
    let num = 1
    for (let i = rows; i > 0; i--) {
        let pyramid = '';
        for (let j = 0; j < 2*(rows - i); j++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) - 1; k++) {
            pyramid = pyramid + num + ' ';
            num++
        };
        console.log(pyramid);
    };
};
let rows = 15;
invertedPyramidNo(rows);