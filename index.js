const toggleMenu = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

const menu = document.querySelector('.burger');

menu.addEventListener('click', toggleMenu());
