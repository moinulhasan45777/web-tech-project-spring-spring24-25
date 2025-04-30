<?php
  $fName = $email = $number = $bloodGroup = $dob = $city = $presentAddress = $emContactName = $emContactRelation = $emContactNumber = "";

  $allowedImgExtensions = [".png",".jpeg",".jpg"];
  if(isset($_REQUEST["submit-button"])){
    $fName = trim($_REQUEST["full-name"]);
    $email = trim($_REQUEST["email"]);
    $number = trim($_REQUEST["number"]);
    $bloodGroup = trim($_REQUEST["blood-group"]);
    $dob = $_REQUEST["dob"];
    $dobSep = explode("-", $dob);
    $city = trim($_REQUEST["city"]);
    $presentAddress = trim($_REQUEST["present-address"]);
    $emContactName = trim($_REQUEST["em-contact-name"]);
    $emContactRelation = trim($_REQUEST["em-contact-rel"]);
    $emContactNumber = trim($_REQUEST["em-contact-mobile"]);

    if(empty($fName) || empty($email) || empty($number) || $bloodGroup == "Select Blood Group" || empty($dob) || empty($city) || empty($presentAddress) || empty($emContactName) || empty($emContactRelation) || empty($emContactNumber) || empty($_FILES["e-sign"]["name"])){
      exit("<h1>Submission Failed. Please fill up all the forms</h1>");
    }

    if(!ctype_alpha(str_replace(' ', '', $fName))){
      exit("<h1>Invalid Name</h1>");
    }

    if(!str_contains($email,"@")){
      exit("<h1>Invalid Email</h1>");
    }

    if((strlen($number) != 11) && (strlen($number) != 13)){
      exit("<h1>Invalid Mobile Number</h1>");
    }

    $dob = $dobSep[2] . "/" . $dobSep[1] . "/" . $dobSep[0];

    if(!ctype_alpha(str_replace(' ', '', $city))){
      exit("<h1>Invalid City Name</h1>");
    }

    if(!ctype_alpha(str_replace(' ', '', $emContactName))){
      exit("<h1>Invalid Emergency Contact Name</h1>");
    }
    if(!ctype_alpha(str_replace(' ', '', $emContactRelation))){
      exit("<h1>Invalid Emergency Contact Relation</h1>");
    }

    if((strlen($emContactNumber) != 11) && (strlen($emContactNumber) != 13)){
      exit("<h1>Invalid Emergency Contact Mobile Number</h1>");
    }
  }
?>