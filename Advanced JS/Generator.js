// Generator: A generator is a special function that creates an iterator automatically.
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
