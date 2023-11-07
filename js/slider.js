$(document).ready(function(){
    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-l"><img src="img/reviews/arr-prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="arrow-r"><img src="img/reviews/arr-next.png" alt="next"></button>',
        mobileFirst: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 319,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 639,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
            ]
    });
});