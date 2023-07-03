// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop()) {
//             $('.navbar').addClass('sticky')
//         } else {
//             $('.navbar').removeClass('sticky')
//         }

//         if (Math.ceil($(this).scrollTop() + $(this).height()) == $(document).height()) {
//             $('.navbar').removeClass('sticky')
//         }
//     })
// })

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }

        if (Math.ceil(window.pageYOffset + window.innerHeight) === document.documentElement.scrollHeight) {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    });
});