<?php

  require_once("../../Model/user_model.php");
  session_start();

  if(isset($_POST["button-main"])){
    $password = $_POST["new-pass"];
    $previousPass = $_POST["current-pass"];
    $confirmPass = $_POST["user-pass-confirm"];

    if($previousPass == ""){
      echo "<script>alert('Current password required!');
          window.location.href = '../../View/Profile Management/update_pass.php';
          </script>";
          exit;
    }

    $specialCharCount = 0;
    $upperCaseCount = 0;
    $lowerCaseCount = 0;
    $digitCount = 0;
    $specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "[", "]", "{", "}", "|", "<", ">", "?", "/", "~", "`" ];
    for($i = 0; $i < strlen($password); $i++){
      if(in_array( $password[$i], $specialCharacters)){
        $specialCharCount++;
      }

      if($password[$i] >= 'A' && $password[$i] <= 'Z'){
        $upperCaseCount++;
      }

      if($password[$i] >= 'a'&& $password[$i] <= 'z'){
        $lowerCaseCount++;
      }

      if($password[$i] >= '0'&& $password[$i] <= '9'){
        $digitCount++;
      }
    }

    if($specialCharCount == 0 || $upperCaseCount == 0 || $lowerCaseCount == 0 || $digitCount == 0){
      echo "<script>alert('Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one digit (0-9), and one special character (!@#$...).');
          window.location.href = '../../View/Profile Management/update_pass.php';
          </script>";
          exit;
    }

    if($password != $confirmPass){
      echo "<script>alert('Password didn't match!');
          window.location.href = '../../View/Profile Management/update_pass.php';
          </script>";
          exit;
    }

    // New Password Hashing
    $hash = password_hash($password, PASSWORD_ARGON2ID, [
      'memory_cost' => 1 << 17,
      'time_cost' => 4,
      'threads' => 2
    ]);

    $currentUser = ['email' => $_COOKIE['login_email'], 'pass' => $previousPass];
    $user = ['email' => $_COOKIE['login_email'], 'hash' => $hash];

    if(!checkExistingPass($currentUser)){
      echo "<script>alert('Invalid current password!');
          window.location.href = '../../View/Profile Management/update_pass.php';
          </script>";
          exit;
    }

    if(updatePass($user)){
      echo "<script>alert('Password successfully changed!<br> Please Sign in using the new password!');
          window.location.href = '../../View/Profile Management/view_profile.php';
          </script>";
          exit;
    }else{
      echo "<script>alert('Password could not be changed due to some error! Please try again!');
          window.location.href = '../../View/Profile Management/update_pass.php';
          </script>";
          exit;
    }
  }else {
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>