// // callback: a function passed as an argument to another function, to beexecuted later
// function greet(name,callback){
//     console.log(`Hello ${name}`);
//     callback();   
// }
// function saybye(){
//     console.log("Goodbye!")
// }
// greet("Tayyaba Amin",saybye)

// //Anonmyous Calllback: Instead of defining separate function we pads it directly
// //using arrow function
// greet("Hussain",()=>{
//     console.log("Goodbye!")
// })
// //using simple function
// greet("Babar Azam",function (){
//     console.log("Goodbye!")
// })

// //callbacks lets the caller decide the next action instead of hardcoding next action
// function processData(data, callback) {
//     console.log("Processing:", data);

//     callback();
// }
// processData("File 1", () => {
//     console.log("Saving...");
// });

// processData("File 2", () => {
//     console.log("Uploading...");
// });

//callback hell

function login(callback) {
    console.log("Logging in...");

    setTimeout(() => {
        console.log("Login successful");
        callback();
    }, 1000);
}

function getUser(callback) {
    console.log("Getting user...");

    setTimeout(() => {
        console.log("User received");
        callback();
    }, 1000);
}
function getMessages(callback) {
    console.log("Getting messages...");

    setTimeout(() => {
        console.log("Messages received");
        callback();
    }, 1000);
}

function getNotifications(callback) {
    console.log("Getting notifications...");

    setTimeout(() => {
        console.log("Notifications received");
        callback();
    }, 1000);
}

// Callback Hell
login(() => {
    getUser(() => {
            getMessages(() => {
                getNotifications(() => {
                    console.log("Everything loaded");

                });

            });

        });

    });

