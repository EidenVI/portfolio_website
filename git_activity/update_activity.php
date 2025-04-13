<?php
echo "Looking for autoload.php at: " . __DIR__ . '/../../vendor/autoload.php' . PHP_EOL;

require_once __DIR__ . '/../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$token = $_ENV['GITHUB_TOKEN'] ?? null;

if (!$token) {
    die('Error: GitHub token is not set in the .env file.');
}

require 'includes/github_activity.php';
update_github_activities('EidenVI', $token);
?>