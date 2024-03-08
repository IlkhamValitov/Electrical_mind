<html lang="ru">
<head>
        <meta charset="utf-8"/>
        <title>Slider</title>
        <script src="script/jquery.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            .slider_block{
                width: 600px;
                height: 300px;
                outline: 1px solid black;    
                position: relative;
            }

            .slider_block img{
                width: 100%;
                visibility: hidden;
                /* transform: translate3d(675px, 0, 0); */
                position: absolute;
            }
            
            .slider_block .show{
                width: 600px;
                height: 300px;
                visibility: visible;
                /* transform: translate3d(0, 0, 0); */
            }
           
               
            
        </style>
</head>
<body> 
    <!-- testing slider block! -->
    <div class="slider_block">
        <img class="show" src="img/1609.jpg">
        <img src="img/before.jpg">
        <img src="img/AI-and-robotics.jpeg">
        <button type="button">Нажать</button>
    </div>
    <!-- testing slider block -->
</section>


                    
<script>
   let images = $('.slider_block img');
   let i = 0;

   setInterval(slider, 2000);
   function slider() {
    // while(i < images.length){
    //     if(!$(images[i]).hasClass('show')){ //если картинка не содержит нужный класс, то следует его добавить
    //         $(images[i]).addClass('show');  //
    //         if($(images[i]).hasClass('show') && i != 0){ //если картинка содержит нужный класс, а также значение счетчика не равно нулю, то условие выполнится
    //             $(images[i - 1]).removeClass('show'); //если картинка содержит нужный класс, то этот класс удаляется у предыдущего изображения
    //             if(i < images.length - 1) { //пока значение переменной счетчика меньше значения длинны массива с картинками уменьшенной на единицу переменная будет увеличиваться 
    //                 i++; 
    //                 break;
    //             }
    //             else i = 0; //в противном случае, счетчик обнулится
    //             }
    //         else{ //в противном случае, если счетчик равен нулю, удаляется класс с последней картинки
    //             $(images[images.length - 1]).removeClass('show'); 
    //             i++;
    //             break;
    //         }
    //     }
    //     i++; 
    // }


        $(images[i]).removeClass('show');
        
        i++;
        if(i >= images.length) {
            i = 0;
        }
        $(images[i]).addClass('show');
    }
    
   
</script>
</body> 
    </html>