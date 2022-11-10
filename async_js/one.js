console.log(1);
console.log(2);
setTimeout(() => {
    console.log("Callback function fired!");
}, 2000); // Meant to emulate a network request that takes ~2 seconds
console.log(3);
console.log(4);