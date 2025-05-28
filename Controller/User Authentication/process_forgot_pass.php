<?php
  require_once("../../Model/user_model.php");
  require_once("../../Controller/User Authentication/send_password_reset_link.php");

  if(isset($_POST["button-main"])) {
    if (session_status() === PHP_SESSION_ACTIVE) {
      session_unset();     
      session_destroy();   
    }

    session_start();
    setcookie('login_email', '', time()-10, '/');
    
    if(checkExistingUser($_POST["user-email"])) {
      if(send_mail($_POST['user-email'])){
        $_SESSION['user_email'] = $_POST['user-email'];
        echo "<script>alert('Password Resent link has been sent to your email. Please follow that link to reset your password!');
          window.location.href = '../../View/User Authentication/login.php';
          </script>";
          exit;
      }else{
        echo "<script>alert('An error occurred! Please try again!');
          window.location.href = '../../View/User Authentication/forgot_pass.html';
          </script>";
        exit;
      }
    }
    else{
      echo "<script>alert('Email does not exists!');
          window.location.href = '../../View/User Authentication/forgot_pass.html';
          </script>";
          exit;
    }
  } else{
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>