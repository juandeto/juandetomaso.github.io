const nav=document.querySelector('.nav');
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');
const menuBtn=document.querySelectorAll('.menu-list li');
const stripe=document.getElementsByClassName('stripe');
const portfolioSection = document.getElementById('portfolio')
const imgContainer = document.querySelectorAll('.img-container')
const aboutmeSection = document.getElementById('aboutme')
const skillsSection = document.querySelector('.about-skills')
const projectsData = [
    {
        src: 'images/sofa.png',
        alt: 'violet sofa',
    },
    {
        src: 'images/nft.png',
        alt: 'custom Mtv logo, that says Nft',
    },
    {
        src: 'images/hamburgerPic.png',
        alt: 'double hamburger',
    },
    {
        src: 'images/camerapic.png',
        alt: 'photo camera',
    },
    {
        src: 'images/amazonLogo.png',
        alt: 'amazon logo',
    },
    {
        src: 'images/brain.png',
        alt: 'brain draw',
    },
    {
        src: 'images/caballoCartoon-removebg-preview.png',
        alt: 'bo jack character (horse)',
    },
    {
        src: 'images/drumpic.png',
        alt: 'drum',
    },
]
const skillsData = [
    {
        src: 'images/htmlCssLogo.png',
        alt: 'css & html logos',
        title: 'HTML5 / CSS3'
    },
    {
        src: 'images/jsLogo.png',
        alt: 'javascript logo',
        title: 'Javascript'
    },
    {
        src: 'images/reactReduxLogo.png',
        alt: 'react & redux logo',
        title: 'React + Redux'
    },
    {
        src: 'images/typescriptLogo.png',
        alt: 'typescript logo',
        title: 'Typescript'
    },
    {
        src: 'images/scssLogo.png',
        alt: 'scss logo',
        title: 'Sass'
    }
]
let imgsCreated = false;
let skillsCreated = false;

const toggleClass=()=>{
    console.log('toggle func')
    menu.classList.toggle('show');
    nav.classList.toggle('fix')
    stripe[0].classList.toggle('rotate3');
    stripe[1].classList.toggle('rotate1');
    stripe[2].classList.toggle('rotate2');
}

const closeMenu=()=>{
    console.log('close btn!')
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        nav.classList.remove('fix')
        stripe[0].classList.toggle('rotate3');
        stripe[1].classList.toggle('rotate1');
        stripe[2].classList.toggle('rotate2');
    }
}

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => closeMenu())
})

hamurgerBtn.addEventListener('click', () => toggleClass())






window.addEventListener("scroll", function(event) {
        let windowHeight = window.innerHeight;
        let diffFromTopPorfoltio = portfolioSection.getBoundingClientRect().top
        let diffFromTopAboutMe = aboutmeSection.getBoundingClientRect().top

        let distancePercentagePortfolio = (diffFromTopPorfoltio / windowHeight) * 100;
        let distancePercentageAboutMe = (diffFromTopAboutMe / windowHeight) * 100;

        if(distancePercentagePortfolio < 75 && !imgsCreated) {
            // generate the portfolio thumbnails
            console.log('imgContainer: ', imgContainer)
            for(let i = 0; i < imgContainer.length; i++) {
                const img = document.createElement('img')
                console.log('projectsData[i]: ', i, projectsData[i])
                img.setAttribute('src', projectsData[i].src)
                img.setAttribute('alt', projectsData[i].alt)
                imgContainer[i].classList.remove('background')
                imgContainer[i].appendChild(img)
            }
            imgsCreated = true
        
        }
}, false);

