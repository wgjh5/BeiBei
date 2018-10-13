<?php
    $nickname = isset($_POST["nickname"])? $_POST["nickname"] : "666";
    $passwords = isset($_POST["password"])? $_POST["password"] : "0055";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'BeiBei';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    $res = $conn ->query('insert into login2(nickname,passwords)values("'.$nickname.'","'.$passwords.'")');
    if ($res) {
        echo "true";
    } else {
        echo "Error: " . $res . "<br>" . $conn->error;
    }





?>