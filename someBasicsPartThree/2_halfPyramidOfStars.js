// Write a program to generate a half pyramid of stars (*):

function halfPyramidStars(row) {
    for (let i = 1; i <= row; i++) {
        let rows = '';
        for (let j = 1; j <= i; j++) {
            rows = rows + '*' + ' ';
        };
        console.log(rows);
    };
};
let row = 5;
halfPyramidStars(row);