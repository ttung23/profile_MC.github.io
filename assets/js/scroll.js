const smoothScrollTrigger = document.querySelectorAll('.smooth-scroll');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop - 30;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 200;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }, {passive: true})
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

// Theo dõi sự kiện scroll của trang web
window.addEventListener('scroll', () => {
    // Lặp lại các phần tử có class là "section"
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight - 100) {
            smoothScrollTrigger.forEach(link => {
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {passive: true});

