$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

        if (Math.ceil($(this).scrollTop() + $(this).height()) == $(document).height()) {
            // Nếu đã lướt xuống cuối trang
            // Thực hiện các hành động tại đây
            $('.navbar').removeClass('sticky')
        }
    })
})