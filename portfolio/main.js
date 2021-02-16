'use strict'

const navbar = document.querySelector('#navbar'); 
const navbarHeight = navbar.getBoundingClientRect().height; 
document.addEventListener('scroll', () => { 
    console.log(`navbarHeight: ${navbarHeight}`); 
    if (window.scrollY > navbarHeight) { 
        navbar.classList.add('navbar--dark'); 
    } else {
        navbar.classList.remove('navbar--dark'); 
    }
});

const navbarMenu = document.querySelector('.navbar__menu'); 
navbarMenu.addEventListener('click', (event) => { 
    const target = event.target; 
    const link = target.dataset.link;
    if (link === null) {
        return; 
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link); 
    selectNavItem(target);
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height; 
document.addEventListener('scroll', () => { 
    home.style.opacity = 1 - window.scrollY / homeHeight; 
});

const work = document.querySelector('.work__container');
work.addEventListener('click', () => {
    console.log('.work');
    const target = target.link;
    const work = target.event;
}