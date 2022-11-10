// This a comment
let ten = 10;
// Imagine bindings like tentacles 
// OLD way of declaring a binding
var ada_name = "Ada";
const greeting = "Hello";
// ten = 11;
// greeting = "Goodbye ";
console.log(greeting + ada_name);
let house;

// some code blah blah blah

house = "555 Generic Street"
console.log(house)

//* Binding Cases
// camelCase - Pretty normal
// snake_case multiple_words_in_my_binding
// PascalCase - has special meaning
// kebab-case
let seven = 8;

console.log(`My greeting is: ${greeting} ${ada_name}`);

console.log(`My math is ${ten} plus ${ seven }: ${ ten + seven }`);

// Environment
// Collection of bindings and their values, which includes the standard language library

//* Functions
// executing, invoking, applying, calling
console.log(5)

let some_number = 32;
console.log(some_number);
// Shows all attributes of a document (or an id)
console.dir(document)

// Float data types
let some_float = 3.1415926535897932384626433832795028;
console.log(some_float);

//* Difference between returning and side effects of functions
Math.max(2, 4);
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100); // function_name(input)

//! HOISTING 
// a_num = 10;
// console.log(a_num);
// const a_num;
// console.log(a_num)

//! Control Flow!!!
// Normal code is executed like a story from top to bottom
let age = 5;
if ( age > 100 ) {
    console.log('Old')
} else if ( age == 100 ) {
    console.log('yer a spring chikin')
} else if (age == 52) {
    console.log(`You are ${age}`)
}

let my_cool_value = "five";
let another_cool_value = 5;
if (my_cool_value * another_cool_value) {
    console.log('you are so cool')
} else {
    console.log('There was a bug')
}

//! IN CLASS EXERCISE
//* Assign a binding to a number
//* Use JS to check if the number is greater than 100

// More math operations
// FLOOR
let find_floor = Math.floor(13 / 6)
console.log(find_floor);
// Math.ceil() will round up

let mod = 19 % 6;
console.log(mod);

//! In Class Exercise 2
//* Assign a binding to a number
//* Use JS to check if that number is EVEN or ODD

//! LOOPS
// Could log a number 10 times... BORING
// Looping goes back to a previous place in our code and starts over
//* Imagine a street with 5 houses. We knock on the door of each one, 
//* do something, and when we're done we go back and do it again because 
//* we are the world's most annoying neighbors



// basic while loop
let my_num = 0;
// while (my_num <= 10) {
//     if (my_num == 8) {
//         my_num += 1
//         continue
//     }
//     console.log(my_num);
//     my_num = my_num + 1
// }


let num = 0;
while (num < 10) {
    if (num < 3) {
        console.log('small');
    } else if (num >= 3 && num < 7) {
        console.log('Medum');
    } else if ( num == 8) {
        console.log('Broke!')
        break // stops the loop no matter what
        // continue // skip to the next iteration
    } else {
        console.log('Large');
    }
    num += 1;
}

//* For loops
// Start; stop; step
for (let i = 1; i <= 5; i++) {
    console.log("This is a loop: " + i)
}

let counter = 1;
while (counter <= 5){
    console.log("This is my counter: " + counter);
    counter++
}




let day = new Date().getDay();

console.log(day);

switch(day) {
    case 0:
        console.log('It is sunday, no coding today');
        break;
    case 1:
        console.log('Write code... it is monday!');
        break;
    case 2:
        console.log('Test code on Tuesday');
        break;
    case 3: 
        console.log('Meetings on Wednesday');
    case 4:
        console.log('Teach code on Thursday');
    case 5:
        console.log('Push to production on Friday');
        break;
    case 6:
        console.log('Hope the code we published does not cause emergencies over the weekend');
        break;
    default:
        console.log('Invalid input')
}

//! Exercises
// Mario Problem: Use loops to print out the stairs 
// #
// # # 
// # # # 
// # # # # 
// # # # # # 

// FizzBuzz
// console.log the numbers 1 through 20. If the number is divisible by 3, log 
// 'Fizz'. If the number is divisible by 5, log 'Buzz.' If the number is 
// divisible by 3 AND 5, log 'FizzBuzz'.

//! Functions
// User-written functions are made for processes that don't exist already
// Keeps languages lightweight
// Function is… A data type! Binding

const square = function (x) {
    return x * x;
};

console.log(square(2));
console.log(square(Math.floor(17.8)));

// VOCAB 
// Arguments and Parameters
// A parameter is a variable in a function definition.
// No one will really care about the difference
// An argument is a value pased during function invocation (when I use the function)
let giraffe = 'I am a giraffe'
// Declaring a function, part two
const addElephants = function(x) {
    let elephant = x;
    let elephant2 = 5;
    console.log(giraffe)

    return elephant + elephant2;
};

console.log(addElephants(5))

// console.log(elephant)

//! Overwriting function bindings is a BAD IDEA
// function addElephants(y) {
//     console.log(y)
// }
// addElephants('yee haw')

//! BAD CODE TIME
// let a = 5;

// function myFunc(a){
//     let a = 7;
//     return a + 2;
// };

// console.log(myFunc(a));

//* Multiple params
const addNums2 = function(num, num2){
    return num + num2;
}

console.log(addNums2(5,6))

console.log("The future says: ", future());

function future(){
    return "You'll never have flying cars";
};

// JS pulls future() and other functions to the top of the code before it runs

// ES6 Arrow Function
// This is Brandon's personal favorite way to write functions 

const cubed = (num) => {
    return num ** 3
};

console.log(cubed("porcupine"))

// const addNums3 = (x, y, z) => {
//     return x + y + z;
// };

// console.log(addNums3(4, 10, 2));

const addNums3 = (x, y, z = 0) => {
    return x + y + z;
};

console.log(addNums3(4, 10, 6)); // get rid of the third arg to see the magic of default parameters

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello;
})('Brandon')) // Not very common or easy to understand

function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        if (age == 30) {
            return 'Age is thirty'
        }
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(45))

function determineAge2(age) { // Ternary operators
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult non-retired' : 'Elderly person'
}

console.log(determineAge2(11))

function countByOne(){
    for (let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(countByOne())

function decreaseByOne(){
    for (let i = 20; i > 0; i--){
        console.log(i)
    }
    return "Counting has stopped"
}
console.log(decreaseByOne())

function count_with_while(i, j){
    let text = '';
    while(i < j){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}

console.log(count_with_while(0, 5))

// Do while will run at least one time!!!
// Do While loop
function count_with_do_while(){
    let i = 100;
    let text = '';

    do {
        text += `this number is... ${i} \n`
        i++
    }

    while(i < 10)
    return text
}

// DO WHILE will run AT LEAST once!!!

console.log(count_with_do_while())