<?php
  require_once("../../Model/user_model.php");
  session_start();

  if(isset($_POST['button-main'])){
    $user = ['email' => trim($_POST['user-email']), 'pass' => $_POST['user-pass']];
    if(login($user)){
      $role = retrieveRole($user['email']);
      $userID = retrieveUserID($user['email']);
      $proPic = '../../Assets/Uploads/Profile Pictures/' . retrieveProPic($userID);  

      if(isset($_POST['remember-me'])){
        setcookie('login_email', $user['email'], time() + 86400000, '/');
        setcookie('login_role', $role, time() + 86400000, '/');
        setcookie('login_user_id', $userID, time() + 86400000, '/');
        setcookie('login_pro_pic', $proPic, time() + 86400000, '/');
        
        echo "<script>alert('Login Successful');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
      }else{
        $_SESSION['login_email'] = $user['email'];
        $_SESSION['login_role'] = $role;
        $_SESSION['login_user_id'] = $userID;
        $_SESSION['login_pro_pic'] = $proPic;
        echo "<script>alert('Login Successful');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
      }
    } else{
      echo "<script>alert('Wrong Username or Password');
          window.location.href = '../../View/User Authentication/login.php';
          </script>";
          exit;
    }
  }else{
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>