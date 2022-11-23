// function greetings(name) {
//     console.log('Hi', name);
//     console.log("Namaste", name);
//     console.log('Wassssup', name);
// }

// const greetValue = greetings('Anuj');

// console.log(greetValue);

// greetings();

// let result = addition(3, 6)
// console.log('result is', result);

// function addition(a, b) {
//     console.log('starting the operation');
//     return a+b;
//     console.log('unreachable code');
// }


// let myAdditionFunction = function (a, b) {
//     console.log('starting the operation');
//     return a+b;
// }


// arrow function

let myAdditionFunction = (a, b) => {
    console.log('starting the operation');
    return a+b;
}


myAdditionFunction = 12;

console.log(typeof myAdditionFunction);

console.log(myAdditionFunction(4, 8));
