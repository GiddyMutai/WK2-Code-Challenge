// This is code that takes in a string as input and coverts the case of every individual character

let converted = []; // empty initialized array to store the converted characters

const sentence = "JeSuS WaLKs oN waTeR"; // An example sentence

const characters = sentence.split(""); // returns the individual characters and stores it in an array

for (let i = 0; i < characters.length; i++) {
  if (characters[i] === "") {
    // checks if the character is a whitespace
    converted += characters[i];
  } else {
    if (characters[i].toUpperCase() === characters[i]) {
      // checks to see if the character is lower or upper case
      converted += characters[i].toLowerCase();
    } else {
      converted += characters[i].toUpperCase(); // concatenates the string
    }
  }
}

console.log(converted); // outputs the resutant sentence
