function load (img) {
    const url = img.getAttribute('lazy-src')

    if (url != null) {
        img.setAttribute('src', url)
    }

    img.removeAttribute('lazy-src')
}

let lazyImg = document.querySelectorAll('[lazy-src]')

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            load(entry.target)
        }
    })
})

lazyImg.forEach(img => {
    observer.observe(img)
})