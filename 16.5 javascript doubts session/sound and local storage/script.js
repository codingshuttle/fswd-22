const button = document.querySelector('button');

button.addEventListener('click', () => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-1.mp3');
    audio.play()
})

window.addEventListener('load', () => {
    const essayInput = document.getElementById('essay');
    essayInput.value = localStorage.getItem('key_essay')
})

const essayInput = document.getElementById('essay');

essayInput.addEventListener('change', () => {
    localStorage.setItem('key_essay', essayInput.value)
})