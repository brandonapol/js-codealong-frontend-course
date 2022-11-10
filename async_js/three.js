const getSomething = () => {
    return new Promise((resolve, reject) => {
        console.log('Hello to the animals');
        resolve('elephant');
        reject('giraffe');
    })
}

// getSomething().then(((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// }))

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
}) // Better way