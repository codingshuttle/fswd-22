const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
// const container = document.getElementById("container");


child.addEventListener('click', () => {
    console.log('child clicked');
    child.classList.toggle('round');
})

parent.addEventListener('click', () => {
    console.log('parent clicked');
})

grandparent.addEventListener('click', () => {
    console.log('grandparent clicked');
})



// function logMessage() {
//     console.log('Hi This is a log');
// }

// const myVariable = () => {
//     console.log('Hi This is a log');
// }

// myVariable();

// const coordinates = document.createElement('p');
// document.body.append(coordinates);

// const logMessage = (event) => {
//     // console.log(event);
//     coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
//     box.style.left = `${event.offsetX}px`;
//     box.style.top = `${event.offsetY}px`;
// }

// const onPageScroll = (event) => {
//     console.log(event);
// }

// document.addEventListener('scroll', onPageScroll)

// container.addEventListener('mousemove', logMessage)