// Write a program to generate a half pyramid of numbers.

function halfPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row = row + j + ' ';
        };
        console.log(row);
    };
};
let rows1 = 4;
let rows2 = 5;
halfPyramid(rows1);
halfPyramid(rows2);