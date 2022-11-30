const a = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

// const b = a.filter(isEven);

function square(num) {
    return num*num;
}

function negative(num) {
    return -num;
}

// const b = a.map(negative);

const b = a.map((x) => 'my num is '+x);

const students = [
    {
        name: "Anuj",
        marks: 12
    },  {
        name: "Shivam",
        marks: 76
    },  {
        name: "Sanchita",
        marks: 67
    },  {
        name: "Raj",
        marks: 87
    }
]

const grades = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = `you are ${element.name}`;
    } else {
        element.isPassed = true;
    }
    return element;
})

const found = students.filter((element) => {
    return element.marks > 50;
})

console.log(grades);