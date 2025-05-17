<?php
  require_once("send_code.php");
  require_once("../../Model/user_model.php");
  

  
    if (isset($_POST['button-main'])) {
        $info = ['email' => $_POST['user-email'], 'name' => $_POST['user-name'] ];
        if(!isset($_SESSION['user_role'])) {
          $_SESSION['user_role'] = "patient";
        }
        $_SESSION['user_email'] = $info['email'];
        $_SESSION['user_name'] = $info['name'];
        $_SESSION['user_phone']  = $_POST['user-phone'];

        // Password Hashing
        $hash = password_hash($_POST['user-pass'], PASSWORD_ARGON2ID, [
          'memory_cost' => 1 << 17,
          'time_cost' => 4,
          'threads' => 2
        ]);
        $_SESSION['user_pass']  = $hash;

        // // Converting base64 to BLOB/Binary
        // $parts = explode(',', $_POST['digital-signature']);
        // $base64String = $parts[1];
        // $imageData = base64_decode($base64String);
        // $_SESSION['digital_signature']  = $imageData;
        

        // // Getting Profile Picture as BLOB
        // $filePath = $_FILES['change-avatar-input']['tmp_name'];
        // $_SESSION['profile_picture']  = file_get_contents($filePath);
        
        

        // if(checkExistingUser($_POST['user-email'])) {
        //   echo "<script>alert('Email already exists');
        //   window.location.href = 'signup.php';
        //   </script>";
           
        //   exit;
        // }

        // Sending Verification Code
        if(send_mail($info)) {
          header("Location: ../../View/User Authentication/verify_email.html");
        }
        exit;
    } 

// if (isset($_POST['button-main'])) {
//     $email = $_POST['user-email'];
//     $name = $_POST['user-name'];
//     $_SESSION['user_email'] = $email;
//     $_SESSION['user_name'] = $name; // ✅ Store email in session

//     // generate code, send email, etc.
//     header("Location: verify_email.php"); // ✅ Go to verification page
//     exit;
// }
?>