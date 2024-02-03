$(function(){
    //fullpage.js
    $('#container').fullpage({
        verticalCentered: true,

        //callback
        onLeave: function(origin, index){
          var loadedSection = this;

          //화면 전환 직후에 실행
          if(index == 1){
            $('.hd_inner h1 a').addClass('white');
            $('.hd_inner .nav_wrap .nav>li>a').addClass('white');
            $('.menu-line').addClass('white'); 
          } else {
            $('.hd_inner h1 a').removeClass('white');
            $('.hd_inner .nav_wrap .nav>li>a').removeClass('white');
            $('.menu-line').removeClass('white');
          }
        },

        afterLoad: function(origin, index){
          var loadedSection = this;
          if(index)

          if(index == 2){
            $('.service').addClass('on');
          }
          else {
            $('.service').removeClass('on');
          }
        }
    });

   

    
    

    //visual main 슬라이드
    var BgSwiper = new Swiper('.bg_wrap .swiper-container', {
        touchRatio: 0, //마우스 드래그 막음
        slidesPerView: 'auto',
        // initialSlide: 2,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        mousewheel: false,
        grabCursor: false,
          controller: {
            control: MainSwiper,
          },
      });
      
    var MainSwiper = new Swiper('.slide_wrap .swiper-container', {
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 90,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        mousewheel: false,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true 
        },
        controller: {
          control: BgSwiper,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
        breakpoints: {
          1600: {
            spaceBetween: 70
          },
          1380: {
            spaceBetween: 70,
          },
          768: {
            spaceBetween: 30
          }
        },
      });
  
      MainSwiper.controller.control = BgSwiper;
      BgSwiper.controller.control = MainSwiper;

      $('.slide_wrap .swiper-slide').hover(function(){
          MainSwiper.autoplay.stop();
      }, function(){
        MainSwiper.autoplay.start();
      });





      //section service tab
      const svc_tabs = document.querySelectorAll(".svc_tab");

      function toggleOpen() {
        // if ([...this.classList].indexOf("active") >= 0) {
        //   this.classList.remove("active");
        //   return;
        // }
        svc_tabs.forEach(svc_tab => svc_tab.classList.remove("active"));
        this.classList.toggle("active");
      }

      function toggleActive(e) {
        if (e.propertyName.includes("width")) {
          this.classList.toggle("open");
        }
      }
      svc_tabs.forEach(svc_tab => {
        svc_tab.addEventListener("click", toggleOpen);
        svc_tab.addEventListener("transitionend", toggleActive);
      });









      
      
     


}); //