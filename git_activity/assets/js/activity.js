document.addEventListener('DOMContentLoaded', () => {
  fetch('/git_activity/activity.php')
    .then(response => response.text())
    .then(html => {
      document.getElementById('activity-feed').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading GitHub activity:', error);
    });
});