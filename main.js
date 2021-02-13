'use strict'

const navbar = document.querySelector('#navbar');
navbar.addEventListener = ('scroll', (e) => {
    const target = e.target.link();
})

$(document).on('scroll', function() {
    var navbar = $(document).scrollTOP();
    var navbarHeight = navbar + $(window).height();
    var tags = $('.tag');
})

const work = document.querySelector('#work');
work.addEventListener = ('scroll', (e) => {
    const a = e.target.link();
    console.log('#work');
})