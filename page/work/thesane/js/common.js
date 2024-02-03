$(function(){

    //btn_menu click
    $(".menu-link").click(function(e) {
        e.preventDefault();
        
        $(".menu_wrap").toggleClass("active");
        $(".btn_menu").toggleClass("open");
        
    });

    //pc nav
    // $('.nav_wrap>.nav>li').hover(function(){
    //     // $(this).addClass('active');
    //     $('.subnav', this).slideDown(500);
    // }, function(){
    //     stop();
    //     $('.subnav', this).slideUp(300);
    // });



    
    




}); //