var linkedinAnimation = lottie.loadAnimation({
    container: document.getElementById('linkedin-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/icons/dynamic/Linkedin/linkedin.json'
});

var mailAnimation = lottie.loadAnimation({
    container: document.getElementById('mail-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/icons/dynamic/Mail/mail.json'
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
})

const observer_blocks = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
}, {
    threshold: 0.2
})

const hiddenElements = document.querySelectorAll('.first-layer');
hiddenElements.forEach((el) => observer.observe(el));

const fadeInElements = document.querySelectorAll('.second-layer, .nah-layer, .third-layer');
fadeInElements.forEach((el) => observer.observe(el));

const messageBlock = document.querySelector('.message-block');
observer_blocks.observe(messageBlock);