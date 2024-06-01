// Create a function that returns reversed number.

function reverseNumber(number) {
    let reversed = 0;
    let num = Math.abs(number);
  
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
      num = Math.floor(num / 10);
    };
  
    if (number < 0) {
      reversed = reversed * (-1);
    };
    return reversed;
  };
  const num1 = 12345;
  const num2 = -5432;
  console.log("Reverse of", num1, "is", reverseNumber(num1));
  console.log("Reverse of", num2, "is", reverseNumber(num2));