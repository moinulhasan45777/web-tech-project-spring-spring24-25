<?php
  require_once("../../Controller/User Authentication/send_code.php");
      

    if (isset($_POST['resend-code'])) {
        $info = ['email' => $_SESSION['user_email'], 'name' => $_SESSION['user_name'] ];
        send_mail($info);
        header("Location: ../../View/User Authentication/verify_email.php");
    }

    if(isset($_POST['button-main'])) {
      if(!ctype_digit($_POST['otp'])){
        echo "<script>alert('Wrong Verification Code');
          window.location.href = '../../View/User Authentication/verify_email.php';
          </script>";
          exit;
    }

      if($_POST['otp'] == $_SESSION['otp']){
        header("Location: ../../View/User Authentication/detailed_signup.php");
      } else{
        echo "<script>alert('Wrong Verification Code');
          window.location.href = '../../View/User Authentication/verify_email.php';
          </script>";
          exit;
      }
    } else{
      echo "<script>alert('Invalid Request');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
    }
?>