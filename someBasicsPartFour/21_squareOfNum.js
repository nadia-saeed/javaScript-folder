// Create a square (of numbers) with dimensions of n.
let num = 1;
function squareOfNum(n) {
    for (let i = 1; i <= n; i++) {
        let sq = '';
        for (let j = 1; j <= n; j++) {
            sq = sq + num + ' ';
            num++;
        }
        console.log(sq);
    };
};
let n = 3;
squareOfNum(n);
