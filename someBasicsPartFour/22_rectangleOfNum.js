// Create a rectangle of increasing numbers with the given dimensions.
function rectOfNum(l, w) {
    let num = 1;
    for (let i = 1; i <= l; i++) {
        let rectangle = '';
        for (let j = 1; j <= w; j++) {
            rectangle = rectangle + num + ' ';
            num++;
        };
        console.log(rectangle);
    };
};
rectOfNum(5, 3);