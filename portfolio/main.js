'use strict'

// Make navbar transparent when it is on the top(navbar를 투명하게 만들건데 올라가면 투명 내려가면 색깔있는 걸로!)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Make home slowly fade to transparant as the window scrolls down(home을 scroll하면 투명하게!)
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelector('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    const active = document.querySelector('.categoty__btn selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    target.classList.add('selected');

    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
});

// 우리기 정의한 유틸리티 함수!
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};
