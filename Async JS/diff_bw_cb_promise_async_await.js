function login(callback) {
    setTimeout(() => {
        console.log("Logged in");
        callback();
    }, 2000);

}
function getUser(callback) {
    setTimeout(() => {
        console.log("User received");
        callback();
    }, 2000);

}
function getFriends(callback) {
    setTimeout(() => {
        console.log("Friends received");
        callback();
    }, 2000);

}
function getMessages(callback) {
    setTimeout(() => {
        console.log("Messages received");
        callback();
    }, 2000);
}
// login(() => {
//     getUser(() => {
//         getFriends(() => {
//             getMessages(() => {
//                 console.log("Everything Loaded");
//             });
//         });
//     });
// });


function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in");
            resolve();
        }, 2000);
    });
}
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User received");
            resolve();
        }, 2000);
    });
}
function getFriends() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Friends received");
            resolve();
        }, 2000);
    });
}
function getMessages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Messages received");
            resolve();
        }, 2000);
    });
}
// login()
// .then(() => {
//         return getUser();
// })
// .then(() => {
//         return getFriends();
// })
// .then(() => {
//         return getMessages();
// })
// .then(() => {
//         console.log("Everything Loaded");
// })
// .catch((error) => {
//         console.log(error);
// });

// login()
// .then(getUser)
// .then(getFriends)
// .then(getMessages)
// .then(() => {
//     console.log("Everything Loaded");

// })
// .catch(console.error);

async function main() {
    try {
        await login();
        await getUser();
        await getFriends();
        await getMessages();
        console.log("Everything Loaded");
    } catch (error) {
        console.log(error);
    }
}
main();

