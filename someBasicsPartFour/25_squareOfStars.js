// Create a square (of stars) with dimensions of n.
function squareOfStars(n) {
    for (let i = 1; i <= n; i++) {
        let sq = '';
        for (let j = 1; j <= n; j++) {
            sq = sq + '*' + ' ';
        };
        console.log(sq);
    };
};
squareOfStars(5);