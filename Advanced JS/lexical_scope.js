let a=10;
function outer(){
    let b=20;
    function inner(){
        let c=30;
        console.log(`Value of A is ${a}     Value of B is ${b}      value of C is ${c}`);
    }
    inner();
}
outer();