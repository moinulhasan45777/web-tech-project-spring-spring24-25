<?php
  session_start();
  if(isset($_COOKIE["login_email"])){
    $proPic = ['role' => $_COOKIE['login_role']];
    echo json_encode($proPic);
  }else if(isset($_SESSION['login_email'])){
    $proPic = ['role' => $_SESSION['login_role']];
    echo json_encode($proPic);
  }else{
    $proPic = ['role' => "url"];
    echo json_encode($proPic);
  }
?>