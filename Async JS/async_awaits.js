//async: Even though Promises solved callback hell, long chains can still become difficult to read. This is much better than callbacks, but JavaScript introduced an even cleaner syntax.An async function is a function that always returns a Promise.
function fetchUser() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Ali");
        }, 2000);
    });
}
async function main() {
    try{
    const user = await fetchUser();  //await waits for a Promise to settle and gives you its resolved value.
    console.log(user);
    }
    catch (error) {
        console.error(error);
    }
}

main();