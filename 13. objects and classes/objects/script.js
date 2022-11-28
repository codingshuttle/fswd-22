const myObj = {
    age: 26,
    isHuman: true,
    hobbies: ['singing', 'coding'],
    walk: () => {
        console.log('person is walking');
    }
}

myObj.skill = "Coding";
myObj.name = "Anuj"

myObj.age = 12;

// console.log(myObj["age"]);
// console.log(myObj.isHuman);

for(const key in myObj) {
    // console.log(myObj[key]);
}

// this is a function that returns an object, hence called factory function
function getVehicle(type) {
    return {
        type,
        wheels: 4
    }   
}

const myVehicle1 = getVehicle('Car');
const myVehicle2 = getVehicle();

myVehicle2.wheels = 3;

// console.log(myVehicle1);
// console.log(myVehicle2);


// console.log(typeof getVehicle);



// object destructring ES6


// const myAge = myObj.age;
// const myIsHuman = myObj.isHuman;

// let {age, isHuman: myIsHuman, walk} = myObj;

// walk()

// age = 60;

// console.log(age, myIsHuman);
// console.log(myObj.age);


// myObj.walk = function() {
//     console.log('person is walking');
// }

// myObj.walk();

// console.log();

// function shouting() {
//     console.log('I am shouting');
// }

// talking(shouting)

// function talking(shouting) {
//     console.log('I am talking');
//     shouting()
// }
