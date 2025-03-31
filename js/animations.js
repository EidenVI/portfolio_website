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

let textAnimationPlayed = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target.classList.contains('message-block')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        } else if (!textAnimationPlayed && entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.first-layer, .second-layer, .nah-layer, .third-layer');
hiddenElements.forEach((el) => observer.observe(el));

const thirdLayer = document.querySelector('.third-layer');
observer.observe(thirdLayer);
thirdLayer.addEventListener('animationend', () => {
    textAnimationPlayed = true;
});

const messageBlock = document.querySelector('.message-block');
observer.observe(messageBlock);
