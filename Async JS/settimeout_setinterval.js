
//setTimeout
console.log(`start`);
setTimeout(()=>{
    console.log(`Tayyaba Amin`)
},2000)
console.log(`End`)
//delay is not guarantted if the call stack is busy it waits longer in the above example 2000 ml means wait at least 2 seconds

const timer = setTimeout(() => {
    console.log("Hello");
}, 3000);
clearTimeout(timer); //clearTimeout

//setInterval

setInterval(() => {
   console.log("Tick");
}, 2000);

//clearInterval

let count=0;
const interval=setInterval(() => {
    console.log(`${count}`);
    count++;
    if(count==4){
clearInterval(interval);
    }
}, 1000);
//recursive settimeout
function repeat() {
    console.log("Running");
    setTimeout(repeat, 1000);

}
repeat();