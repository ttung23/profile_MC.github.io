$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

        if (Math.ceil($(this).scrollTop() + $(this).height()) == $(document).height()) {
            $('.navbar').removeClass('sticky')
        }
    })
})