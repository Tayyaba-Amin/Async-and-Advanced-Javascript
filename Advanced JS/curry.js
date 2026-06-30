// Currying means converting a function with multiple parameters into nested functions that take one parameter at a time.

// Without currying
function add(a, b, c) {
  return a + b + c;
}
console.log(add(2, 3, 4)); // 9

//with currying
function add(a){
    return function second(b){
        return function third(c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(5));
const val2=add(2);
const val3=val2(3);
const sum=val3(4);
console.log(sum);
