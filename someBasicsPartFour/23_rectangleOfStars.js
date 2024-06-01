// Create a rectangle of increasing numbers with the given dimensions.
function rectOfStars(l, w) {
    for (let i = 1; i <= l; i++) {
        let rectangle = '';
        for (let j = 1; j <= w; j++) {
            rectangle = rectangle + '*' + ' ';
        };
        console.log(rectangle);
    };
};
rectOfStars(7, 5);