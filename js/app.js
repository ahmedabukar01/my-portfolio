const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const exit = document.querySelector('#exit');

menu.addEventListener('click',()=>{
    nav.classList.add('show');
});
exit.addEventListener('click',()=>{
    nav.classList.remove('show');
})