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

            // Trigger emojiRotate animation when the first-layer is shown
            if (entry.target.classList.contains('first-layer')) {
                const emoji = entry.target.querySelector('.first-layer-emoji');
                if (emoji) {
                    emoji.classList.add('rotate');
                }
            }
         }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.first-layer, .second-layer, .nah-layer, .third-layer');
hiddenElements.forEach((el) => observer.observe(el));

const firstLayerEmoji = document.querySelectorAll('.first-layer-emoji');
firstLayerEmoji.forEach((el) => observer.observe(el));

const thirdLayer = document.querySelector('.third-layer');
observer.observe(thirdLayer);
thirdLayer.addEventListener('animationend', () => {
    textAnimationPlayed = true;
});

const messageBlock = document.querySelector('.message-block');
observer.observe(messageBlock);

document.addEventListener('DOMContentLoaded', () => {
  // GitHub Contributions Chart
  new Chart(document.getElementById('githubChart'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Commits',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { display: false },
        x: { ticks: { color: 'rgba(255,255,255,0.6)' } }
      }
    }
  });

  // Skills Radar Chart
  new Chart(document.getElementById('skillsRadar'), {
    type: 'radar',
    data: {
      labels: ['AI Interaction', 'Visual Design', 'Prototyping', 'User Research', 'Technical Writing'],
      datasets: [{
        label: 'Skill Level',
        data: [9, 7, 8, 8, 9],
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(255,255,255,0.8)',
        pointBackgroundColor: 'rgba(255,255,255,0.8)'
      }]
    },
    options: {
      scales: {
        r: {
          grid: { color: 'rgba(255,255,255,0.1)' },
          ticks: { display: false },
          pointLabels: { color: 'rgba(255,255,255,0.6)' }
        }
      }
    }
  });
});

