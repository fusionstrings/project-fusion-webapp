console.log('menu loaded');

let querySelector = document.querySelector.bind(document);
let navdrawerContainer = querySelector('.navdrawer-container');
let body = document.body;
let appbarElement = querySelector('.app-bar');
let menuBtn = querySelector('.menu');
let main = querySelector('main');

function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
}

function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
}

function menu(){
    main.addEventListener('click', closeMenu);
    menuBtn.addEventListener('click', toggleMenu);
    navdrawerContainer.addEventListener('click', function (event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });
}
export default menu;