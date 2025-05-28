<?php
  require_once("../../Model/db.php");
  // Getting List of Doctors and Sending to JS using JSON
  function getStaffListOnWindowLoad(){
    $con = getConnection();
    $sql = "select * from staffs";
    $result = mysqli_query($con, $sql);
    $staffs = [];
    if (mysqli_num_rows($result) > 0){
      while($row = mysqli_fetch_assoc($result)){
        $staffs[] = $row;
      }
      return $staffs;
      
    }
  }

  function searchStaffByName($name, $dept){
    $con = getConnection();
    $sql="";
    if($dept != "all"){
      $sql = "select * from staffs where name LIKE '%" . $name . "%' AND department='" . $dept ."'";
    }else{
      $sql = "select * from staffs where name LIKE '%" . $name . "%'";
    }
    $result = mysqli_query($con, $sql);
    $staffs = [];
      if (mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
          $staffs[] = $row;
        }
        return $staffs;
      }
  }
?>