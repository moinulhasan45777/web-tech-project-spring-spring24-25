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
        

        // Profile Picture Upload
        $src = $_FILES['change-avatar-input']['tmp_name'];
        $des = "../../Assets/Uploads/Profile Pictures/" . $_POST['user-email'] . '.' . pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);

        if(move_uploaded_file($src, $des)){
          $_SESSION['user_profile_picture'] = $_POST['user-email'] . '.' . pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);
        }else{
          // BUG
        }


        // Digital Signature
      	define('UPLOAD_DIR', '../../Assets/Uploads/Digital Signatures/');
	      $img = $_POST['digital-signature'];
	      $img = str_replace('data:image/png;base64,', '', $img);
	      $img = str_replace(' ', '+', $img);
	      $data = base64_decode($img);
	      $file = UPLOAD_DIR . $_POST['user-email'] . '.png';
	      if(file_put_contents($file, $data)){
          $_SESSION['user_digital_signature'] = $_POST['user-email'] . '.png';
        }else{
          // BUG
        }
        
        
        
        // BUG
        // if(checkExistingUser($_POST['user-email'])) {
        //   echo "<script>alert('Email already exists');
        //   window.location.href = 'signup.php';
        //   </script>";
           
        //   exit;
        // }

        // Sending Verification Code
        if(send_mail($info)) {
          header("Location: ../../View/User Authentication/verify_email.html");
        }else{
          // BUG
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