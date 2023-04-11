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
            console.log($(document).height())
        }

        console.log(Math.ceil($(this).scrollTop() + $(this).height()));
    })

    console.log($(document).height())
})

// window.addEventListener("scroll", function () {
//     // Lấy chiều cao của trang
//     var pageHeight = document.documentElement.scrollHeight;

//     // Lấy chiều cao của cửa sổ hiển thị
//     var windowHeight = window.innerHeight;

//     // Lấy vị trí hiện tại của thanh cuộn
//     var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

//     // Nếu vị trí hiện tại của thanh cuộn gần đến cuối trang, tự động cuộn xuống cuối trang
//     if (pageHeight - windowHeight - scrollPosition < 100) {
//         window.scrollTo(0, pageHeight);
//     }
// });