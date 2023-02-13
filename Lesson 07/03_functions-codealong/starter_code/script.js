// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(toBeSquared) {
    return toBeSquared * toBeSquared;
}

console.log(squared(4));
console.log(squared(5));



// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

/*
function squared(numberToBeSquared) {
    if (typeof numberToBeSquared == number) {
        return numberToBeSquared * numberToBeSquared
    } else {
        return 0;
    }
}

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));
*/

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(toBeMeasured) {
    return toBeMeasured.length;
}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(number1, number2) {
    return number1 + number2;
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// function sayHello
// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

/*
function sayHello(firstName) {
    return "Hello, " + firstName;
}
console.log(sayHello("Paul"));

// console.log(sayHello("Paul"));
*/

function sayHello(firstName) {
    if (typeof firstName == "string") {
        return "Hello, " + firstName;
    } else {
        return "Hello!";
    }
}
console.log(sayHello("Paul"));
console.log(sayHello(22));