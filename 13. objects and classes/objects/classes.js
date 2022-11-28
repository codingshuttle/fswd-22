class Vehicle {
    constructor(model, wheels) {
        // const this = {};
        this.model = model;
        this.wheels = wheels;
        // return this;
    }
    start() {
        console.log('vehicle starting');
    }
}

class Scooter extends Vehicle {

}

const obj1 = new Vehicle();
const obj2 = new Vehicle();

console.log(obj1);
console.log(obj2);

obj1.start();


// json

const jsonString = '{"name": "Anuj"}'

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

const backToString = JSON.stringify(obj1);

console.log(backToString);








// const student = {
//     name: 'Anuj',
//     marks: 56,
//     talk: function () {
//         console.log(`my name is ${this.name} and marks are ${this.marks}`);
//     }
// }

// student.talk();

// const age = 26;

// const message = "my age is "+age;

// const message = `my age is ${age}`;

// console.log(message);

