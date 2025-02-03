<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Basic validation
  if (empty($name) || empty($email) || empty($message)) {
    echo "All fields are required!";
    exit;
  }

  $to = "kayikadewa@gmail.com";
  $subject = "Contact Message from " . $name;
  $body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;
  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent!";
  } else {
    echo "Failed to send message.";
  }
}
?>
