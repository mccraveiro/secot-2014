window.onload = function () {

    window.onscroll = function () {
        updateHeader();
    };

    // call the first time in case URL has ID anchor
    updateHeader();
};

function updateHeader () {

    var speed = 1.3;
    var nav = document.querySelector('.header nav');
    var header = document.querySelector('.header');
    var headerContent = document.querySelector('.header-content');
    var height = header.offsetHeight - nav.offsetHeight;

    var scrollTop = Math.max(0, document.body.scrollTop);
    var opacity = Math.max(0, 1 - (scrollTop * speed / height));

    headerContent.style.marginTop = scrollTop +'px';
    headerContent.style.opacity = opacity;

    if (scrollTop > height) {
        nav.className = "fixed";
    } else {
        nav.className = "";
    }
}
