// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)
function squared(num) {
    return num * num;
}
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));
console.log(squared(25));

function squaredByMySelf(num) {
    return num * num;
}
console.log("this is where i started learning by myself");
console.log(squaredByMySelf(5));
console.log(squaredByMySelf(6));


console.log("trying bonus round..wish me luck!");

// function squareANumber(number) {
//     return number * number;
// }

// console.log(squareANumber(5));
// console.log(squareANumber(69));
// console.log(squareANumber(3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)
if (number = Number) {
    function squareANumber(number) {
        return number * number;
    }
}

console.log(squareANumber(4));



// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

// function stringLength(word) {
//     return word.length;
// }
// console.log("string length activity starts here");
// console.log(stringLength("how many characters are in this sentence?"))
// console.log(stringLength("This is a longer string."))

console.log("trying this on my own now");

function stringLength(wordToBeCounted) {
    return wordToBeCounted.length;
}

console.log(stringLength("Christian Louis Pecoraro"));

// 3. Add two numbers together

/*Create a function called addNumbers
Takes two arguments and returns the sum of those arguments*/
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(2, 4));
console.log(addNumbers(1, 6));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Victoria") would return "Hello, Victoria";

function sayHello(name) {
    return `Hello, ${name}!`
}

console.log(sayHello("Victoria"));