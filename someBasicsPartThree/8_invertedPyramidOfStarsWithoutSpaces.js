// Create a function which returns an inverted pyramid of stars (without spaces).
function invertedPyramidStars(rows) {
    for (let i = rows; i > 0; i--) {
        let pyramid = '';
        for (let j = 0; j < (rows - i); j++) {
            pyramid = pyramid + ' ';
        };
        for (let k = 1; k <= (2 * i) - 1; k++) {
            pyramid = pyramid + '*';
        };
        console.log(pyramid);
    };
};
let rows = 5;
invertedPyramidStars(rows);