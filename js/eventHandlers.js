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