<?php
  session_start();

  if(isset($_POST["button-main"])){
    $consultationFee = $_POST["consultation-fee"];
    $stHour = $_POST["start-time-hour"];
    $stMinute = $_POST["start-time-minute"];
    $etHour = $_POST["end-time-hour"];
    $etMinute = $_POST["end-time-minute"];
  
    
    if($consultationFee != ""){
      for($i = 0; $i < strlen($consultationFee); $i++){
        if ($consultationFee[$i] < "0" || $consultationFee[$i] > "9") {
          echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
        }
      }
    }

    if($stHour != ""){
      if(intval($stHour) > 23){
        echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
      }
      for($i = 0; $i < strlen($stHour); $i++){
        if ($stHour[$i] < "0" || $stHour[$i] > "9")  {
          echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
        }
      }
    }

    if($stMinute != ""){
      if(intval($stMinute) > 23){
        echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
      }
      for($i = 0; $i < strlen($stMinute); $i++){
        if ($stMinute[$i] < "0" || $stMinute[$i] > "9")  {
          echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
        }
      }
    }


    if($etHour != ""){
      if(intval($etHour) > 23){
        echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
      }
      for($i = 0; $i < strlen($etHour); $i++){
        if ($etHour[$i] < "0" || $etHour[$i] > "9")  {
          echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
        }
      }
    }

    if($etMinute != ""){
      if(intval($etMinute) > 23){
        echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
      }
      for($i = 0; $i < strlen($etMinute); $i++){
        if ($etMinute[$i] < "0" || $etMinute[$i] > "9")  {
          echo "<script>alert('Invalid Consultation Fee!');
          window.location.href = '../../View/Doctor Profiles/edit_doctor_profile.html';
          </script>";
          exit;
        }
      }
    }
    header("Location: ../../View/Doctor Profiles/doctor_details.html");
  }else{
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>