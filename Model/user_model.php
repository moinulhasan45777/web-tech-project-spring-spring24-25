<?php
    require_once('db.php');

    // Function to add a user into the database
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
    
    // Function to check whether the given email already exists in the database 
    function checkExistingUser($email){
        $con = getConnection();
        $sql = "select * from users where email = '{$email}'";
        $result = mysqli_query($con, $sql);
        if(mysqli_num_rows($result) > 0){
            return true;
        }
        return false;
    }

    function login($user){
        $con = getConnection();
        $sql = "select * from users where username='{$user['email']}' and password='{$user['pass']}'";
        $result = mysqli_query($con, $sql);

        if(mysqli_num_rows($result) == 1){
            return true;
        }else{
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