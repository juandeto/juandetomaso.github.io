
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');
const menuBtn=document.querySelectorAll('.menu-list li');
const stripe=document.getElementsByClassName('stripe');

const toggleClass=()=>{
    menu.classList.toggle('show');
    console.log(stripe[0]);
    stripe[0].classList.toggle('rotate3');
    stripe[1].classList.toggle('rotate1');
    stripe[2].classList.toggle('rotate2');
}

const closeMenu=()=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        stripe[0].classList.toggle('rotate3');
        stripe[1].classList.toggle('rotate1');
        stripe[2].classList.toggle('rotate2');
    }
}

hamurgerBtn.addEventListener('click', toggleClass);
menuBtn.forEach(btn => btn.addEventListener('click', closeMenu))