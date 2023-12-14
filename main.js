const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
console.log(burger)

function triggerMenu() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
}