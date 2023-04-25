// show menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById("nav-close");


// menu show 
if (navToggle) {

    // navtoggle clicked show-menu class added 
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


// menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}


// remove menu mobile

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    // when we click nav links , we remove the show-menu option.
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// change background header

function scrollHeader() {
    const header = document.getElementById('header')

    // when the scroll is greater than 50vh , add the scroll-header class to header
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);


// show scroll up

function scrollup() {
    const scrollUp = document.getElementById('scrollup');
    // when the scroll is higher than 200vh add the show-scroll class to a tag
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);



