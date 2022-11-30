const a = [1, 2, 3, 4, 5, 6];

function filterNumbers(conditionFunction) {
    const b = [];
    for(let i = 0; i<a.length; i++) {
        if(conditionFunction(a[i], i, a)) { // logic for checking even
            b.push(a[i]);
        }
    }
    return b;
}

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num, index, arr) {
    return num % 2 != 0;
}


// const evenNumbers = filterNumbers((num) => {
//     return num % 3 == 0;
// });

const evenNumbers = filterNumbers(isOdd);

console.log(evenNumbers);