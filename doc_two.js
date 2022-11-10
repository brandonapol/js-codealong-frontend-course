// Arrays, recursion, prototypes, objects, closures, higher order functions (functional programming)

//! Closures

/*

    "A closure is the combination of a function bundled together (enclosed) 
    with references to its surrounding state (the lexical environment). 
    In other words, a closure gives you access to an outer function's scope 
    from an inner function. In JavaScript, closures are created every time a 
    function is created, at function creation time."

    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

    Closures
        You can bind functions inside of other functions, and they'll only be available within the first function
        This gets MUCH more useful when we're doing web development
        Is a way of 'saving' values in functions
            Has to do with stack heap etc


*/

let my_num = 5;
const addNums = () => {
    let insideNum = 6;
    return my_num + insideNum;
}

console.dir(addNums)

let newAdd = function(outer_var){
    let innerAdd = function(inner_var){
        return outer_var + inner_var;
    };

    return innerAdd;
};

let addFive = new newAdd(5);

console.dir(addFive)
console.log(addFive(3))
console.dir(newAdd)

let count_up = function() {
    let counter = 0; // This is another private variable
    console.log('Hit')
    return function() { 
        console.log(counter)
        return counter++ 
    }
}

let someplace = count_up()
count_up()
count_up()
console.dir(count_up())
console.log(someplace())

let addNames = ( function() {
    let names = [];
    console.log('Adding names')
    return function (name) {
        console.log(names);
        return names.push(name)
    }
})() // We'll come back to this later

console.log(addNames('Brandon'));
console.log(addNames('Lydia'));
console.log(addNames('Joel'));

//! Recursion

//? 5! == 5 * 4 * 3 * 2 * 1

function getFactorialWhileLoop(n){
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    };

    return result;
}

console.log(getFactorialWhileLoop(5));

function getFactorialRecursively(n){
    if (n <= 1){
        return 1;
    } else {
        return n * getFactorialRecursively(n - 1);
    }
}

console.log(getFactorialRecursively(5));

function tailRecursiveFactorial(n, accumulator = 1) {
    if ( n <= 0 ) {
        return accumulator;
    } 
    return tailRecursiveFactorial( ( n - 1 ), ( n * accumulator ))
}

console.log(tailRecursiveFactorial(5))

//! Arrays

// Create an array
let group_of_names = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty']
group_of_names.push('brandon')
console.log(group_of_names)

//* Array methods: arr.toString(), arr.join(' '), arr.pop(), arr.push(val), arr.shift() [removes first element & returns it],
//* arr.unshift(),  delete arr[0] [replaces val with undefined], arr1.concat(arr2, arr3)
//* No min or max functions; sort and then pop or shift

// Deconstruction
let terry, jen, zisty;
[terry, zisty, jen] = group_of_names;
console.log(terry, jen, zisty)

// Method one for looping through an array
function show_all_names(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return 1;
};

console.log(show_all_names(group_of_names))

console.log(group_of_names.forEach(element => console.log(element)))

let some_array = [1,2,3,4];

console.log(some_array["length"]) // weird, don't do this
console.log(some_array.length) // better and normal
// console.log(some_array.length())
console.log([1, 2, 'apple', 4].includes('apple'))
console.log('apple'.includes('a')) // strings are technically arrays under the hood
let new_arr = [1, 2, 3, [4, 'guacamole', 'dogs']]
console.log(new_arr[3][1])

//! Objects

let some_object = {
    "test" : "Please test me!",
    "lightsOn" : "Electricity is working",
    "lightsOff" : "Electricity is not working",
    5 : "I had toast for breakfast",
    }
console.log(some_object["lightsOff"])

// Simple JS object
let person = {
    name: 'John',
    age: 28,
    fav_color : 'Red'
}

// Accessing the data in our object
console.log(person['name']) // Bracket notation
console.log(person.age) // Dot notation
console.log(Object.keys(person))
console.log(Object.assign(person, { hometown : "chicago" }))

