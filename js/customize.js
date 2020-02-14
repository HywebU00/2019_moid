// 自行加入的JS請寫在這裡
$(function() {
    // lazyload  
    //可以指定你想要的元素做lazyload
    $("img").lazyload({ effect: "fadeIn" });


    // 
    $('.newsSlider').slick({
        arrows: false,                      //左右箭頭
        autoplay: true,                     //自動播放
        autoplaySpeed: 3000,                //自動播放秒數
        dots: true,                         //顯示圓點
        dotsClass:  'slick-dots',           //原點css
        draggable: true,                    //滑鼠可以拖曳
        infinite: true,                     //無限輪播
        pauseOnHover: true,                 //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false,            //滑鼠移過圓點後暫停自動撥放
        rtl: false,                         //改變輪播方向
        slidesToShow: 1,                    //一次顯示幾張
        slidesToScroll: 1,                  //一次輪播幾張
        vertical: false                     //改成垂直方向
    });


    // 廣告banner
    $('.adSlider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]
    });




    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
});