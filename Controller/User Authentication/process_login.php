<?php
  require_once("../../Model/user_model.php");

  

  if(isset($_POST['button-main'])){
    $user = ['email' => trim($_POST['user-email']), 'pass' => $_POST['user-pass']];
    if(login($user)){
      if(isset($_POST['remember-me'])){
        setcookie('login_email', $user['email'], time() + (10 * 365 * 24 * 60 * 60), '/');
        $_SESSION['login_email'] = $user['email'];
        echo "<script>alert('Login Successful');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
      }else{
        setcookie('login_email', $user['email'], time() + (3600), '/');
        $_SESSION['login_email'] = $user['email'];
        echo "<script>alert('Login Successful');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
      }
    } else{
      echo "<script>alert('Wrong Username or Password');
          window.location.href = '../../View/User Authentication/login.html';
          </script>";
          exit;
    }
  }
?>




