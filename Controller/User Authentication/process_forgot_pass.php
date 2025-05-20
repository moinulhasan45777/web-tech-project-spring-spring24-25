<?php
  require_once("../../Model/user_model.php");

  if (session_status() === PHP_SESSION_ACTIVE) {
    session_unset();     
    session_destroy();   
  }

  session_start();

  if(isset($_POST["button-main"])) {
    if(checkExistingUser($_POST["user-email"])) {
      $_SESSION["user_email"] = $_POST["user-email"];
      header("Location: ../../View/User Authentication/reset_pass.php");
      exit;
    }
    else{
      echo "<script>alert('Email does not exists!');
          window.location.href = '../../View/User Authentication/forgot_pass.html';
          </script>";
          exit;
    }
  }
?>