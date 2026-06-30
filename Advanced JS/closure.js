// A function that remembers and can access variables from the place where it was created, even after that outer function has finished running.
function outer() {
  let count = 0;

   function inner() {
    count++;
    console.log(count);
  };
  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4