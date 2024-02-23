$(window).ready(function(){
    let logo = $('.logo');
    $(logo).click(function(){
        document.location.href = "index.php";
    })

    let images = $('.photos .images_row img');
    let substrate = $('.substrate');
    let background = $('body');



    let outer_c = $('#outer_container');
    $(outer_c).click(function(){
        console.log(111);
    })









//определено поведение в модуле галереи
$(images).click(function(){
    $(background).addClass('no_scroll');
    $(this).addClass('zoom');
    $(substrate).addClass('show');
    $(substrate).click(function(){
        $(this).removeClass('show');
        for(let i = 0; i < images.length; i++){
            if($(images[i]).hasClass('zoom')) {
                $(images[i]).removeClass('zoom');
                $(background).removeClass('no_scroll');
            }
        }
    })
});




// let button = $('button');
// let slider_img = $('.slider_block img');

//     let i = 1;
//     setInterval(slider, 3500);
//     function slider(){
//         while(i < slider_img.length){
//             if($(slider_img[i]).hasClass('show')){
//                 i++;
//                 if(i == slider_img.length){
//                     $(slider_img[0]).removeClass('show');
//                     $(slider_img[i]).removeClass('show');
//                     i = 0;
//                     break;
                    
//                 }
//                 continue;
//             }
//             else{
//                 $(slider_img[i]).addClass('show');
//                 break;
//                 if($(slider_img[slider_img.length - 1]).hasClass('show')){
//                     $(slider_img[slider_img.length - 1]).removeClass('show');
//                     break;
//                 }
//             }
//         }
//     }

    //уменьшение высоты галереи до указанного параметра при ее открытии
    let mark_section_body = $('body');
    let mark_section_html = $('html');
    if($(mark_section_body).hasClass('mark') && $(mark_section_html).hasClass('mark')){
        $(mark_section_body).addClass('suitable_gallery_size');
        $(mark_section_html).addClass('suitable_gallery_size');
    }
});