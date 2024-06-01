// Create a function to print the given array elements (all) in uppercase.
function upperCaseArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase(); // toLowerCase() for small letters.
    };
    console.log(array);
};
let array = ['aPpLe', 'BanaNa', 'streET'];
upperCaseArrayElements(array);