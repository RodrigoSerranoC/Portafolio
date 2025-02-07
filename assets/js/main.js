let navbar = document.querySelector('#navbar');
let burger = document.querySelector('#hamburger');
let listas = document.querySelectorAll('.opciones');

burger.addEventListener('click', () => {
navbar.classList.toggle('open');

});

function quitarConScroll(){
    document.addEventListener('scroll', () => {
    navbar.classList.remove('open');
});
};
quitarConScroll();
    

