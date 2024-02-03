$(function(){


    //풀페이지 스크롤
    $("section").mousewheel(function(event, delta){

        if(delta>0){
            var prev = $(this).prev().offset().top;

            $("html, body").stop().animate({
                scrollTop: prev
            }, 700);
        } else if(delta<0){
            var next = $(this).next().offset().top;

            $("html, body").stop().animate({
                scrollTop: next
            }, 700);
        }

    });




    // 스크롤 이벤트
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        var promo_sct = $(".promotion").offset().top;
        var offline_sct = $(".offline").offset().top;
        
        if(sct>=promo_sct && sct<offline_sct){
            $(".menu span").css("background-color","#222");
            $(".logo img").attr("src", "img/logo.png");
            $(".contact").css("color", "#222");
        }
        else {
            $(".menu span").css("background-color","#fff");
            $(".logo img").attr("src", "img/logo_w.png");
            $(".contact").css("color", "#fff");
        }


        var section = $(".wrap > section");

        section.each(function(){
            var target = $(this);
            var i = target.index();

            if(target.offset().top == sct){
                $(".navigation > li").removeClass("on");
                $(".navigation > li").eq(i).addClass("on");
            }
        });




        //promo 시계 탭
        var watch = $(".promo_con .watch li");
        var color = $(".promo_con .color li");

        watch.hide();
        color.click(function(){
           var index = color.index(this);

           watch.hide();
           $(watch[index]).show();

           color.removeClass("on");
           color.eq(index).addClass("on");
        });

        $(color[0]).click();

       
        var sct = $(window).scrollTop();
        var promo_sct = $(".promotion").offset().top;

        $(".promo_txt").hide();
        if(sct==promo_sct){
            $(".glass").delay(300).fadeIn();
            $(".thick").delay(800).fadeIn();
            $(".water").delay(1300).fadeIn();
            $(".case").delay(1800).fadeIn();
        }
    }); //window scroll
    
    


    //컬렉션 시계 
    var collect_list = $(".collection .collect_list li");
    var collect_item = $(".collection .collect_item > div");
    var title_height = $(".collection .collect_title .title").height();
    var theme_height = $(".collection .collect_item .theme").height();

    collect_list.click(function(){
        var index = collect_list.index(this);

        $(".collect_title .frame .title_wrap").animate({
            bottom: title_height*index*-1
        }, 300);
        $(".collect_item .frame .theme_wrap").animate({
            top: theme_height*index*-1
        }, 300)

        collect_list.state=this;
        collect_item.state=collect_item[index];

        $(collect_list).removeClass("on");
        $(collect_list[index]).addClass("on");
    }); //collect_list click
    
    $(collect_list[0]).click();



    $(".max .item_list li").click(function(){
        var index = $(".max .item_list li").index(this);

        $(".max .model li").hide();
        $(".max .model li").eq(index).show();
        $(".max .item_bg li").hide();
        $(".max .item_bg li").eq(index).show();
        $(".max .item li").hide();
        $(".max .item li").eq(index).show();

        $(".max .item_list li").removeClass("on");
        $(".max .item_list li").eq(index).addClass("on");
    });
    $(".max .item_list li").eq(0).click();
    

    $(".ocean .item_list li").click(function(){
        var index = $(".ocean .item_list li").index(this);

        $(".ocean .model li").hide();
        $(".ocean .model li").eq(index).show();
        $(".ocean .item_bg li").hide();
        $(".ocean .item_bg li").eq(index).show();
        $(".ocean .item li").hide();
        $(".ocean .item li").eq(index).show();

        $(".ocean .item_list li").removeClass("on");
        $(".ocean .item_list li").eq(index).addClass("on");
    });
    $(".ocean .item_list li").eq(0).click();


    $(".sunset .item_list li").click(function(){
        var index = $(".sunset .item_list li").index(this);

        $(".sunset .model li").hide();
        $(".sunset .model li").eq(index).show();
        $(".sunset .item_bg li").hide();
        $(".sunset .item_bg li").eq(index).show();
        $(".sunset .item li").hide();
        $(".sunset .item li").eq(index).show();

        $(".sunset .item_list li").removeClass("on");
        $(".sunset .item_list li").eq(index).addClass("on");
    });
    $(".sunset .item_list li").eq(0).click();


    $(".light .item_list li").click(function(){
        var index = $(".light .item_list li").index(this);

        $(".light .model li").hide();
        $(".light .model li").eq(index).show();
        $(".light .item_bg li").hide();
        $(".light .item_bg li").eq(index).show();
        $(".light .item li").hide();
        $(".light .item li").eq(index).show();

        $(".light .item_list li").removeClass("on");
        $(".light .item_list li").eq(index).addClass("on");
    });
    $(".light .item_list li").eq(0).click();


    $(".elegant .item_list li").click(function(){
        var index = $(".elegant .item_list li").index(this);

        $(".elegant .model li").hide();
        $(".elegant .model li").eq(index).show();
        $(".elegant .item_bg li").hide();
        $(".elegant .item_bg li").eq(index).show();
        $(".elegant .item li").hide();
        $(".elegant .item li").eq(index).show();

        $(".elegant .item_list li").removeClass("on");
        $(".elegant .item_list li").eq(index).addClass("on");
    });
    $(".elegant .item_list li").eq(0).click();


    $(".nature .item_list li").click(function(){
        var index = $(".nature .item_list li").index(this);

        $(".nature .model li").hide();
        $(".nature .model li").eq(index).show();
        $(".nature .item_bg li").hide();
        $(".nature .item_bg li").eq(index).show();
        $(".nature .item li").hide();
        $(".nature .item li").eq(index).show();

        $(".nature .item_list li").removeClass("on");
        $(".nature .item_list li").eq(index).addClass("on");
    });
    $(".nature .item_list li").eq(0).click();
    

  


    //quality 마우스 오버
    $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );




}) //end
