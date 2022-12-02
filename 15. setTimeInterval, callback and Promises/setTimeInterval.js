const a = 23;

const b = 12;

// console.log('ordering burger');
// for(let i = 0; i<5000000000; i++) {
//     let n = i*7876878;
// }
// console.log('burger eaten');

const d = 12;

function greet(obj) {
    console.log('Hello', obj.name);
}

// console.log('before greet');
// setTimeout(greet, 2000, 'Anuj');

// const greetTimeoutId = setTimeout(() => {
//     greet({
//         name: 'Anuj'
//     })
// }, 2000)

// const goodNightTimeoutId = setTimeout(() => {
//     console.log('Good night');
// }, 4000)


// clearTimeout(greetTimeoutId)

// console.log('this is written after greet');

// greet();

////////// setInterval

const intervalId = setInterval(increaseCount, 1000)

let count = 0;
function increaseCount() {
    count++;
    const date = new Date().toTimeString();

    console.log(date);

    if(count == 5) {
        clearInterval(intervalId)
    }
}

console.log('another work');

