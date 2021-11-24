const menuBurger = document.querySelector('.menu__burger');
const circle = document.querySelector('.circles');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  circle.classList.toggle('active');
})