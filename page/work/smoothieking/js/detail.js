$(function(){

    $(".thumbnail li").mouseover(function(){
        var index = $(".thumbnail li").index(this);
        $(".big_img img").hide();
        $(".big_img img").eq(index).show();

        $(".thumbnail li").removeClass("on");
        $(".thumbnail li").eq(index).addClass("on");
    });

    $(".thumbnail li").eq(0).mouseover();


}); //end