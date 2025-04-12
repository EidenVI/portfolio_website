document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.avatar-image');
  let hoverTimeout;

  avatar.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    avatar.style.filter = 'grayscale(0)';
    avatar.style.transform = 'scale(1.05)';
  });

  avatar.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
      avatar.style.filter = 'grayscale(1)';
      avatar.style.transform = 'scale(1)';
    }, 500);
  });
});