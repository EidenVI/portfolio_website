<?php
$host = 'localhost';
$db   = 'github_activity';
$user = 'db_user';
$pass = 'werk';
$charset = 'utf8';

$dsn = "pgsql:host=$host;dbname=$db";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

try {
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    die('DB Error: ' . $e->getMessage());
}
?>