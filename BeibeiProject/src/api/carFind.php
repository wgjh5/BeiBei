<?php
    $uname = isset($_GET["uname"])? $_GET["uname"] : "55";
    // echo $uname;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'BeiBei';
    $conn = new mysqli($servername, $username, $password, $dbname);



    $conn->set_charset('utf8');
    $result = $conn -> query('select * from car where name='.$uname);

        $res = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($res);
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        // $result->close();
        // $conn->close();










?>