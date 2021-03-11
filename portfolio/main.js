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
// 타이핑 효과(animation)!
const content = "I'm a junior developer."
const text = document.querySelector(".home__description");
let index = 0;
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  };
};
setInterval(typing, 100);

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open'); 
    navbarMenu.addEventListener('click', () => {
        navbarMenu.classList.remove('open');
    });
});

// Make home slowly fade to transparant as the window scrolls down(home을 scroll하면 투명하게!)
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

const homeBtn = document.querySelector('.home__down');
homeBtn.addEventListener('click', () => {
    scrollIntoView('#work');
});

// Show "arrow up" button when scrolling down(스크롤이 내렬갈 때 버튼이 생기게 하는 것!)
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => { 
    if (window.scrollY > homeHeight / 2) { 
        arrowUp.classList.add('visible'); 
    } else {
        arrowUp.classList.remove('visible');  
    }
});

// Handle click on the "arrow up" button(스크롤을 누르면 home화면으로 이동!)
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

// Remove selection from the previous item and select the new one
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected'); 
const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode; 
target.classList.add('selected'); 

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

// 우리기 정의한 유틸리티 함수!
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};