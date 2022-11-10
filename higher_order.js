//! JavaScript Array Methods:
//* .map(), .filter(), .reduce()

//* Higher order functions

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total)
// console.log(sum(range(1,10)))

const addTwo = (x) => {
    return x + 2
}

console.log(function(x) { return x + 2}(5)) // Anonymous function () => {}
let newAddTwo = function(x) { return x + 2 } // First class function - assigned to a variable
console.log(newAddTwo(6))

const square = (func, num) => {
    return func(num)
}

const squareFunc = (num) => {
    return num * num
}

console.log(square(squareFunc, 5)) // This is a closure

const returnFunc = () => { // another one
    const multiplyByTwo = (num) => {
        return num * 2;
    }

    return multiplyByTwo;
}

let func_return = returnFunc();
console.log(func_return)
console.log(func_return())
console.log(returnFunc())
// console.log(multiplyByTwo(4))
console.log(func_return(4))

//! MAP

const persons = [
    {firstname : "brandon", lastname: "apol"},
    {firstname : "joel", lastname: "carter"},
    {firstname : "nicole", lastname: "shannon"}
];

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}

console.log(persons.map(getFullName));

let group_of_names = ['jerry','Ben', 'bAsh', 'Brock', 'Misty']

let b_names = group_of_names.map( name => {
    if (name[0] == 'B') {
        return name
    } else {
        return false
    }
}) // good way to map

console.log(b_names)

// long form of map, not very good
let b_names_test = function() {
    let test_array = [];
    for (let i = 0; i < group_of_names.length; i++) {
        if (group_of_names[i][0] == 'B') {
            test_array.push(group_of_names[i])
        }
    }
    return test_array;
}

//! filter

const filter_help = (element) => {
    if (element.length > 4) {
        return true;
    } else {
        return false;
    }
}

let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

const nums = [2, 4, 6, 8, 10];

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})

console.log(nums_reduced)

//* Recursion review

function getFactorialWhileLoop(n){
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    }
    return result;
}

console.log(getFactorialWhileLoop(5));

function getFactorialRecursively(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n * getFactorialRecursively(n - 1);
    }
}

console.log(getFactorialRecursively(5));


const reg_factorial = (num) => {
    if (num <= 1){
        return 1
    } else {
        return num * factorial(num - 1)
    }
}


const recursiveFactorial = (n, accumulator = 1) => {
    if (n <= 0) return accumulator;

    return recursiveFactorial(n - 1, n*accumulator);
}

console.log(factorial(5))