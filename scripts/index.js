// Load maps
var map;
google.maps.event.addDomListener(window, 'load', initialize);

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

google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});

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

function initialize() {

    var mapOptions = {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true,
        center: new google.maps.LatLng(-23.48981, -47.43500),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.48863, -47.44442),
        map: map,
        title: '',
        icon: 'images/map-marker.png'
    });
}
