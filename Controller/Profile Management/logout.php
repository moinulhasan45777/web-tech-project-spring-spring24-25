<?php
  session_start();
  if(!isset($_SESSION['login_email']) && !isset($_COOKIE['login_email'])){
    header('Location: ../../View/User Authentication/login.html');
    exit;
  }

  setcookie('login_email', '', time()-10, '/');
  session_destroy();

  header("Location: ../../View/User Authentication/login.html");
  exit;
?>