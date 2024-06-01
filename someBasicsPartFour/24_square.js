// Construct a square with dimension (n).
// Inside each pixel print 1 to n numbers in increasing order in one line
// and in decreasing order in next line.

function squareOf(n) {
    for (let i = 1; i <= n; i++) {
       let square = '';
        if (i % 2 !== 0) {
            for (let j = 1; j <= n; j++) {
                square = square + j + ' ';
            };
        }
        else {
            for (let j = n; j > 0; j--) {
                square = square + j + ' '
            };
        };
        console.log(square);
    };
};
squareOf(9);