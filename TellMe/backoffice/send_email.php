<?php
$from = $_POST["email"];
$name = $_POST["name"];
$message = $_POST["message"];

$body = "From: " . $from . "\nName: " . $name . "\n\n" . $message;

$to = "manuel.otero@line64.com";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <no-reply@electro927.com>' . "\r\n";

 
 mail($to,$from,$body,$name);

 header("location: /index.html#contact");
  
?>