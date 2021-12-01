<?php
function dd($var)
{
    echo "<pre>";
    print_r($var);
    echo "</pre>";
} ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>close icon</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
老師用這個功能大多是用在errer message提醒
<body>
    <div class="container-fluid">
        <!-- 示範2 : 多維陣列-->
        <?php
        $errArr = [
            0 => ['id' => 's1', 'message' => "id 3 del", 'type' => "danger"],
            1 => ['id' => 's2', 'message' => "id 5 del", 'type' => "info"],
            2 => ['id' => 's3', 'message' => "id 7 del", 'type' => "success"]
        ]; ?>

        <div class=" alert alert-primary" role="alert">
            <button type="button" class="close" aria-label="close" data-dismiss="alert">X</button>
            foreach寫法
            <?php foreach ($errArr as $key => $value) { ?>
                <h3><?= dd($value['message']); ?></h3>
            <?php } ?>
        </div>
        <!-- 上下功能相同，上方用foreach和function顯示，下方用for顯示 -->
        <div class=" alert alert-primary" role="alert">
            <button type="button" class="close" aria-label="close" data-dismiss="alert">X</button>
            for寫法
            <?php for ($i = 0; $i < count($errArr); $i++) {
                echo '<h3>' . $errArr[$i]['message'] . '<br></h3>';
            } ?>
        </div>

        <!-- 替代成endforeach寫法 -->
        <div class=" alert alert-primary" role="alert">
            <button type="button" class="close" aria-label="close" data-dismiss="alert">X</button>
            endforeach替代寫法
            <?php foreach ($errArr as $key => $value) :?>
                <h3><?= dd($value['message']); ?></h3>
            <?php endforeach; ?>
        </div>


            <!-- 示範1 :alert結合array -->
            <!-- <?php foreach ($errArr as $key => $value) : ?>
                <h3><?= dd($value); ?></h3>
            <?php endforeach ?>
            <div class=" alert alert-primary" role="alert">
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong><?= dd($value); ?></strong>
            </div> -->


            <!-- 示範2 :alert結合多維陣列-->



            <!-- 一般不能關掉的alert -->

            <!-- <div class=" alert alert-primary" role="alert">
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>primary</strong>
            </div> -->


            <!-- 加data-dismiss是可以關掉alert的 -->
            <!-- <div class="alert alert-danger" role="alert">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
            </div> -->
        </div>








        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
</body>

</html>