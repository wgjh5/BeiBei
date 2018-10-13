<?php
    $nickname = isset($_GET["nickname"])? $_GET["nickname"] : "666";
    // var_dump($nickname);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'BeiBei';
    $conn = new mysqli($servername, $username, $password, $dbname);



        $conn->set_charset('utf8');
        $result = $conn -> query('select * from login2');
        $res = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($res);
        
        foreach($res as $item){
            
            if($item ['nickname']== $nickname){
                 echo "true";
                 break;
            }
            
        }
        
        $result->close();
        $conn->close();




   



?>