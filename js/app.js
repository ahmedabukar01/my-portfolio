const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const exit = document.querySelector('#exit');

// scroll effect
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        header.classList.add('sticky');
    } else{
        header.classList.remove('sticky');
    }
});

// menu click
menu.addEventListener('click',()=>{
    nav.classList.add('show');
});
exit.addEventListener('click',()=>{
    nav.classList.remove('show');
});

// typing
const typing = new Typed('.typing',{
    strings:["Developer","Freelancer","Designer","Youtuper","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
