const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav');
const exit = document.querySelector('#exit');
/*
// scroll effect
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        navBar.classList.add('sticky');
    } else{
        navBar.classList.remove('sticky');
    }
});

// menu click
menu.addEventListener('click',()=>{
    nav.classList.add('show');
});
exit.addEventListener('click',()=>{
    nav.classList.remove('show');
});
*/
// typing
const typing = new Typed('.typing',{
    strings:["Developer","Freelancer","Designer","Youtuper","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
