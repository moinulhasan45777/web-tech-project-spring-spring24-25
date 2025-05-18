<?php
    session_start();
    if(isset($_POST['button-main'])) {

      $_SESSION['user_blood_group'] = $_POST['user-blood-group'];

      // Date Validation
      // $dateBroken = explode('-', $_POST['user-dob']);
      // $date = $dateBroken[2] . $dateBroken[1] . $dateBroken[0];
      // $formattedDate = DateTime::createFromFormat('d/m/Y', $date)->format('Y-m-d');
      $_SESSION['user_dob'] = $_POST['user-dob'];

      $_SESSION['user_address'] = $_POST['user-address'];
      $_SESSION['user_city'] = $_POST['user-city'];
      
      $_SESSION['user_em_name'] = $_POST['user-em-name'];  
      
      
      $_SESSION['user_em_relation'] = $_POST['user-em-relation'];

      $_SESSION['user_em_phone'] = $_POST['user-em-phone'];

      header("Location: ../../View/User Authentication/medical_history.html");

    }
?>