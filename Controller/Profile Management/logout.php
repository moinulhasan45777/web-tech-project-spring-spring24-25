<?php
  session_start();
  if(!isset($_SESSION['login_email']) && !isset($_COOKIE['login_email'])){
    header('Location: ../../View/Profile Management/view_profile.php');
    exit;
  }

  setcookie('login_email', '', time() - 3600, '/');
  setcookie('login_role', $role, time() - 3600, '/');
  setcookie('login_user_id', $userID, time() - 3600, '/');
  setcookie('login_pro_pic', $proPic, time() - 3600, '/');
  session_destroy();

  header("Location: ../../View/User Authentication/login.php");
  exit;
?>