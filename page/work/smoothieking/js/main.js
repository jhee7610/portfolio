$(function(){
    


    //비주얼 메인
    var list = $(".visual_list a");
    var banner = $(".visual_main ul li");

    var i=0;
    var playOn = false;
    var roll;

    list.click(function(){
        var index = list.index(this);

        if(list.state){
            stop();
            $(".visual_list li").removeClass("on");
            $(".visual_list li").eq(index).addClass("on");

            $(banner.state).hide();
            $(banner[index]).show();

            i=index;
            play();
        } else{
            $(".visual_list li").eq(index).addClass("on");
            $(banner[index]).show();
            play();
        }

        list.state = this;
        banner.state = banner[index];

        return false;
    }); //list.click()


    $(".left").click(function(){
        i--;
        if(i<0){
            i = banner.lenght-1;
        }
        list[i].click();
    }); //left_click_event
    
    $(".right").click(function(){
        i++;
        if(i>list.length-1){
            i = 0;
        }
        list[i].click();
    }); //right_click_event


    function play(){
        if(!playOn){
            playOn = true;
            roll=setInterval(function(){
                $(".right").click();
            },1500)
        }
    } //play()
    
    function stop(){
        if(playOn){
            playOn=false;
            clearInterval(roll);
        }
    } //stop()

    list[0].click();

    



    //스무디찾기
    $(".find_enter").click(function(){
        $(".find_main").hide();
        
        return false;
    });


    function find_slide(){
        var click_num=0;
        var find_num=$(".find_wrap > div").lenght;
        
        
        $(".next_btn").click(function(){
            click_num++;
            if(click_num>=find_num){
                click_num=find_num;
            }

            $(".find_wrap > div").eq(click_num).show();

        });
        $(".pre_btn").click(function(){
            click_num--;
            if(click_num<=0){
                click_num=0;
            }
            $(".find_wrap > div").hide();
            $(".find_wrap > div").eq(click_num).show();
        });

        

    } //find_slide()

    $(".find_wrap > div").eq(0).show();
    find_slide();





















}); //end