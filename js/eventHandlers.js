// LinkedIn animation 
document.querySelector('.icon-button1').addEventListener('mouseenter', function() {
    linkedinAnimation.setDirection(1);
    linkedinAnimation.play();
});

document.querySelector('.icon-button1').addEventListener('mouseleave', function() {
    linkedinAnimation.setDirection(-1);
    linkedinAnimation.play();
});

// Mail animation
document.querySelector('.icon-button2').addEventListener('mouseenter', function() {
    mailAnimation.setDirection(1);
    mailAnimation.play();
});

document.querySelector('.icon-button2').addEventListener('mouseleave', function() {
    mailAnimation.setDirection(-1);
    mailAnimation.play();
});

// Cards animation
const cardsElements = document.querySelectorAll('.project-card1, .project-card2, .project-card3, .project-card4');

cardsElements.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.remove('project-card-hover-out');
        card.classList.add('project-card-hover-in');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('project-card-hover-in');
        card.classList.add('project-card-hover-out');
    });
});
