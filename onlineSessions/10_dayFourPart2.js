// Create a half pyramid of increasing numbers upto n.
function pyramid(n) {
    let number = 1
    let str = ''
    let i = 0
    let count = 1
    temp = ''

    while (i <= n) {
        for (let j = 0; j < count; j++) {
            if (number <= n) {
                str = str + number + ' '
                number++
            }
            i++
        }
        count++
        console.log(str)
        temp = ''
        str = ''
    }

}
let n = 13
pyramid(n)