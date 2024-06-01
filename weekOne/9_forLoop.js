// FOR LOOP = Repeats some code a LIMITED amount of times.

// Case: 1
// When we want to repeat a statement n-times.

for (let i=0; i<=3; i++) {
    console.log('black pepper', i);
}

// Case 2:Here we are trying to show a specific type of numbers.

// Suppose: Only the odd numbers.

for (let i=0; i<10; i++) {
    if(i % 2 !==0)
    console.log(i);
}
// if statement is written as if(i % 2 !== 0) to show the odd no.s (remainder isn't equal to zero)

// Suppose: Only the even numbers.

for (let i=0; i<=10; i++) {
    if(i % 2 === 0)
    console.log(i);
}
// if statement is written as if(i % 2 === 0) to show the even no.s (remainder is equal to zero)

// Suppose: Only the even numbers in reverse order.

for (let i=10; i>=0; i--) {
    if(i % 2 === 0)
    console.log(i);
}
