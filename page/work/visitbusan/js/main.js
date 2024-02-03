$(function(){


    // 헤더 고정 
    $(window).scroll(function(){
        var win=$(window).scrollTop();
        if(win>=45){
            $(".header_m_wrap > .header").addClass('header_fix');
        } else{
            $(".header_m_wrap > .header").removeClass('header_fix');
        }
    });

    
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var win_w=$(window).width();
        if(sct>=26){
            $(".header_wrap").addClass('header_fix');
            $(".header_wrap .gnb").hide();
            if(win_w>=1241){
                $(".sub_menu_wrap").css({top: 84});
            } else if(win_w>=861){
                $(".sub_menu_wrap").css({top: 80});
            }
        } else{
            $(".header_wrap").removeClass('header_fix');
            $(".header_wrap .gnb").show();
            if(win_w>=1241){
                $(".sub_menu_wrap").css({top: 124});
            }else if(win_w>=861){
                $(".sub_menu_wrap").css({top: 120});
            }
        }
    });





    //모바일 메뉴
    $(".menu_m").click(function (){
        $(".lnb_m_wrap").fadeToggle();
    });
    $(".lnb_m>li").click(function(){
        $(".sub",this).slideToggle();
    });


    //서브메뉴
    $(".lnb").mouseenter(function(){
        $(".sub_menu_wrap").slideDown();
    });
    $(".sub_menu_wrap").mouseleave(function(){
        $(this).slideUp();
    });





    // 비주얼 메인 슬라이드
    $(".vs_main").bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        touchEnabled: false,
        // slideWidth: 600
      });




    // var vs_width=$(".visual_main .frame ul li").width();
    // $(".visual_main .visual_list li").each(function(index){
    //     $(this).attr('data-index', index);
    // }).click(function(){
    //     visual_num=$(this).attr('data-index');
    //     $(".visual_main .frame ul").animate({
    //         left: -visual_num*vs_width
    //     });

    //     $('.visual_main .visual_list li[data-index!='+visual_num+'] span').removeClass('list_on');
    //     $(".visual_main .visual_list li[data-index="+visual_num+"] span").addClass('list_on');

    //});


    var visual_list = $(".visual_main .visual_list li");
    var visual_banner = $(".visual_main .frame").find("li");

    var num=0;
    var visual_playOn = false;
    var roll;

    visual_banner.hide();
    visual_list.click(function(){
        var index = visual_list.index(this);

        if(visual_list.state){
            stop();

            $(".visual_list li span").removeClass("list_on");
            $(".visual_list li").eq(index).find("span").addClass("list_on");

            $(visual_banner.state).hide();
            $(visual_banner[index]).show();

            num=index;
            play();
        } else{
            visual_list.eq(index).addClass("list_on");
            $(visual_banner[index]).show();
            visual_play();
        }

        visual_list.state=this;
        visual_banner.state=visual_banner[index];

        return false;
    }); //visual_list.click()

    $(".play_btn").click(function(){
        num++;
        if(num>visual_list.length-1){
            num = 0;
        }
        visual_list[num].click();
    }); //right_click_event


    function visual_play(){
        if(!visual_playOn){
            visual_playOn = true;
            roll=setInterval(function(){
                $(".play_btn").click();
            }, 2000);
        }
    } //visual_play()


    visual_list[0].click();





   
   

    

    //이달의 테마여행 슬라이드
    var list = $(".map_m>ul>li");
    var img = $(".month_img_m>li");
    var txt = $(".month_txt_m>li");
    var playOn = "false";

    var i=0;

    img.hide();
    list.find(".maker").hide();
    txt.hide();
    

    list.click(function(){
        var index = list.index(this);

        if(list.state){
            stop();
            $(img.state).hide();
            $(img[index]).fadeIn();

            $(txt.state).fadeOut();
            $(txt[index]).fadeIn();

            $(list.state).find(".maker").hide();
            $(list[index]).find(".maker").show();

            i=index;
        } else {
            $(img[index]).fadeIn();
            $(txt[index]).fadeIn();
            $(list[index]).find(".maker").show();
            play();

        }

        list.state=this;
        img.state=img[index];
        txt.state=txt[index];

        return false;
    });


    function play(){
        if(!playOn){
            playOn=true;
        }
    }
    function stop(){
        if(playOn){
            playOn=false;
        }
    }

    list[0].click();
    $(list[0]).find(".maker").show();
    $(txt[0]).show();




    //테마여행
    var theme_width = $(".theme_wrap .frame").innerWidth();
    $(".theme_trip .right_btn").click(function(){
        $(".theme_wrap  ul").animate({
            left: theme_width*-1
        });
    });
    $(".theme_trip .left_btn").click(function(){
        $(".theme_wrap  ul").animate({
            left: 0
        });
    });



    $(".map .maker").hide();

    var month_img = $(".month_slide .frame_img ul li").width();
    var month_txt = $(".month_slide .frame_txt ul li").innerWidth();
    $(".map ul li").each(function(index){
        $(this).attr('data-index', index);
    }).click(function(){
        map_num=$(this).attr('data-index');
        $(".month_slide .frame_img ul").animate({
            left: -map_num*month_img
        });
        $(".month_slide .frame_txt ul").animate({
            left: -map_num*month_txt
        });
        $(".map ul li[data-index*="+map_num+"] .maker").show();
        $(".map ul li[data-index!="+map_num+"] .maker").hide();
    });

    $(".map ul li").eq(0).click();






    // 축제 슬라이드
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });


    var fest_width = $('.festival_wrap .frame').width();
    $(".festival_wrap .fest_list li").each(function(index){
        $(this).attr('data-index', index);
     }).click(function(){
         
        page_num =$(this).attr('data-index');
        $(".festival_wrap .fest_box").animate({
            left: -page_num*fest_width
        });
        $('.festival_wrap .fest_list li[data-index!='+page_num+']').removeClass('on');
        $('.festival_wrap .fest_list li[data-index='+page_num+']').addClass('on');
    });



    //큐레이션

    $(".curation .keyword li").click(function(e){
        e.preventDefault();

        var category=$(this).attr("class");
        $(".keyword_con li").hide();
        $(".keyword_con li[class*="+category+"]").show();
        $(".search_box p").hide();
        $(".search_box p[class*="+category+"]").show();
    });
    
        




    //탑버튼
    $(".top_btn_m").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });


    $(window).scroll(function(){
        var win=$(window).scrollTop();
        if(win>=400){
            $(".top_btn").fadeIn();
        }
        else{
            $(".top_btn").hide();
        }
    });

    $(".top_btn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });



    

  


});