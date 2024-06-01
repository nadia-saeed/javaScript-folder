// Write a program to check if a given string is a palindrome or not.
function palindrome(string) {
    let temp = '';
    for (let i = string.length - 1; i >= 0; i--) {
        temp = temp + string[i];
    }

    if (temp == string) {
        return (true);
    }
    else {
        return (false);
    }
}
let string = 'madam';
console.log(palindrome(string));