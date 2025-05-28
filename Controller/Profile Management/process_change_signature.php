<?php
  session_start();

  if(isset($_POST["button-main"])){
    if(!isset($_POST["digital-signature"])){
      echo "<script>alert('Please provide digital signature!');
            window.location.href = '../../Controller/Profile Management/change_signature.php';
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