// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => { console.log('Solved ', response)})
// .then(data => console.log(data))
// .catch(err => console.log('rejected ', err));

//! Promise in fetch ONLY rejected when there is a network error

const getTodos = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //Stops JS from assigning data UNTIL promise is resolved
    // Works because the whole code block is async!
    if (response.status !== 200) {
        throw new Error ('Cannot fetch the data'); 
        // We have to add the Error object or it will still resolve
    }
    const data = await response.json() // Stall until response resolves

    return data;
}

// const test = getTodos();
// console.log(test); // Because we didn't use .then , it didn't wait! 
console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved: ', data)) 
    .catch(err => console.log('rejected: ', err.message))
console.log(3);
console.log(4);