$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }
    })
})