<?php
require 'db.php';

function get_github_activities($limit = 15) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT repo_name, description, created_at FROM github_activity ORDER BY created_at DESC LIMIT ?");
    $stmt->execute([$limit]);
    return $stmt->fetchAll();
}

function update_github_activities($username, $token) {
    global $pdo;

    $url = "https://api.github.com/users/$username/events";
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: token $token",
        "User-Agent: GitHub-Activity-App"
    ]);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        die('Curl error: ' . curl_error($ch));
    }

    if (curl_getinfo($ch, CURLINFO_HTTP_CODE) !== 200) {
        die('GitHub API error: ' . $response);
    }

    curl_close($ch);

    $events = json_decode($response, true);

    if (!is_array($events)) {
        die('Error: Invalid response from GitHub API.');
    }

    foreach ($events as $event) {
        if (!isset($event['type'], $event['repo']['name'], $event['created_at'])) {
            continue; // Пропускаем некорректные события
        }

        $repoName = $event['repo']['name'];
        $description = $event['type'];
        $createdAt = $event['created_at'];

        $stmt = $pdo->prepare("INSERT INTO github_activity (repo_name, description, created_at) VALUES (?, ?, ?)");
        $stmt->execute([$repoName, $description, $createdAt]);
    }
}

function parse_event($event) {
    $types = [
        'PushEvent' => 'Pushed commits to',
        'CreateEvent' => 'Created repository',
        'IssuesEvent' => $event['payload']['action'] . ' issue in'
    ];
    
    return $types[$event['type']] ?? 'Activity in';
}
?>