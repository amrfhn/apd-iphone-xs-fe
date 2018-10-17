/* global _:true */
(function ($) {
    var obj = {};
  
    obj.init = function () {
        document.querySelectorAll('.cross-sell-tiles').forEach(function(el) {

            $(el).on('init', function(slick,slick,three) {
                if (!slick.$nextArrow.hasClass('slick-hidden')) {
                    $(this).addClass('d-flex');
                } else {
                    $(this).removeClass('d-flex');
                }
            })
            $(el).slick({
                adaptiveHeight: false,
                arrows: false,
                // autoplay: true,
                centerMode: false,
                dots: true,
                fade: false,
                infinite: true,
                initialSlide: 0,
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                useCSS: true,
                variableWidth: false,
                responsive: [
                    {
                        breakpoint: 500,
                        dots:false,
                        settings: {
                            centerMode: false,
                            slidesToShow: 3,
                        }
                    },
                    {
                    },
                ]
       
            });
            
        });
    };

    return obj;

}(jQuery)).init();
