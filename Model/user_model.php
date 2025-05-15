<?php
    require_once('db.php');

    function addUser($user){
        $con = getConnection();
        $sql = "insert into users values(null, '{$user['email']}', '{$user['hash']}', '{$user['role']}')";
        if(mysqli_query($con, $sql)){
            return true;
        }
        else{
            return false;
        }
        
    }

    // function getUserById($id){

    // }

    // function addUser($user){

    // }

    // function deleteUser($id){

    // }

?> 