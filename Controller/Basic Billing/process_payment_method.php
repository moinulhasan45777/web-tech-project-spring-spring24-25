<?php
  session_start();
  $totalPaid = $_POST['total-paid'];
  if(isset($_POST["button-main"])){
    if(!isset($_POST["payment-method"])){
      echo "<script>alert('Please select a payment method!');
          window.location.href = '../../View/Basic Billing/payment_method.php';
          </script>";
          exit;
    }

    if($_POST["payment-method"] == "installment" && $_POST["installment-duration"] == 'select'){
      echo "<script>alert('Please select installment duration!');
          window.location.href = '../../View/Basic Billing/payment_method.php';
          </script>";
          exit;
    }

    if(!isset($_POST["total-paid"])){
      echo "<script>alert('Total paid cannot be empty!');
          window.location.href = '../../View/Basic Billing/payment_method.php';
          </script>";
          exit;
    }

    for($i = 0; $i < strlen($totalPaid) ; $i++){
      if($totalPaid[$i] < '0' || $totalPaid[$i] > '9'){
        echo "<script>alert('Invalid total paid amount!');
          window.location.href = '../../View/Basic Billing/payment_method.php';
          </script>";
          exit;
      }
    }

    echo "<script>alert('Payment Successful!');
          window.location.href = '../../View/Landing Page/index.html';
          </script>";
          exit;
  }
?>