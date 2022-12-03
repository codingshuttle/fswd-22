

const counterText = document.getElementById('counter');
const posBtn = document.getElementById('pos-btn');
const negBtn = document.getElementById('neg-btn');

let count = 0;
updateCount();

posBtn.addEventListener('click', () => {
    count++;
    updateCount();
})

negBtn.addEventListener('click', () => {
    if(count > 0) {
        count--;
        updateCount();
    }
    
})

function updateCount() {
    counterText.innerHTML = count;
}













// const body = document.body;

// const children = body.children[1].children[0].innerHTML = "changed";

// const list = document.getElementById('list');

// console.log(list.lastElementChild.innerHTML = "changed eight");

// const numberInput = document.getElementById('number-input');
// numberInput.value = "anuj"

// const submitBtn = document.getElementById("submit-btn");
// const form = document.getElementById('dummy-form')

// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log(numberInput.value);
// })

// console.log(children);