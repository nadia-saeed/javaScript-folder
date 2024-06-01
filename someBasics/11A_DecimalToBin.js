//  Write a program to convert a decimal number to its binary equivalent.
function decToBinary(decimal) {
    let binary = ''
    let temp = decimal
    while (temp > 0) {
        remainder = temp % 2
        binary = remainder + binary
        temp = Math.floor(temp / 2)
    }
    return binary
}
let decimal = 37;
console.log(decToBinary(decimal));