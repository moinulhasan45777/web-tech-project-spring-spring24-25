<?php
  if(isset($_POST["button-main"])){
    $insuranceCode = $_POST["insurance-code"];


    // Insurance Code Validation
    if($insuranceCode != ""){
      for( $i = 0; $i < strlen($insuranceCode); $i++ ){
        if (
        ($insuranceCode < "0" || $insuranceCode > "9") &&
        ($insuranceCode < "a" || $insuranceCode > "z") &&
        ($insuranceCode < "A" || $insuranceCode > "Z")
      ) {
        echo "<script>alert('Invalid Insurance Code!');
            window.location.href = '../../View/Basic Billing/charge_capture.php';
            </script>";
            exit;
        }
      }
    }

    header("Location: ../../View/Basic Billing/final_bill.php");
    exit;
  }else{
    echo "<script>alert('Invalid Request!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>