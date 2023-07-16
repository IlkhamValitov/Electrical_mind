let images = $('.photos .images_row img');
let substrate = $('.substrate');
let background = $('body');

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