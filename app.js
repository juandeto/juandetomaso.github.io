const nav=document.querySelector('.nav');
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');
const menuBtn=document.querySelectorAll('.menu-list li');
const stripe=document.getElementsByClassName('stripe');

const toggleClass=()=>{
    menu.classList.toggle('show');
    nav.classList.toggle('fix')
    stripe[0].classList.toggle('rotate3');
    stripe[1].classList.toggle('rotate1');
    stripe[2].classList.toggle('rotate2');
}

const closeMenu=()=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        nav.classList.remove('fix')
        stripe[0].classList.toggle('rotate3');
        stripe[1].classList.toggle('rotate1');
        stripe[2].classList.toggle('rotate2');
    }
}

hamurgerBtn.addEventListener('click', toggleClass);
menuBtn.forEach(btn => btn.addEventListener('click', closeMenu))


const partialApply = (fn, ...fixedArgs) => {
    debugger
    return function (...remainingArgs) {
      return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
  };

const add = (a, b) => a + b;


const add10 = partialApply(add, 10);
console.log('add10: ', add10)
add10(5);