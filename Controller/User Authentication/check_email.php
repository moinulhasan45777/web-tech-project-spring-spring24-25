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


        $data = $_POST['digital-signature'];

    // Clean the base64 string
    if (strpos($data, 'data:image/png;base64,') === 0) {
        $data = str_replace('data:image/png;base64,', '', $data);
    }

    // Fix + to space conversion issue
    $data = str_replace(' ', '+', $data);

    // Decode the base64 string
    $decoded = base64_decode($data);

    if ($decoded === false) {
        echo "Error decoding base64.";
        exit;
    }

    // Save the file
    $filename = 'upload/canvas_' . time() . '.png';
    if (file_put_contents($filename, $decoded)) {
        echo "Saved to $filename";
    } else {
        echo "Failed to save file.";
    }

        // // Converting base64 to BLOB/Binary
        // $parts = explode(',', $_POST['digital-signature']);
        // $base64String = $parts[1];
        // $imageData = base64_decode($base64String);
        // $_SESSION['digital_signature']  = $imageData;
        

        $src = $_FILES['change-avatar-input']['tmp_name'];
        $des = "../../Assets/Uploads/Profile Pictures/" . $_SESSION['user_email'] . "." . pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);

        if(move_uploaded_file($src, $des)){
          $_SESSION['user_profile_picture'] = $des;
        }

        $dataUrl = $_POST['digital-signature'];
        
        // Extract base64 data
        list($type, $data) = explode(';', $dataURL);
        list(, $data) = explode(',', $data);
        $data = base64_decode($data);

        // Optional: detect image extension
        $extension = strpos($type, 'jpeg') !== false ? '.jpg' : '.png';

        $uploadDir = "../../Assets/Uploads/Digital Signatures/";
        $fileName = "signature-" . $_SESSION['user_email'] . $extension;
        $filePath = $uploadDir . $fileName;

        if (file_put_contents($filePath, $data)) {
          $_SESSION['digital_signature'] = $filePath;
        } else {
          echo "Failed to save image.";
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