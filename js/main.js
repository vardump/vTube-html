$(document).ready(function () {

    // Instantiate responsive navigation
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('img').addClass('.responsive-image');

    $('select').material_select();

    $('.side-nav').show();
    $(document).ready(function(){
        $('.slider').slider({full_width: false});
    });
});