<?
  require_once("../../Model/user_model.php");

  if(isset($_POST['button-main'])){

    // Password Hashing
    $hash = password_hash($_POST['user-pass'], PASSWORD_ARGON2ID, [
      'memory_cost' => 1 << 17,
      'time_cost' => 4,
      'threads' => 2
    ]);
    $user = ['email' => $_POST['user-email'], 'pass' => $hash];

    if(login($user)){
      echo "<script>alert('HAHA');</script>"; //TODO
      exit;
    } else{
      echo "<script>alert('Wrong Username or Password');
          window.location.href = '../../View/User Authentication/login.html';
          </script>";
          exit;
    }
  }
?>