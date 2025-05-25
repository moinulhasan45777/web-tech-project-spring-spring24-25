<?php
  require_once("../Model/user_model.php");

  if(isset($_POST["submit-button"])){

    // Password Hashing
    $hash = password_hash($_POST['user-password'], PASSWORD_ARGON2ID, [
      'memory_cost' => 1 << 17,
      'time_cost' => 4,
      'threads' => 2
    ]);
    $user = ['email' => strtolower($_POST['user-email']),'hash'=> $hash,  'role'=> strtolower($_POST['user-role'])];

    if(addUser($user)){
      header('Location: add_sample_users.php');
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="" method="post" enctype="multipart/form-data">
    <label>Email</label>
    <input type="text" name="user-email">
    <label>Password</label>
    <input type="password" name="user-password">
    <label>Role</label>
    <input type="text" name="user-role">
    <input type="submit" name="submit-button" value="submit">
  </form>
</body>
</html>