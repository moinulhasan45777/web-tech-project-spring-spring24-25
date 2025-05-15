<?php
    $host = "localhost:4306";
    $dbuser = 'heritage';
    $dbpass = 'abcd';
    $dbname = "heritage_medical";

    function getConnection(){
        global $dbname;
        global $dbpass;
        global $dbuser;

        $con = mysqli_connect($GLOBALS['host'], $dbuser, $dbpass, $dbname);
        return $con;
    }
?>