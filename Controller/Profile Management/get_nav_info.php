<?php
  session_start();
  if(isset($_COOKIE["login_email"])){
    $proPic = ['url' => $_COOKIE['login_pro_pic']];
    echo json_encode($proPic);
  }else if(isset($_SESSION['login_email'])){
    $proPic = ['url' => $_SESSION['login_pro_pic']];
    echo json_encode($proPic);
  }else{
    $proPic = ['url' => "url"];
    echo json_encode($proPic);
  }
?>