// Complex JS object
let person2 = {
    0: 'hi',
    name : "Max",
    age : 31,
    prog_languages : ['JavaScript', 'Python', 'C++', 'Java', 'Go'],
    fav_color : 'Blue',
    teams : [
        {
            baseball : "Chicago White Sox",
            football: "Chicago Bears",
            hockey : "Chicago Blackhawks",
            basketball : ["Chicago Bulls", "Chicago Sky"],
            soccer : ["Chicago Fire", "Naperville Yellowjacks"]
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwaukee Bucks',
            soccer: ['Manchester City', 'Liverpool'],
        }
    ]
}

console.log(person2.prog_languages[2]);
console.log(person2.teams[1].soccer[0]);

// Javascript Object Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Sad way to loop through objects in JS
for (let i = 0; i < person2.length; i++) {
    console.log(person2[i]);
}

// Happy path!
for (let i = 0; i < Object.keys(person2).length; i++) {
    console.log(Object.keys(person2)[i])
}

// List the values from the person2 object that are arrays
for (let i = 0; i < Object.keys(person2).length; i++) {
    if (Array.isArray(Object.values(person2)[i])) {
        console.log(Object.values(person2)[i]);
    }
}

// Type inference

// Object literals revisited
console.log(Math)

// Create our own Object Prototypes
// Like a blueprint
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // A function inside a prototype is called a method
    this.printInfo = function(wheels = 4, color = 'Blue'){
        console.log(`This is a ${this.year} ${this.make} ${this.model}, and it has ${wheels} wheels and the color is ${color}`);

        return 1
    };

};

let my_car = new Car('Honda', 'CR-V', 2019);

console.log(my_car.printInfo(4, 'Gray'));

// console.log(Car)

// JS Classes
// Encapsulation -- Breaking into pieces
// Abstraction -- We don't have to know the details
// Polymorphism -- Code will work in any scenario that works with the protoype/interface
// Inheritance -- Extend attributes from one object to another

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    };
};

// Create an instance of our new class
let wilma = new Human('Wilma', 25, 'Female');
let gerald = new Human('Gerald', 73, 'Male');
console.log(wilma.printInfo().length)

// JS Inheritance using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender);
        this.walking = walking;
    };

    isBabyWalking() {
        if (this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby aint walkin yet'
        };
    };
};

// Create instantiated values for a baby
let johnnie = new Baby('Johnnie', 1, 'Male', true);
console.log(johnnie.age)
console.log(johnnie.isBabyWalking())
console.log(johnnie.printInfo())


const num_filter = () => {
    try {
        callNonExistentFunc();
    } catch {
        console.log('Not a real func')
    }

}

num_filter();

//! Asynchronous JavaScript 

//* Callbacks

// Basic example
function first(){
    console.log(1);
};

function second(){
    console.log(2);
};

first();
second();

// What if we add delay?
function first_delay(){
    // Simulation of a delay
    setTimeout( () => {console.log(3)}, 5000);
};

function second_delay(){
    console.log(4);
};

first_delay();
second_delay();

// Callback syntax
function doSomething(callback){
    console.log('doing some stuff')
    callback()
}

// Callback Hell
// function1( () => {
//     function2( () => {
//         function3( () => {
//             function4( () => {
//                 //do something
//             })
//         })
//     })
// })

// We solve this problem largely with PROMISES

const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if (num % 2 == 0){
            resolve(true);
        } else {
            reject(false);
        }
    })
}

// Using a JS Promise
isEvenNumber(11)
// Happy success path
.then( (result) => { 
    console.log(`Even Number: ${result}`);
})
// Sad reject path
.catch( (error) => {
    console.log(`Odd Number: ${error}`);
})

// Another example of promises using async / await

function increaseSalary(base, increase){
    const newSalary = base + increase;
    console.log(`New Salary: ${newSalary}`);
};

function slow_addition(n1, n2) {
    return new Promise( (resolve) => {
        setTimeout( () => { resolve(n1 + n2), 2000});
    });
};

function increase_slow_salary(base, increase) {
    const newSalary = slow_addition(base, increase);
    console.log(`New Salary: ${newSalary}`);
    return newSalary;
};

async function asyncIncreaseSalary(base, increase) {
    const new_salary = await slow_addition(base, increase);
    console.log(`New Salary Is: ${new_salary}`);
    return new_salary
}