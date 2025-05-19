<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require_once '../phpmailer/Exception.php';
  require_once '../phpmailer/PHPMailer.php';
  require_once '../phpmailer/SMTP.php';

  session_start();

  function send_mail($info){
    $email = $info['email'];
    $name = $info['name'];
    $mail = new PHPMailer(true);

  $randomNumber = random_int(100000, 999999);



    try {
      //Server settings
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
      $mail->isSMTP();                                            //Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
      $mail->SMTPAuth   = true;  
      $mail->SMTPDebug = 0;                                 //Enable SMTP authentication
      $mail->Username   = 'moinulhasan45777@gmail.com';                     //SMTP username
      $mail->Password   = 'lqbh kowp uttj kpou';                               //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
      $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

      //Recipients
      $mail->setFrom('moinulhasan45777@gmail.com', 'Heritage Medical Center');
      $mail->addAddress($email, $name);     //Add a recipient

      //Content
      $mail->isHTML(true);                                  //Set email format to HTML
      $mail->Subject = 'Email Verification';
      $mail->Body    = "Hello, Welcome to Heritage Medical Center. We are eager to take care of your health inside and outside of our premises.
      <b>Code: $randomNumber </b>";

      $mail->send();
      $_SESSION['otp'] = $randomNumber;
      return true;
    } catch (Exception $e) {
      // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
      return false;
    }
  }
?>