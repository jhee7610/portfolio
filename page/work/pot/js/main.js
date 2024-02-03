$(function(){

    //비주얼 메인
    var list = $(".visual_list> li");
    var banner = $(".visual_img li");

    var i = 0;
    var playOn = false;
    var roll;

    banner.hide(); 
    list.click(function(){
        var index = list.index(this);

        if(list.state){
            stop();
            
            list.removeClass("on");
            list.eq(index).addClass("on");

            $(banner.state).hide(); 
            $(banner[index]).show(); 

            i=index;
            play();

        } else {
            list.eq(index).addClass("on");
            $(banner[index]).show();
            play();
        }

        list.state=this;
        banner.state=banner[index];
        return false;
    });

    $(".left_arrow").click(function(){
        i--;
        if(i<0){
            i=banner.length-1;
        }
        list[i].click();
    }); //left_click_event

    $(".right_arrow").click(function(){
        i++;
        if(i>list.length-1){
            i=0;
        }
        list[i].click();
    }); //right_click_event



    function play(){
        if(!playOn){
            playOn=true;
            roll=setInterval(function(){
                $(".visual_main .right_arrow").click();
            },2500);
        }
    } //play_function


    function stop(){
        if(playOn){
            playOn=false;
            clearInterval(roll);
        }
    } //stop_function

    list[0].click();






    //베스트 아이템
    var best_w=$(".best_cate li").innerWidth();
    var click_num=0;

    $(".best_item .right_btn").click(function(){
        click_num++;
        if(click_num>=3){
            click_num=3;
        }
        
        $(".best_cate").animate({
            left: -best_w*click_num
        });
    });

    $(".best_item .left_btn").click(function(){
        click_num--;
        if(click_num<=0){
            click_num=0;
        }
        $(".best_cate").animate({
            left: -best_w*click_num
        });
    });




    //md pick
    
    $(".mdpick_tab > li").mouseenter(function(){
       var md_index = $(".mdpick_tab > li").index(this);
        
       $(".mdpick_con > ul").hide();
       $(".mdpick_con > ul").eq(md_index).show();

       $(".mdpick_tab > li").removeClass("on");
       $(".mdpick_tab > li").eq(md_index).addClass("on");
       
    });
    



    //장바구니 상품
    var cart_w=($(".cart_list li").outerWidth())+20;
    var click_num=0;

    $(".cart_con .right_arrow").click(function(){
        click_num++;
        if(click_num>=4){
            click_num=4;
        }
        $(".cart_list").animate({
            left: -cart_w*click_num
        });
    });

    $(".cart_con .left_arrow").click(function(){
        click_num--;
        if(click_num<=0){
            click_num=0;
        }
        $(".cart_list").animate({
            left: -cart_w*click_num
        });
    });

   

    //color pick
    $(".color_frame").kxbdMarquee({
        direction: "left"
    });













}); //end



