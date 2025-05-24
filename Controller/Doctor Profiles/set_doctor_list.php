<?php
  require_once("../../Model/doctor_model.php");

  $json = json_encode(getDoctorListOnWindowLoad());
  echo $json;
?>