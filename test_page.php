<html lang="ru">
<head>  
        <meta charset="utf-8"/>
        <title>Test Page</title>
        <script defer src="script/script.js"></script>
        <script src="script/jquery.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body{
                width: 1300px;
                height: 700px;
                outline: 1px solid red;
            }
            .photos{
                width: 900px;
                height: 500px;
                outline: 1px solid orange;
            }
            .photos img{
                width: 20%;

            }
            img.zoom{
                width: 30%;
                transition: 1s;
                position: absolute;
            }
        </style>

</head>
<body> 

    <div class="substrate">

    </div>

    <div class="photos">
        <img src="img/1609.jpg">
        <img src="img/1609.jpg">
        <img src="img/1609.jpg">
    </div>

    <script>
        $('.photos img').click(function () {
            $(this).addClass('zoom');
        })
    </script>
</body> 
    </html>