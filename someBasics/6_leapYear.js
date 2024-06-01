// Write a program to check if a given year is a leap year or not.
function leapYear(year) {
// return year % 4 == 0;

    if (year % 4 == 0) {
        return true
    }
    else {
        return false
    }
}
let year = 1980
console.log(leapYear(year))