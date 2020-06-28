<?php


if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mailTo = "fjlloyd48@hotmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "Your have recieved an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: /index.html")
    
}