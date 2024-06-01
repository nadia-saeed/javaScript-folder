// Create a function to print half pyramid of increasing numbers upto n.
function halfPyramidUptoN(n) {
    currentNum = 1;
    for (let i = 1; currentNum <= n; i++) {
        let pyramid = '';
        for (let j = 1; j <= i; j++) {
            if (currentNum > n) {
                break;
            };
            pyramid = pyramid + currentNum + ' ';
            currentNum++;
        };
        console.log(pyramid);
    };
};
let n = 14;
halfPyramidUptoN(14);