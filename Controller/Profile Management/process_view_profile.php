<?php
  require_once("../../Model/user_model.php");
  session_start();


    $user_id = 0;
    $role = "";
    if(isset($_SESSION['login_email'])){
      $user_id = $_SESSION['login_user_id'];
      $role = $_SESSION['login_role'];
    }else{
      $user_id = $_COOKIE['login_user_id'];
      $role = $_COOKIE['login_role'];
    }

    $json = json_encode(getUserInfo($user_id, $role));
    echo $json;
?>