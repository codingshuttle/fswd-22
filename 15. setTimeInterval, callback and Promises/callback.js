function orderPizza (myFunction) {
    getCheese((cheese) => {
        makeDough(cheese, (dough) => {
            bakePizza(dough, (pizza) => {
                myFunction(pizza);
            })
        })
    })
    const pizza = '🍕';
    myFunction(piz)
}

function getCheese(next) { // next is the callback funtion
    setTimeout(() => {
        const cheese = '🧀';
        console.log(`Sending the ${cheese}`);
        next(cheese);
    }, 2000);
}

function makeDough(cheese, next) {
    setTimeout(() => {
        const dough = cheese + ' 🫓';
        console.log(`Sending the ${dough}`);
        next(dough);
    }, 2000);
}

function bakePizza(dough, next) {
    setTimeout(() => {
        const pizza = dough + ' 🍕';
        console.log(`Sending the ${pizza}`);
        next(pizza);
    }, 2000);
}


function notifyMeOrSuccess(pizza) {
    console.log('here is my notification for', pizza);
}

// orderPizza((pizza) => {
//     console.log('here is my', pizza);
// });


orderPizza(notifyMeOrSuccess);

console.log('visited nani');

console.log('rest');

