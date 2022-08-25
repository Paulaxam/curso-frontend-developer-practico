let emergentMobileMenu = document.querySelector('.mobile-menu');
let menuBurgerIcon = document.querySelector('.burger-menu');

menuBurgerIcon.addEventListener('click', toggleEmergentMobileMenu);

function toggleEmergentMobileMenu() {
    emergentMobileMenu.classList.toggle('inactive');
}