window.onload = function () {

    window.onscroll = function () {
        updateHeader();
    };

    window.onresize = function () {
        updateHeader();
    };

    // call the first time in case URL has ID anchor
    updateHeader();
};

function updateHeader () {

    // Mobile and tablets
    if (window.matchMedia("only screen and (max-width: 64em)").matches) {
        resetHeader();
        return;
    }

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

function resetHeader () {

    var nav = document.querySelector('.header nav');
    var headerContent = document.querySelector('.header-content');

    headerContent.style.marginTop = '0px';
    headerContent.style.opacity = 1;
    nav.className = "";
}
