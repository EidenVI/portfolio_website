<?php 
require 'includes/github_activity.php';
$activities = get_github_activities();

if (empty($activities)) {
    echo '<p>No recent activity found.</p>';
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>GitHub Activity</title>
    <style>
    .activity-item {
        padding: 1rem;
        margin: 0.5rem 0;
        background: #f8f9fa;
        border-left: 3px solid #0366d6;
    }
    .repo-name { color: #0366d6; }
    .event-time { color: #6a737d; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>Recent GitHub Activity</h1>
    
    <div id="activity-feed">
        <?php foreach ($activities as $activity): ?>
        <div class="activity-item">
            <p class="repo-name"><?= htmlspecialchars($activity['repo_name']) ?></p>
            <p><?= htmlspecialchars($activity['description']) ?></p>
            <p class="event-time"><?= htmlspecialchars($activity['created_at']) ?></p>
        </div>
        <?php endforeach; ?>
    </div>

    <script src="assets/js/activity.js"></script>
</body>
</html>