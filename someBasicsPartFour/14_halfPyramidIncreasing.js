// Write a program to generate a half pyramid of increasing numbers.
function halfPyramidIncreasing(rows) {
    let num = 1
    for (let i = 1; i <= rows; i++) {
        let pyramid = '';
        for (let j = 1; j <= i; j++) {
            pyramid = pyramid + num + ' ';
            num++
        };
        console.log(pyramid);
    };
};
let rows2 = 3;
halfPyramidIncreasing(rows2);