// This code takes in two numbers and outputs an array of numbers between the two

let noArray = [] // initializes an empty array to store the numbers

function numberRange(num1, num2){
    let i = num1-1 // sets the initialized number to one less the first number for it to be included
    while (i < num2){
        i++
        noArray.push(i) // appends the number to the array
    }
    return noArray // returns the resultant array
}

console.log(numberRange(-4, 7)) // An example input