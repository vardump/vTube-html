$(document).ready(function () {

    // Instantiate responsive navigation
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('img').addClass('.responsive-image');

    $('select').material_select();

    $('.side-nav').show();
    $('activator')on('click', function(){
        stopPropagation;
    });
});