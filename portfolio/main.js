'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height; 
document.addEventListener('scroll', () => { 
    home.style.opacity = 1 - window.scrollY / homeHeight; 
});