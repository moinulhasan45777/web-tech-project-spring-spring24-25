<?php

  require_once("../../Model/user_model.php");
  session_start();

  if(!isset($_SESSION["user_email"])){
    header("Location: ../../View/Landing Page/index.html");
    exit;
  }

    if(isset($_POST['button-main'])) {

      // Taking Patient Medical History into a single string
      $patientMedicalHistory = "";
      for($i = 0; $i < 16; $i++){
        if(isset($_POST["patient-medical-history-".$i])){
          $patientMedicalHistory = $patientMedicalHistory . $_POST["patient-medical-history-" . $i] . ",";
        }  
      }
      
      if(isset($_POST["patient-medical-history-others"])) {
        $patientMedicalHistory = $patientMedicalHistory . $_POST["patient-medical-history-others"];
      }
      else{
        if($patientMedicalHistory != ""){
          $patientMedicalHistory = substr($patientMedicalHistory,0,-1);
        }
      }
      

      // Taking Family Medical History into a single string
      $familyMedicalHistory = "";
      for($i = 0; $i < 16; $i++){
        if(isset($_POST["family-medical-history-".$i])){
          $familyMedicalHistory = $familyMedicalHistory . $_POST["family-medical-history-" . $i] . ",";
        }  
      }

      if(isset($_POST["patient-medical-history-others"])) {
        $familyMedicalHistory = $familyMedicalHistory . $_POST["patient-medical-history-others"];
      }
      else{
        if($familyMedicalHistory != ""){
          $familyMedicalHistory = substr($familyMedicalHistory,0,-1);
        }
      } 

      $user = ['email' => $_SESSION['user_email'], 'hash' => $_SESSION['user_pass'], 'role' => $_SESSION['user_role']];

      if(addUser($user)){
        header("Location: ../../View/User Authentication/login.html");
      }
  }
?>