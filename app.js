
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');

const toggleClass=()=>{
    menu.classList.toggle('show');
    hamurgerBtn.classList.toggle('rotate')
}

hamurgerBtn.addEventListener('click', toggleClass);