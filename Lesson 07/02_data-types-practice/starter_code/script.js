// Use a console.log to print out "hello world!" by using the given variables. Try using concatenation and interpolation for two different methods.
// How can you do interpolation? https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital skill for programmers! 
const message = "Hello";
const recepient = "World";

console.log(message + " " + recepient);
console.log(`${message} ${recepient}`);

const age = 3
console.log(`I'm ${age} years old!`)
// One plus one is...? Research as many ways as you can for adding 1 to the number variable.
// Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
let number = 1;
number = number + 1;
console.log(number);
// Data types can cause unexpected issues in Javascript. Use the typeof operator to investigate and log the type of the following variables. Your console messages should be formatted like so: "clearancePrice is a number"
// Documentation on typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const programmingIsCool = true;
const clearancePrice = 1.99;
const lifeTheUniverseAndEverything = 42;
const theCruelestMonth = "April";

console.log("programmingIsCool is a " + typeof programmingIsCool);
console.log("clearancePrice is a " + typeof clearancePrice);
console.log("lifeTheUniverseAndEverything is a", typeof lifeTheUniverseAndEverything);
console.log("theCruelestMonth is a", typeof theCruelestMonth);

