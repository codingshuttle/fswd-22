// destructuring

const obj = {
    name: "Anuj",
    age: 26
}

const {name, age} = obj;

// console.log(name, age);


// default parameter

// function greet(name = "Lerner") {
//     console.log("hello " + name);
// }

// greet()
// greet("Anuj")


// spread operator

function greet(...a) {
    console.log('hello', a[0]);
}

greet("Anuj", "Shivam", 12);

const a = [1, 2, 3];

const b = [4, ...a, 5, 6]

console.log(b);

const animal = {
    name: 'Simba',
    age: 23
}

const fullInformation = {
    ...animal,
    address: 'pahaad',
    legs: 4
}

console.log(fullInformation);