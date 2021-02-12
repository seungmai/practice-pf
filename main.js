'use strict'

const navbar = document.querySelector('#navbar');
navbar.addEventListener = ('scroll', (e) => {
    const target = e.target.link();
    console.log('#navbar');
})

$(document).on('scroll', function() {
    var navbar = $(document).scrollTOP();
    var navbarHeight = navbar + $(window).height();
    var tags = $('.tag');
})