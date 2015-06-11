jQuery(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('#logo-image').attr('src', 'img/logo_small')
        $(".important-class").addClass("padding-on-my-header");
    }
    if (scroll < 50) {
        $(".important-class").removeClass("padding-on-my-header");
        $('#logo-image').attr('src', 'img/logo_big')
    }
});