// Write a program to check if a given years are leap years or not (in an Array).
function leapYear(year) {
    for (let i = 0; i < year.length; i++) {
        if (year[i] % 4 == 0) {
            year[i] = true;
        }
        else {
            year[i] = false;
        }
    }
    return (year);
}
let year = [1980, 1950, 1940, 1985, 2024, 2020];
console.log(leapYear(year));