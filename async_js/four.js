const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(data);
            } else if (request.readyState === 4){
                reject('error');
            };
        });

        request.open('GET', resource);
        request.send()
    });
};

getTodos('../async_js/todos.json')
.then(data => {console.log('Promise resolved: ', data)})
.catch(err => {console.log('promise rejected: ', err)})