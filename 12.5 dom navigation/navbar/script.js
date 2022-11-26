const toggler = document.getElementById('toggler');
const navLinks = document.getElementById('nav-links');

toggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})