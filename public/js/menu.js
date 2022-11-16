const logo = document.getElementById('logo')
const language = document.getElementById('language')
const burger = document.getElementById('burger')
const burgerLogo = document.getElementById('burgerLogo')
const burgerLetters = document.getElementById('burgerLetters')
const menu = document.getElementById('menu')
const nav = document.getElementById('navbar')
const letter1 = document.getElementById('letter1')
const letter2 = document.getElementById('letter2')
const body = document.getElementById('body')

// color menu
const item1 = document.querySelector('nav__item_1')
const item2 = document.querySelector('nav__item_2')
const item3 = document.querySelector('nav__item_3')
const item4 = document.querySelector('nav__item_4')
const menuSide = document.querySelector('menu__side')

window.addEventListener("scroll", (event) => {
    if(window.scrollY !== 0){
        logo.classList.add("is-not-visible")
        language.classList.add("is-not-visible")
        burger.classList.add("burger-full")
        burgerLogo.classList.add("burger__side-full")
        burgerLetters.classList.add("is-visible")
    } else {
        logo.classList.remove("is-not-visible")
        language.classList.remove("is-not-visible")
        burger.classList.remove("burger-full")
        burgerLogo.classList.remove("burger__side-full")
        burgerLetters.classList.remove("is-visible")
    }
});

function openMenu() {

    if(window.scrollY == 0){
        burger.classList.toggle("burger-full")
    }

    body.classList.toggle("is-fixed")

    const tween = gsap.fromTo(".menu__letter--2", {y: 0}, {y: -120, duration: 0.3, delay: 2, ease: "power2.out"}).reverse();
    const tween2 = gsap.fromTo(".menu__letter--3", {y: 0}, {y: 120, duration: 0.3, delay: 2, ease: "power2.out"}).reverse();

    if(!tween.isActive()){
        tween.reversed(!tween.reversed());
    }

    if(!tween2.isActive()){
        tween2.reversed(!tween2.reversed());
    }

    menu.classList.toggle('is-active');
    nav.classList.toggle('menu-open');
    letter1.classList.toggle('letter1-anim');
    letter2.classList.toggle('letter2-anim');
}

burger.addEventListener("click", openMenu, true);



