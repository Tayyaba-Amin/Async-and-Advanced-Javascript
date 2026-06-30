//Promise: solve the problems of Callback Hell and make asynchronous code easier to write, read, and maintain
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Something went wrong");
    }
});
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

Promise.resolve(10)
.then((num) => {
    return num * 2;
})
.then((result) => {
    console.log(result);
});


