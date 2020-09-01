
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');
const menuBtn=document.querySelectorAll('.menu-list li');

const toggleClass=()=>{
    menu.classList.toggle('show');
    hamurgerBtn.classList.toggle('rotate')
}

const closeMenu=()=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        hamurgerBtn.classList.toggle('rotate')
    }
}

hamurgerBtn.addEventListener('click', toggleClass);
menuBtn.forEach(btn => btn.addEventListener('click', closeMenu))