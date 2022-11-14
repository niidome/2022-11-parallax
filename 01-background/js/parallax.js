let background = document.getElementsByClassName('parallax-background')[0];
window.addEventListener('scroll', function (e) {
    let scroll = window.pageYOffset * 0.8;
    background.style.backgroundPosition = 'top ' + scroll + 'px center';
});