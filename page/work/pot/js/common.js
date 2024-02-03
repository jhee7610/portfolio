$(function(){

    
    //헤더 고정
    $(window).scroll(function(){
        var sct=$(window).scrollTop();

        if(sct>=254){
            $(".header_ex").addClass("header_fix");
        $(".logo_wrap").hide();
        } else{
            $(".logo_wrap").show();
            $(".header_ex").removeClass("header_fix");
        }
    }) ;

    
    //탑버튼
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }
    });

    $(".top_btn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });













}); //end