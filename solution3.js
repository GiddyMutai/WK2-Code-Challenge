// This code takes an array as an input and returns an array with only the prime numbers

const inpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // An example input array
const primeNo = []; // Initialize empty array to store the prime numbers

for (let i = 0; i < inpArray.length; i++) {
  // Iterate over the array
  let isPrime = true; // Assume the number is prime initially

  if (inpArray[i] <= 1) {
    // Skip numbers less than or equal to 1
    continue;
  }

  for (let j = 2; j <= Math.sqrt(inpArray[i]); j++) {
    // Check for divisors from 2 to square root of the number
    if (inpArray[i] % j === 0) {
      // If the number is divisible by any other number, it's not prime
      isPrime = false;
      break; // Exit the loop early
    }
  }

  if (isPrime) {
    // If the number is prime, add it to the primeNo array
    primeNo.push(inpArray[i]);
  }
}

console.log(primeNo); // Output the prime numbers
