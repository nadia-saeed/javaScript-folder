// Given an array of student heights.
// Sort the array to make a queue for the student assembly of students with the
// smallest student in front and tallest student in the back.
// If two students have the same height, assign them random positions.

function sorting(height){
for (let i=0; i<height.length; i++) {
    for (let j=0; j<height.length; j++) {
        if (height[j] > height[j+1]) {
                let temp = height[j]
                height[j] = height[j+ 1]
                height[j+1] = temp
    }
}}
    return(height)
}
let heightStudents = [45, 55, 75, 67, 69, 37, 88, 55]
console.log(sorting(heightStudents))