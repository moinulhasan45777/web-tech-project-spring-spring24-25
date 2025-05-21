<?php
  require_once("send_code.php");
  require_once("../../Model/user_model.php");
  

  if (isset($_POST['button-main'])) {
    $allowedPictureExtensions = ["png", "jpg", "jpeg"];
    $name = trim($_POST['user-name']);
    $email = $_POST['user-email'];
    $password = $_POST['user-pass'];
    $phone = $_POST['user-phone'];
    $proPicExtension = pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);

    // Check if any field is empty
    if($name == "" || $email == "" || $password == "" || $phone == "") {
      echo "<script>alert('Please Fill all the fields!');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    // Name Validation
    for($i = 0; $i < strlen($name); $i++){
      if(($name[$i] < 'A' || $name[$i] > 'Z') && ($name[$i] < 'a' || $name[$i] > 'z') && $name[$i] != '.' && $name[$i] != '-' && $name[$i] != ' ' ){
        echo "<script>alert('Invalid Name');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
      }
    }

    // Email Validation
    $atCount = 0;
    $atIndex = 0;
    $dotCount = 0;
    for($i = 0; $i < strlen($email); $i++){
      if($email[$i] == '@'){
        $atCount++;
        $atIndex = $i;
      }
    }
    for($i = $atIndex; $i < strlen($email); $i++){
      if($email[$i] == '.'){
        $dotCount = 0;
      }
    }

    if($atCount != 1 && ($dotCount == 0 || $dotCount > 2)){
      echo "<script>alert('Invalid Email');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    // Password Validation
    if(strlen($password) < 8){
      echo "<script>alert('Password Must be At least 8 characters long');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    $specialCharCount = 0;
    $upperCaseCount = 0;
    $lowerCaseCount = 0;
    $digitCount = 0;
    $specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "[", "]", "{", "}", "|", "<", ">", "?", "/", "~", "`" ];
    for($i = 0; $i < strlen($name); $i++){
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
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    // Phone Validation
    if(($phone[0] == '+' && strlen($phone) != 14) || ($phone[0] != '+' && strlen($phone) != 11)){
      echo "<script>alert('Invalid Phone Number');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    for( $i = 0; $i < strlen($phone); $i++ ){
      if($i == 0 && $phone[$i] == '+'){
        continue;
      }

      if($phone[$i] < '0' || $phone[$i] > '9'){
        echo "<script>alert('Invalid Phone Number');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
      }
    }

    // Profile Picture Validation
    if(!in_array($proPicExtension, $allowedPictureExtensions)){
      echo "<script>alert('Invalid Digital Signature');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }

    // Digital Signature Validation
    if(!isset($_POST['digital-signature'])){
      echo "<script>alert('Digital Signature is required!');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }



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

    // Profile Picture Upload
    $src = $_FILES['change-avatar-input']['tmp_name'];
    $des = "../../Assets/Uploads/Profile Pictures/" . $_POST['user-email'] . '.' . pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);

    if(move_uploaded_file($src, $des)){
      $_SESSION['user_profile_picture'] = $_POST['user-email'] . '.' . pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);
    }else{
      echo "<script>alert('An Error Occurred!');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }


    // Digital Signature
    $uploadDir = '../../Assets/Uploads/Digital Signatures/';
	  $img = $_POST['digital-signature'];
	  $img = str_replace('data:image/png;base64,', '', $img);
	  $img = str_replace(' ', '+', $img);
	  $data = base64_decode($img);
	  $file = $uploadDir . $_POST['user-email'] . '.png';
	  if(file_put_contents($file, $data)){
      $_SESSION['user_digital_signature'] = $_POST['user-email'] . '.png';
    }else{
      echo "<script>alert('An Error Occurred!');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }
        
        
    
    if(checkExistingUser($_POST['user-email'])) {
      echo "<script>alert('Email already exists');
      window.location.href = '../../View/User Authentication/signup.php';
      </script>";
      exit;
    }

    // Sending Verification Code
    if(send_mail($info)) {
      header("Location: ../../View/User Authentication/verify_email.php");
    }else{
      echo "<script>alert('An Error Occurred!');
          window.location.href = '../../View/User Authentication/signup.php';
          </script>";
          exit;
    }
    exit;
  } 
?>