const btn =document.querySelector('.btn-menu');
const nav =document.querySelector('.main-nav');
btn.addEventListener('click',() => {
    nav.classList.toggle('open-menu');


if (btn.innerHTML === '<img class="menu-img" src="images/menu3.png">') {
    btn.innerHTML = '<img class="menubar-batu-img" src="images/menubar-batu.png">';
} else {
    btn.innerHTML = '<img class="menu-img" src="images/menu3.png">';
    }
});