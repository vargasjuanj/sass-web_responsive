
const menu = document.getElementById('menu');
window.onscroll = function () {
    if (window.pageYOffset > 10) { // posicion vertical
        menu.style.backgroundColor = '#fff';
    }
    else {
        menu.style.backgroundColor = 'initial';
    }
}