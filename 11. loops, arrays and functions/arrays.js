// let a = [10, 4, 23, 'hi']

// ["banana", "apple", "kiwi"]

// console.log(typeof a);

// a = 12;

// a.sort()

// console.log(typeof a);


// const words = ["Ram", "Harish", 'Anuj', "Shyam"]

// words.splice(2, 0, "Shivam")

// console.log(words);




// for(let i = 0; i<words.length; i++) {
//     console.log('hello', words[i]);
// }

// const isPresent = words.includes("anuj");

// const index = words.indexOf('anuj');

// console.log(index)

// console.log(words)

// words.sort();

// console.log(words)

// for(let i in words) {
//     console.log('hello', words[i]);
// }

// const words = new Array(4, 1, 6, 'hi', 3)

// words[7] = "Hariom"

// console.log(words[7]);

// words.push('Kumar')

// words[0] = "Anju"

// words.pop();

// console.log(words);
// console.log(words.length)


let a = [10, 4, 23]

// const myFunction = (element, index) => {
//     console.log('printing', element, 'index is', index)
// }

// a.forEach(myFunction)

a.sort((p, qqq) => {
    // if(p > q) return 100;
    // if(p < q) return -100;
    // return 0;
    return p-qqq;
})

console.log(a);

