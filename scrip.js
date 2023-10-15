const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')

})
}
if(navClose){
    navClose.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu')  
})}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n)=>{
    n.addEventListener('click', linkAction)
})
const scrollHeader= ()=>{
const header = document.getElementById('header')
if(this.scrollY >= 50 ) {
header.classList.add('bg-header');
}
else{
    header.classList.remove('bg-header')
}
}
window.addEventListener('scroll', scrollHeader);


const sections = document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");
        sectionClass= document.querySelector('.nav__menu a[href*=' + sectionId)
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
}
else{
    sectionClass.classList.remove('active-link')
}


})
}
window.addEventListener('scroll',scrollActive)


 const scrollUp = ()=> {
 const scrollUp = document.getElementById('scroll-up')
 // When the scroll is higher than 560 viewport height, add the fixed class to the "back-to-top
 if(this.scrollY > 350 ){
    scrollUp.classList.add('show-scroll')

 }
 else{
    scrollUp.classList.remove('show-scroll')
}
 }
window.addEventListener('scroll',scrollUp)



const sr= ScrollReveal({
    origin:'top',
    distance:'100px',
    duration:2500,
    delay:400,
    //reset:true
})
sr.reveal(`.home__data,.footer__content, .footer__logo, .footer__description`)
sr.reveal(`.home__tree-1`,{origin:'left',delay:800})
sr.reveal(`.home__tree-2`,{origin:'right',delay:800})
sr.reveal(`.home__img`,{
    delay:800
})
sr.reveal(`.category__card, .items__card`,{
    interval:100
})
sr.reveal(`.about__img, .about__data,.footer__tree-1`,{origin:'left'})
sr.reveal(`.party__img, .party__data,.footer__tree-2 `,{origin:'right'})

