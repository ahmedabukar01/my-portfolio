const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const exit = document.querySelector('#exit');

// jquery
$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayHoverPause:true,
        autoplayTimeOut:2000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
})
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
