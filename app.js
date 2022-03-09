const nav=document.querySelector('.nav');
const hamurgerBtn=document.querySelector('.hamburger');
const menu=document.querySelector('.menu-list');
const menuBtn=document.querySelectorAll('.menu-list li');
const stripe=document.getElementsByClassName('stripe');
const portfolioSection = document.getElementById('portfolio')
const projectSection = document.querySelector('.project-section')
const aboutmeSection = document.getElementById('aboutme')
const skillsSection = document.querySelector('.about-skills')
const projectsData = [
    {
        title: 'Nook Deco Ecommerce',
        src: 'images/sofa.png',
        alt: 'violet sofa',
        link: "https://nookdeco.com.ar/"
    },
    {
        title: 'NFT Marketplace',
        src: 'images/nft.png',
        alt: 'custom Mtv logo, that says Nft',
        link: "https://nft-detomaso.vercel.app/"
    },
    {
        title: 'Hamburger Web App',
        src: 'images/hamburgerPic.png',
        alt: 'double hamburger',
        link: "https://projectburgerapp.netlify.app/"
    },
    {
        title: 'Photo Portfolio',
        src: 'images/camerapic.png',
        alt: 'photo camera',
        link: "https://angelesmorgan.com/"
    },
    {
        title: 'Nook Deco Ecommerce',
        src: 'images/sofa.png',
        alt: 'violet sofa',
        link: "https://nookdeco.com.ar/"
    },
    {
        title: 'Amazon Clon',
        src: 'images/amazonLogo.png',
        alt: 'amazon logo',
        link: "https://fakeamazonproject.netlify.app/"
    },
    {
        title: 'Memory Game',
        src: 'images/brain.png',
        alt: 'brain draw',
        link: "https://projectmemorygame.netlify.app/"
    },
    {
        title: 'Horse Game',
        src: 'images/caballoCartoon-removebg-preview.png',
        alt: 'bo jack character (horse)',
        link: "https://projecthorsegame.netlify.app"
    },
    {
        title: 'Drum Kit',
        src: 'images/drumpic.png',
        alt: 'drum',
        link: "https://projectdrumkit.netlify.app"
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


let projectsCreated = false;
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
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        nav.classList.remove('fix')
        stripe[0].classList.toggle('rotate3');
        stripe[1].classList.toggle('rotate1');
        stripe[2].classList.toggle('rotate2');
    }
}

hamurgerBtn.addEventListener('click', () => toggleClass())

window.addEventListener("scroll", function(event) {
        let windowHeight = window.innerHeight;
        let diffFromTopPorfoltio = portfolioSection.getBoundingClientRect().top
        let diffFromTopAboutMe = aboutmeSection.getBoundingClientRect().top

        let distancePercentagePortfolio = (diffFromTopPorfoltio / windowHeight) * 100;
        let distancePercentageAboutMe = (diffFromTopAboutMe / windowHeight) * 100;
    console.log('distancePercentageAboutMe: ', distancePercentageAboutMe)
        if(distancePercentagePortfolio < 75 && !projectsCreated) {
            // generate the portfolio thumbnails
            projectsData.forEach(project => {
                const container = document.createElement('article')
                container.classList.add("project")
                container.setAttribute('data-aos', "fade-up")
                container.innerHTML = `
                                        <a  href=${project.link} target="_blank" rel="noopener">
                                        <img
                                            src=${project.src}
                                            alt=${project.alt}
                                        />
                                        <span>${project.title}</span>
                                        `
                projectSection.appendChild(container)
            })
            projectsCreated = true

        }

        if(distancePercentageAboutMe < 75 && !skillsCreated) {
            // generate the portfolio thumbnails
            skillsData.forEach(project => {
                const container = document.createElement('figure')
                container.classList.add("about-figure")

                container.innerHTML = `
                                    <img src=${project.src} alt=${project.alt} />
                                    <figcaption>${project.title}</figcaption>
                                        `
                skillsSection.appendChild(container)
            })
            skillsCreated = true
        }
}, false);

