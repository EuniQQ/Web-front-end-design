<?php 
    include "./commonFun/commonFun.php";
    $errArr = [
      0  => "id 3 del",
      1  => "id 5 del",
      2  => "id 7 del",
    ];

    $age = [
        "Peter"=>"35",
        "Ben"=>"37",
        "Joe"=>"43"
    ];
    // print_r($age);
    dd($errArr);


    // for ($x = 1; $x <= 10; $x++) {
    //     echo "The number is: $x <br>";
    // }
    // foreach ($variable as $key => $value) {
    //     # code...
    // }

    // foreach ($errArr as $value) {
    //     echo "$value <br>";
    // }

    // foreach ($errArr as $key => $value) {
    //     echo "$key => $value <br>";
    // }
      

    // foreach ($age as $value) {
    //     echo "$value <br>";
    // }
    foreach ($age as $key => $value) {
        echo "$key => $value <br>";        
    }

    dd($age);


    // $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    // echo "Peter is " . $age['Peter'] . " years old.";

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>close icon</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>
    <div class="container-fluid">
    <?php
       //print_r($errArr);
    ?>  
        <!-- google php foreach html stackoverflow -->
        <?php foreach ($errArr as $key => $value) :?>
            <h3><?= $value;?></h3>
        <?php endforeach;?>

        <div class="alert alert-primary" role="alert">
            <button type="button" class="close" aria-label="Close" data-dismiss="alert">
                <span aria-hidden="true">&times;</span>
            </button>
            A simple primary alert—check it out!
        </div>

        <div class="alert alert-danger alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
        </div>

        <div class="alert alert-danger alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
        </div>

        <div class="alert alert-danger alert-dismissible fade show">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
        </div>


    </div>




    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
        crossorigin="anonymous"></script>
</body>

</html>