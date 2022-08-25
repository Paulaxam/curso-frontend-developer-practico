let emergentMobileMenu = document.querySelector('.mobile-menu');
let menuBurgerIcon = document.querySelector('.burger-menu');
let emergentDesktopMenu = document.querySelector('.desktop-menu');
let userEmail = document.querySelector('.navbar-email');

menuBurgerIcon.addEventListener('click', toggleEmergentMobileMenu);

function toggleEmergentMobileMenu() {
    emergentMobileMenu.classList.toggle('inactive');
}

userEmail.addEventListener('click', toogleEmergentDesktopMenu);

function toogleEmergentDesktopMenu() {
    emergentDesktopMenu.classList.toggle('inactive');
}