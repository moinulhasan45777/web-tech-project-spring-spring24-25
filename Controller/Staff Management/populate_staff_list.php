<?php
  require_once("../../Model/staff_model.php");
  

  if(isset($_POST['json'])){
    $data = $_POST['json'];
    $staff = json_decode($data);
    $json = json_encode(searchStaffByName(($staff->name), ($staff->filter)));
    echo $json;
  }else{
    $json = json_encode(getStaffListOnWindowLoad());
    echo $json;
  }
?>