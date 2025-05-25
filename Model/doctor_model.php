<?php
  require_once("../../Model/db.php");
  // Getting List of Doctors and Sending to JS using JSON
  function getDoctorListOnWindowLoad(){
    $con = getConnection();
    $sql = "select user_id, name, profile_picture, specialty, start_time, qualifications, patient_count from doctors";
    $result = mysqli_query($con, $sql);
    $doctors = [];
    if (mysqli_num_rows($result) > 0){
      while($row = mysqli_fetch_assoc($result)){
        $doctors[] = $row;
      }
      return $doctors;
      
    }
  }

  function searchDoctorByName($name){
    $con = getConnection();
    $sql = "select user_id, name, profile_picture, specialty, start_time, qualifications, patient_count from doctors where name LIKE '%" . $name . "%'";
    $result = mysqli_query($con, $sql);
    $doctors = [];
      if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
          $doctors[] = $row;
        }
        return $doctors;
      }
  }
?>