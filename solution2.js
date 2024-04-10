// This code takes in two numbers and outputs an array of numbers between the two

let noArray = []; // initializes an empty array to store the numbers

function numberRange(num1, num2) {
  if (num1<num2){ // checks if num1 is greater than num2
    let i = num1 - 1; // sets the initialized number to one less the first number for it to be included
    while (i < num2) {
      i++;
      noArray.push(i); // appends the number to the array
    }
  } else if (num1>num2){
    let i = num1 + 1; // sets the initialized number to one less the first number for it to be included
    while (i > num2) {
      i--;
      noArray.push(i); // appends the number to the array
    }
  }
  return noArray // returns the outputted array
}

console.log(numberRange(-7, -17)); // An example input
