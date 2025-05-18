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

      $_SESSION["user_medical_history"] = $patientMedicalHistory;
      
      

      // Taking Family Medical History into a single string
      $familyMedicalHistory = "";
      for($i = 0; $i < 16; $i++){
        if(isset($_POST["family-medical-history-".$i])){
          $familyMedicalHistory = $familyMedicalHistory . $_POST["family-medical-history-" . $i] . ",";
        }  
      }

      if(isset($_POST["family-medical-history-others"])) {
        $familyMedicalHistory = $familyMedicalHistory . $_POST["family-medical-history-others"];
      }
      else{
        if($familyMedicalHistory != ""){
          $familyMedicalHistory = substr($familyMedicalHistory,0,-1);
        }
      } 

      $_SESSION["user_family_medical_history"] = $familyMedicalHistory;

      $_SESSION['user_current_drug'] = $_POST['user-current-drug'];
      $_SESSION['user_previous_drug'] = $_POST['user-previous-drug'];
      $_SESSION['user_weekly_activity_level'] = $_POST['weekly-activity-level'];


      // Adding User in Database
      $user = ['email' => $_SESSION['user_email'], 'hash' => $_SESSION['user_pass'], 'role' => $_SESSION['user_role']];

      if(addUser($user)){
      }


      // Retrieving UserID for foreignKey
      $_SESSION['user_id'] = retrieveUserID($_SESSION['user_email']);
      

      // Adding patient/staff info in database
      $distinctUserInfo = ['name' => $_SESSION['user_name'], 'dob' => $_SESSION['user_dob'],
      'phone' => $_SESSION['user_phone'], 'email' => $_SESSION['user_email'], 'pp' => $_SESSION['user_profile_picture'],
      'ds' => $_SESSION['user_digital_signature'], 'bg' => $_SESSION['user_blood_group'], 'address' => $_SESSION['user_address'],
      'city' => $_SESSION['user_city'], 'em_n' => $_SESSION['user_em_name'], 'em_r' => $_SESSION['user_em_relation'],
      'em_p' => $_SESSION['user_em_phone'], 'user_id' => $_SESSION['user_id']];

      if($_SESSION['user_role'] == "patient"){
        if(addPatient($distinctUserInfo)){
          
        }
        else{
          
        }
      }

      // Adding medical history in database
      $userMedicalHistory = ['userHistory' => $_SESSION['user_medical_history'],
                            'familyHistory' => $_SESSION['user_family_medical_history'],
                            'currentDrug' => $_SESSION['user_current_drug'],
                            'previousDrug' => $_SESSION['user_previous_drug'],
                            'weeklyActivity' => $_SESSION['user_weekly_activity_level'],
                            'user_id' => $_SESSION['user_id']];
      
      if(addMedicalHistory($userMedicalHistory)){

      }
      else{

      }
  }
?>