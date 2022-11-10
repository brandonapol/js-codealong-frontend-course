const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest(); // This doesn't work because XMLHttpRequest is for grandpas 

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource); 
    request.send();

}

getTodos('todos.json', (err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})