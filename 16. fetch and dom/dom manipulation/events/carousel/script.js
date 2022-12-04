const images = [
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 
    'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
    'https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1678&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i = 0; i<n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);

    const dotDiv = document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click', (event) => {
        const index = [...carouselNav.children].indexOf(event.target);
        showImg(index);
    })
}



let curPosition = 0;
showImg(0);

leftButton.addEventListener('click', () => {
    if(curPosition > 0) {
        showImg(curPosition - 1)
    } else {
        showImg(n - 1)
    }
})

rightButton.addEventListener('click', () => {
    if(curPosition < n-1) {
        showImg(curPosition + 1)
    } else {
        showImg(0)
    }
})

function showImg(position) {

    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active');
    
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}



