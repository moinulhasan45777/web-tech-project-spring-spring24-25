<?php
  require_once("../../Model/doctor_model.php");
  

  if(isset($_POST['json'])){
    $data = $_POST['json'];
    $doctor = json_decode($data);
    $json = json_encode(searchDoctorByName(($doctor->name)));
    echo $json;
  }else{
    $json = json_encode(getDoctorListOnWindowLoad());
    echo $json;
  }
?>