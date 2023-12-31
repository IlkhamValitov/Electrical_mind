$(window).on('load', function() {
    function funcBefore() {
        $('.center_block').text('Waiting of data');
    }
        //Выводимый результат
    function funcSuccess(data) {
        $('.center_block').html(data);
    }

    let header_navigation_links = $('.header_block .navigate_block a');
    let footer_navigation_links = $('.footer_block .second_nav_block a');//путь к ссылкам навигации в подвале
    let pages = ['gallery.php', 'history.php', 'about.php', 'contacts.php'];
    let i = 0;

    for (; i < header_navigation_links.length; i++) {
        $(header_navigation_links[i]).click(transition); //добавить подобный функционал и для ссылок подвала
        $(footer_navigation_links[i]).click(transition);
    }

    // // test function
    // function test() {
    //     console.log(1);
    // }




    function transition(e) {
        $.ajax({
            url: pages[e.currentTarget.accessKey],
            type: "POST",
            data: ({name: "someone"}),
            dataType: "html",
            beforeSend: funcBefore,
            success: funcSuccess
        });
    }

    


})