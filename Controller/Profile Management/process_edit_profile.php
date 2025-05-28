<?php
  session_start();
  if(isset($_POST['button-main'])){
    $allowedPictureExtensions = ["png", "jpg", "jpeg"];
    $name = trim($_POST['user-name']);
    $phone = $_POST['user-phone'];
    $proPicExtension = pathinfo($_FILES['change-avatar-input']['name'], PATHINFO_EXTENSION);
    $bg = $_POST['user-blood-group'];
    $dob = $_POST['user-dob'];
    $address = trim($_POST['user-address']);
    $city = trim($_POST['user-city']);
    $emName = trim($_POST['user-em-name']);
    $emRelation = trim($_POST['user-em-relation']);
    $emPhone = $_POST['user-em-phone'];
  
    // Name Validation
    if($name != ""){
      for($i = 0; $i < strlen($name); $i++){
        if(($name[$i] < 'A' || $name[$i] > 'Z') && ($name[$i] < 'a' || $name[$i] > 'z') && $name[$i] != '.' && $name[$i] != '-' && $name[$i] != ' ' ){
          echo "<script>alert('Invalid Name');
            window.location.href = '../../View/Profile Management/edit_profile.php';
            </script>";
            exit;
        }
      }
    }


    // Profile Picture Validation
    if($proPicExtension != ""){
      if(!in_array($proPicExtension, $allowedPictureExtensions)){
      echo "<script>alert('Invalid Profile Picture');
          window.location.href = '../../View/Profile Management/edit_profile.php';
          </script>";
          exit;
      }
    }


    // Phone Validation
    if($phone != ""){
      if(($phone[0] == '+' && strlen($phone) != 14) || ($phone[0] != '+' && strlen($phone) != 11)){
        echo "<script>alert('Invalid Phone Number');
            window.location.href = '../../View/Profile Management/edit_profile.php';
            </script>";
            exit;
      }
  
      for( $i = 0; $i < strlen($phone); $i++ ){
        if($i == 0 && $phone[$i] == '+'){
          continue;
        }
  
        if($phone[$i] < '0' || $phone[$i] > '9'){
          echo "<script>alert('Invalid Phone Number');
            window.location.href = '../../View/Profile Management/edit_profile.php';
            </script>";
            exit;
        }
      }
    }

    // City Validation
    if($city != ""){
      for($i = 0; $i < strlen($city); $i++){
        if(($city[$i] < 'A' || $city[$i] > 'Z') && ($city[$i] < 'a' || $city[$i] > 'z') && $city[$i] != '.' && $city[$i] != '-' && $city[$i] != ' ' ){
          echo "<script>alert('Invalid City');
            window.location.href = '../../View/User Authentication/detailed_signup.php';
            </script>";
            exit;
        }
      }
    }




    // Emergency Contact Name Validation
    if($emName != ""){
      for($i = 0; $i < strlen($emName); $i++){
        if(($emName[$i] < 'A' || $emName[$i] > 'Z') && ($emName[$i] < 'a' || $emName[$i] > 'z') && $emName[$i] != '.' && $emName[$i] != '-' && $emName[$i] != ' ' ){
          echo "<script>alert('Invalid Name');
            window.location.href = '../../View/User Authentication/detailed_signup.php';
            </script>";
            exit;
        }
      }
    }


    // Emergency Contact Relation Validation
    if($emRelation != ""){
      for($i = 0; $i < strlen($emRelation); $i++){
        if(($emRelation[$i] < 'A' || $emRelation[$i] > 'Z') && ($emRelation[$i] < 'a' || $emRelation[$i] > 'z') && $emRelation[$i] != '.' && $emRelation[$i] != '-' && $emRelation[$i] != ' ' ){
          echo "<script>alert('Invalid Relation');
            window.location.href = '../../View/User Authentication/detailed_signup.php';
            </script>";
            exit;
        }
      }
    }



    // Emergency Phone Validation
    if($emPhone != ""){
      if(($emPhone[0] == '+' && strlen($emPhone) != 14) || ($emPhone[0] != '+' && strlen($emPhone) != 11)){
        echo "<script>alert('Invalid Phone Number');
            window.location.href = '../../View/User Authentication/detailed_signup.php';
            </script>";
            exit;
      }
  
      for( $i = 0; $i < strlen($emPhone); $i++ ){
        if($i == 0 && $emPhone[$i] == '+'){
          continue;
        }
  
        if($emPhone[$i] < '0' || $emPhone[$i] > '9'){
          echo "<script>alert('Invalid Phone Number');
            window.location.href = '../../View/User Authentication/detailed_signup.php';
            </script>";
            exit;
        }
      }
    }
  }else{
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>